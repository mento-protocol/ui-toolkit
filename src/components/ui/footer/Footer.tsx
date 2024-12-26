"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";
import { Container } from "../container/Container";
import { cn } from "@/utils/common/cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion/Accordion";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  navItems?: Array<{
    section: string;
    items: Array<{
      href: string;
      label: string;
      isExternal?: boolean;
    }>;
  }>;
  socialLinks?: Array<{
    href: string;
    icon: React.ReactNode;
    label: string;
  }>;
  showThemeSwitch?: boolean;
}

const Footer = forwardRef<HTMLElement, FooterProps>(
  (
    {
      logo,
      navItems = [],
      socialLinks = [],
      showThemeSwitch = true,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <footer
        ref={ref}
        className={cn("mt-auto border-t bg-background", className)}
        {...props}
      >
        <Container>
          {/* Desktop Footer */}
          <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 py-16">
            <div className="flex flex-col gap-4">
              {logo}
              <p className="text-sm text-muted-foreground">
                Mento © {new Date().getFullYear()}. <br />
                All rights reserved.
              </p>
            </div>

            {navItems.map(({ section, items }) => (
              <div key={section}>
                <h3 className="text-sm font-medium">{section}</h3>
                <ul className="mt-4 space-y-3">
                  {items.map(({ href, label, isExternal }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground hover:text-foreground"
                        {...(isExternal && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col justify-between">
              <div className="flex gap-4">
                {socialLinks.map(({ href, icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
              {showThemeSwitch && (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Theme</span>
                  <ThemeSwitch />
                </div>
              )}
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="lg:hidden py-8 space-y-8">
            <div className="flex items-center justify-between">
              {logo}
              <div className="flex gap-4">
                {socialLinks.map(({ href, icon, label }) => (
                  <Link
                    key={href}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {icon}
                  </Link>
                ))}
              </div>
            </div>

            <Accordion type="single" collapsible>
              {navItems.map(({ section, items }) => (
                <AccordionItem key={section} value={section}>
                  <AccordionTrigger className="text-sm">
                    {section}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col space-y-3">
                      {items.map(({ href, label, isExternal }) => (
                        <Link
                          key={href}
                          href={href}
                          className="text-sm text-muted-foreground hover:text-foreground"
                          {...(isExternal && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {showThemeSwitch && (
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-sm">Theme</span>
                <ThemeSwitch />
              </div>
            )}

            <p className="text-sm text-muted-foreground pt-4 border-t">
              Mento © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    );
  },
);
Footer.displayName = "Footer";

export { Footer };
