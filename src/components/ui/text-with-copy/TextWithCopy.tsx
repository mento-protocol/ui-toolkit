"use client";

import * as React from "react";
import { Copy } from "lucide-react";
import { cn } from "@/utils/common/cn";
import { toast } from "sonner";

interface TextWithCopyProps {
  text: string;
  displayText?: string;
  className?: string;
  maxLength?: number;
  copyMessage?: string;
}

export const TextWithCopy = ({
  className,
  text,
  displayText,
  maxLength,
  copyMessage = "Text copied to clipboard",
}: TextWithCopyProps) => {
  const displayValue = displayText || text;
  const truncatedText = maxLength && displayValue.length > maxLength
    ? `${displayValue.slice(0, maxLength)}...`
    : displayValue;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(copyMessage);
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy text");
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-mono">{truncatedText}</span>
      <button
        onClick={onCopy}
        className="cursor-pointer text-muted-foreground hover:text-foreground"
      >
        <Copy className="h-4 w-4" />
      </button>
    </div>
  );
}; 