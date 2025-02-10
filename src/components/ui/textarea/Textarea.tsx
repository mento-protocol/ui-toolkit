import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const textareaWrapperVariants = cva(
  cn(
    "mt-x1 min-h-[inherit] w-full gap-2 rounded-lg border border-solid transition-all duration-200 ease-out-circ",
    "focus:border focus:border-solid focus:shadow-[0_0_0_2px]"
  ),
  {
    variants: {
      compact: {
        true: "px-4 py-3",
        false: "px-[32px] py-[18px]",
      },
      hasError: {
        true: cn(
          "border-error",
          "focus:border-error focus:shadow-error",
          "focus-within:border-error focus-within:shadow-error"
        ),
        false: cn(
          "border-gray-light",
          "focus:border-primary focus:shadow-primary",
          "focus-within:border-primary focus-within:shadow-primary"
        ),
      },
    },
    defaultVariants: {
      compact: false,
      hasError: false,
    },
  }
);

const textareaVariants = cva(
  cn(
    "min-h-[inherit] w-full border-none bg-transparent text-lg font-normal text-black caret-primary outline-none dark:text-white",
    "placeholder:text-gray-light",
    "disabled:cursor-not-allowed disabled:opacity-50"
  ),
  {
    variants: {
      compact: {
        true: "text-sm",
      },
    },
    defaultVariants: {
      compact: false,
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaWrapperVariants> {
  label?: string;
  errorMessage?: string | React.ReactNode;
  addon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, errorMessage, addon, compact, hasError, disabled, ...props }, ref) => {
    return (
      <div className={cn("mt-x1", disabled && "cursor-not-allowed", className)}>
        {!!label && (
          <label className="mb-2 text-[22px] font-medium" htmlFor={props.id}>
            {label}
          </label>
        )}
        <div
          className={cn(
            textareaWrapperVariants({
              compact,
              hasError: hasError || !!errorMessage,
            })
          )}
        >
          <textarea
            className={cn(
              textareaVariants({
                compact,
              })
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {addon}
        </div>
        {!!errorMessage && (
          <div className="p2-1 text-sm font-semibold text-error-dark">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
