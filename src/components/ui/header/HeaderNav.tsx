"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/utils/common/cn";

export interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {
  items?: Array<{
    href: string;
    label: string;
    isExternal?: boolean;
  }>;
}

const HeaderNav = forwardRef<HTMLElement, HeaderNavProps>(
  ({ items = [], className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("hidden gap-6 md:flex", className)}
        {...props}
      >
        {items.map(({ href, label, isExternal }) => (
          <Link
            key={href}
            href={href}
            className="text-sm font-medium transition-colors hover:text-foreground/80"
            {...(isExternal && {
              target: "_blank",
              rel: "noopener noreferrer",
            })}
          >
            {label}
          </Link>
        ))}
      </nav>
    );
  },
);
HeaderNav.displayName = "HeaderNav";

export { HeaderNav };
