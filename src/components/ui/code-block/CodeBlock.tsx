"use client";

import { cn } from "@/utils/common/cn";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "../button/Button";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative rounded-lg bg-muted", className)}>
      <div className="flex items-center justify-between px-4 py-2 border-b">
        {language && (
          <span className="text-sm text-muted-foreground">{language}</span>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2"
          onClick={copyToClipboard}
        >
          <Copy className="h-4 w-4" />
          <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono">
          {showLineNumbers
            ? code.split("\n").map((line, i) => (
                <div key={i} className="table-row">
                  <span className="table-cell pr-4 text-muted-foreground select-none">
                    {i + 1}
                  </span>
                  <span className="table-cell">{line}</span>
                </div>
              ))
            : code}
        </code>
      </pre>
    </div>
  );
}
