"use client";

import { useEffect, useRef, useState } from "react";
import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertCodeBlock,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  headingsPlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { cn } from "@/utils";
import { cva } from "class-variance-authority";

interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

interface MarkdownEditorProps extends BaseComponentProps {
  value: string;
  error?: string;
  markdownChanged: (value: string) => void;
}

const buttonVariants = cva(
  cn(
    "m-0 mb-2 mr-2 cursor-pointer border-none bg-none p-0",
    "hover:text-primary",
  ),
  {
    variants: {
      active: {
        true: "text-primary",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const MarkdownEditor = ({
  className,
  value,
  markdownChanged,
}: MarkdownEditorProps) => {
  const [markdown, setMarkdown] = useState(value);
  const editorRef = useRef<MDXEditorMethods>(null);

  const [selectedView, setSelectedView] = useState(
    "editor" as "editor" | "preview",
  );

  useEffect(() => {
    setMarkdown(value);
  }, [value]);

  const updateValue = (value: string) => {
    setMarkdown(value);
    markdownChanged(value);
  };

  return (
    <div className={className}>
      <div>
        <button
          className={buttonVariants({
            active: selectedView === "editor",
          })}
          onClick={() => setSelectedView("editor")}
        >
          Editor
        </button>
        <button
          className={buttonVariants({
            active: selectedView === "preview",
          })}
          onClick={() => setSelectedView("preview")}
        >
          Preview
        </button>
        {selectedView === "editor" && (
          <div>
            <MDXEditor
              ref={editorRef}
              className="h-full w-full rounded-lg border border-input bg-background text-foreground"
              contentEditableClassName={cn(
                "prose-editor prose max-h-[650px] min-h-[450px] overflow-y-auto dark:prose-invert",
              )}
              markdown={markdown}
              onChange={updateValue}
              plugins={[
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      <UndoRedo />
                      <BlockTypeSelect />
                      <BoldItalicUnderlineToggles />
                      <CodeToggle />
                      <CreateLink />
                      <InsertCodeBlock />
                      <ListsToggle />
                      <InsertThematicBreak />
                    </>
                  ),
                }),
                listsPlugin(),
                quotePlugin(),
                headingsPlugin(),
                linkPlugin(),
                linkDialogPlugin(),
                thematicBreakPlugin(),
                codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
                codeMirrorPlugin({
                  codeBlockLanguages: {
                    js: "JavaScript",
                    css: "CSS",
                    txt: "text",
                    tsx: "TypeScript",
                  },
                }),
                diffSourcePlugin({
                  viewMode: "rich-text",
                  diffMarkdown: "",
                }),
                markdownShortcutPlugin(),
              ]}
            />
          </div>
        )}
        {selectedView === "preview" && (
          <div className="prose dark:prose-invert max-h-[650px] overflow-y-auto p-4 border border-input rounded-lg">
            <MDXEditor
              readOnly
              markdown={markdown}
              plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                thematicBreakPlugin(),
                codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
                codeMirrorPlugin({
                  codeBlockLanguages: {
                    js: "JavaScript",
                    css: "CSS",
                    txt: "text",
                    tsx: "TypeScript",
                  },
                }),
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}; 