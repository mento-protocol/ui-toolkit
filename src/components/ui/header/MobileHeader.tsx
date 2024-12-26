"use client";

import { forwardRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/common/cn";
import { Container } from "../container/Container";
import { HeaderProps } from "./Header";
import { SheetContent, SheetTrigger } from "../sheet/Sheet";
import { ThemeSwitch } from "../ThemeSwitch";
import { ConnectButton } from "../connect-button/ConnectButton";
import { motion } from "framer-motion";

const MobileHeader = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      logo,
      navItems = [],
      showThemeSwitch,
      showConnectButton,
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-background lg:hidden",
          className,
        )}
        {...props}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              {logo}
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                  <AnimatedHamburger isOpen={isOpen} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map(({ href, label, isExternal }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  {showConnectButton && <ConnectButton />}
                  {showThemeSwitch && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Theme</span>
                      <ThemeSwitch />
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </header>
    );
  },
);
MobileHeader.displayName = "MobileHeader";

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="relative h-5 w-5">
      <motion.span
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { rotate: 45, y: 8 },
          closed: { rotate: 0, y: 0 },
        }}
        className="absolute h-0.5 w-full bg-foreground"
      />
      <motion.span
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }}
        className="absolute top-2 h-0.5 w-full bg-foreground"
      />
      <motion.span
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { rotate: -45, y: -8 },
          closed: { rotate: 0, y: 16 },
        }}
        className="absolute bottom-0 h-0.5 w-full bg-foreground"
      />
    </div>
  );
};

export { MobileHeader };
