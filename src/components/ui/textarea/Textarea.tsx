import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const baseStyles = cn(
  "mt-x1 min-h-[inherit] w-full gap-2 rounded-lg border border-solid transition-all duration-200 ease-out-circ",
  "focus:border focus:border-solid focus:shadow-focus"
);

const sizes = {
  true: "px-4 py-2",
  false: "px-input-x py-input-y",
};

const textareaWrapperVariants = cva(
  baseStyles,
  {
    variants: {
      compact: {
        true: sizes.true,
        false: sizes.false,
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

const Textarea = ({ className, label, errorMessage, addon, compact, hasError, disabled, ...props }: TextareaProps) => {
  return (
    <div className={cn("mt-x1", disabled && "cursor-not-allowed", className)}>
      {!!label && (
        <label className="mb-2 text-xl font-medium" htmlFor={props.id}>
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
};

export { Textarea, textareaWrapperVariants };
