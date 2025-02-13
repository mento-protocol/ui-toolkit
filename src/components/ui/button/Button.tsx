import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/common/cn";
import Link from "next/link";
import { forwardRef } from "react";

const buttonVariants = cva(
  "relative inline-flex select-none items-center justify-center rounded-md border border-solid px-4 py-2 text-sm font-medium transition [transform-style:preserve-3d] disabled:pointer-events-none disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      theme: {
        primary: cn(
          "border-black bg-primary text-white [&_path]:fill-white",
          "top-[-3px] mt-[3px]",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-primary-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-white hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        secondary: cn(
          "border-black bg-secondary text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px]",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-secondary-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        tertiary: cn(
          "border-black bg-danger text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px]",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-primary-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        danger: cn(
          "border-black bg-error text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px]",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-error-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        warning: cn(
          "border-black bg-warning text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px]",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-warning-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        success: cn(
          "border-black bg-success text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px]",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-success-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        info: cn(
          "border-black bg-info text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px] rounded-b-lg",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-info-dark",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:before:border-white"
        ),
        white: cn(
          "border-black bg-white text-black [&_path]:fill-black",
          "top-[-3px] mt-[3px] rounded-b-lg",
          "before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%]",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-gray-light",
          "before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)]",
          "transition-all duration-200 ease-out-back",
          "hover:top-0 hover:text-black hover:before:top-[calc(50%_+_1px)]",
          "active:top-[1px] active:before:top-[calc(50%_+_2px)]",
          "dark:border-white dark:bg-black dark:text-white dark:before:border-white dark:before:bg-gray-dark"
        ),
        link: cn(
          "border-none bg-transparent p-0 text-black underline underline-offset-4",
          "transition-[color] duration-200 ease-out",
          "visited:text-primary-dark hover:text-primary active:text-primary-dark",
          "dark:text-white"
        ),
        clear: cn(
          "border-black bg-transparent text-black",
          "transition-[background-color] duration-200 ease-out",
          "hover:bg-gray-lighter hover:text-black",
          "dark:border-white dark:text-white dark:hover:bg-gray dark:hover:text-white"
        ),
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      fullwidth: {
        true: "w-full",
        false: "max-w-[200px]",
      },
    },
    defaultVariants: {
      theme: "primary",
      size: "default",
      fullwidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  asChild?: boolean;
  target?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, theme, size, fullwidth, href, asChild, target = "_self", ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ theme, size, fullwidth, className }))}
          target={target}
        >
          <span className="flex items-center justify-center gap-[1ch] whitespace-nowrap font-medium tracking-normal [&_*]:whitespace-nowrap">
            {props.children}
          </span>
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ theme, size, fullwidth, className }))}
        ref={ref}
        {...props}
      >
        <span className="flex items-center justify-center gap-[1ch] whitespace-nowrap font-medium tracking-normal [&_*]:whitespace-nowrap">
          {props.children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
