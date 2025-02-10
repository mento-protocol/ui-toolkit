"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const avatarVariants = cva(
  cn(
    "relative flex shrink-0 overflow-hidden rounded-full",
    "ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  ),
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
      theme: {
        default: "bg-gray-light dark:bg-gray",
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        danger: "bg-error",
        warning: "bg-warning",
        info: "bg-info",
      },
    },
    defaultVariants: {
      size: "md",
      theme: "default",
    },
  }
);

const avatarImageVariants = cva("aspect-square h-full w-full object-cover");

const avatarFallbackVariants = cva(
  cn(
    "flex h-full w-full items-center justify-center font-medium",
    "bg-gray-light text-black dark:bg-gray dark:text-white"
  ),
  {
    variants: {
      theme: {
        default: "bg-gray-light text-black dark:bg-gray dark:text-white",
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-black",
        success: "bg-success text-black",
        danger: "bg-error text-white",
        warning: "bg-warning text-black",
        info: "bg-info text-black",
      },
    },
    defaultVariants: {
      theme: "default",
    },
  }
);

const avatarGroupVariants = cva("flex items-center -space-x-2", {
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string;
  delayMs?: number;
}

export interface AvatarGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarGroupVariants> {
  limit?: number;
  total?: number;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, theme, src, alt, fallback, delayMs, ...props }, ref) => {
  // Function to get initials from a name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size, theme }), className)}
      {...props}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className={avatarImageVariants()}
      />
      <AvatarPrimitive.Fallback
        delayMs={delayMs}
        className={cn(avatarFallbackVariants({ theme }))}
      >
        {fallback ? getInitials(fallback) : null}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, limit = 3, total, size = "md", children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children);
    const visibleAvatars = childrenArray.slice(0, limit);
    const remainingAvatars = total || childrenArray.length - limit;

    return (
      <div
        ref={ref}
        className={cn(avatarGroupVariants({ size }), className)}
        {...props}
      >
        {visibleAvatars.map((child, index) => {
          if (React.isValidElement<AvatarProps>(child)) {
            return React.cloneElement(child, {
              ...child.props,
              className: cn("ring-2 ring-background", child.props.className),
              size,
              key: index,
            });
          }
          return child;
        })}
        {remainingAvatars > 0 && (
          <Avatar
            className="ring-2 ring-background"
            size={size}
            fallback={`+${remainingAvatars}`}
          />
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup, avatarVariants, avatarImageVariants, avatarFallbackVariants }; 