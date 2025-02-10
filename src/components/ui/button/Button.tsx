import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/common/cn";
import Link from "next/link";

const buttonVariants = cva(
  "relative block w-full select-none rounded-md border border-solid border-black px-x4 py-[18px] font-inter text-[15px]/[20px] text-black transition [transform-style:preserve-3d] hover:no-underline disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-gray-light disabled:text-black disabled:before:bg-black-off hover:[&>span]:text-[inherit]",
  {
    variants: {
      fullwidth: { true: "", false: "max-w-[200px]" },
      theme: {
        primary: cn(
          "text-white hover:text-white",
          "bg-primary [&_path]:fill-white",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back ",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-primary-dark before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        secondary: cn(
          "text-black hover:text-black",
          "bg-secondary [&_path]:fill-black",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-secondary-dark before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        success: cn(
          "text-black hover:text-black",
          "bg-success [&_path]:fill-black",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-success-dark before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        danger: cn(
          "text-white hover:text-white",
          "bg-error [&_path]:fill-white",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-error-dark before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        warning: cn(
          "text-black hover:text-black",
          "bg-warning [&_path]:fill-black",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-warning-dark before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        info: cn(
          "text-black hover:text-black",
          "bg-info [&_path]:fill-black",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-black before:bg-info-dark before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        tertiary: cn(
          "text-black hover:text-black dark:text-white dark:hover:text-white",
          "border-gray bg-white dark:bg-black [&_path]:fill-current",
          "top-[-3px] mt-[3px] before:absolute before:left-[50%] before:top-[calc(50%_+_4px)] before:block before:h-[50%] hover:top-0 active:top-[1px]",
          "transition-all duration-200 ease-out-back",
          "before:w-[calc(100%_+_1.1px)] before:rounded-md before:border before:border-solid before:border-gray dark:before:border-white before:bg-gray-light dark:before:bg-black-off before:transition-all before:duration-200 before:ease-out-back before:[border-style:inset] before:[transform:translateX(-50%)_translateZ(-1px)] hover:before:top-[calc(50%_+_1px)] active:before:top-[calc(50%_+_2px)]"
        ),
        link: cn(
          "text-black hover:text-black dark:text-white dark:hover:text-white",
          "border-none bg-transparent [&_path]:fill-current",
          "hover:underline"
        ),
        clear: cn(
          "text-black hover:text-black dark:text-white dark:hover:text-white",
          "border-none bg-transparent [&_path]:fill-current"
        ),
      },
    },
    defaultVariants: {
      theme: "primary",
      fullwidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, theme, onClick, type = "button", href, target = "_self", fullwidth, disabled, ...props }, ref) => {
    const content = (
      <span className="flex items-center justify-center gap-[1ch] whitespace-nowrap font-medium tracking-normal no-underline transition duration-200 ease-out [&_*]:whitespace-nowrap">
        {children}
      </span>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={target}
          className={cn(
            buttonVariants({
              theme,
              fullwidth,
              className,
            })
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        className={cn(
          buttonVariants({
            theme,
            fullwidth,
            className,
          })
        )}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
