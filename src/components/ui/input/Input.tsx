import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const inputWrapperVariants = cva(
  cn(
    "mt-x1 w-full gap-2 rounded-lg border border-solid border-gray-light transition-all duration-200 ease-out-circ",
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

const inputVariants = cva(
  cn(
    "w-full border-none bg-transparent text-lg font-normal text-black caret-primary outline-none dark:text-white",
    "placeholder:text-gray-light"
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

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputWrapperVariants> {
  label?: string;
  errorMessage?: string | React.ReactNode;
  addon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, errorMessage, addon, compact, disabled, hasError, ...props }, ref) => {
    return (
      <div className={cn("mt-x1", disabled && "cursor-not-allowed", className)}>
        {!!label && (
          <label className="mb-2 text-[22px] font-medium" htmlFor={props.id}>
            {label}
          </label>
        )}
        <div
          className={cn(
            inputWrapperVariants({
              compact,
              hasError: hasError || !!errorMessage,
            }),
            disabled && "cursor-not-allowed"
          )}
        >
          <input
            type={type}
            className={cn(
              inputVariants({
                compact,
              }),
              disabled && "cursor-not-allowed"
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

Input.displayName = "Input";

export { Input, inputWrapperVariants, inputVariants };
