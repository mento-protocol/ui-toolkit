"use client";

import { cn } from "@/utils/common/cn";
import Link from "next/link";
import { ConnectButton } from "../connect-button/ConnectButton";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../button/Button";

export interface HeaderProps {
  className?: string;
  logo?: React.ReactNode;
  navItems?: Array<{
    href: string;
    label: string;
  }>;
  showThemeSwitch?: boolean;
  showConnectButton?: boolean;
}

export function Header({
  className,
  logo,
  navItems = [],
  showThemeSwitch = true,
  showConnectButton = true,
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-border dark:border-border-dark bg-background dark:bg-background-dark",
      className
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            {logo || <span className="text-xl font-bold">Mento UI</span>}
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {showThemeSwitch && (
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-background dark:bg-background-dark hover:bg-accent dark:hover:bg-accent-dark"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          {showConnectButton && <ConnectButton />}
        </div>
      </div>
    </header>
  );
}
