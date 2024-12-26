"use client";

import { forwardRef } from "react";
import { cn } from "@/utils/common/cn";
import Link from "next/link";
import { Container } from "../container/Container";
import { ThemeSwitch } from "../ThemeSwitch";
import { ConnectButton } from "../connect-button/ConnectButton";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navItems?: Array<{
    href: string;
    label: string;
  }>;
  showThemeSwitch?: boolean;
  showConnectButton?: boolean;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      logo,
      navItems = [],
      showThemeSwitch = true,
      showConnectButton = true,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background",
          className,
        )}
        {...props}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              {logo}
            </Link>

            <nav className="hidden gap-6 md:flex">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-medium transition-colors hover:text-foreground/80"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {showThemeSwitch && <ThemeSwitch />}
              {showConnectButton && <ConnectButton />}
            </div>
          </div>
        </Container>
      </header>
    );
  },
);
Header.displayName = "Header";

export { Header };
