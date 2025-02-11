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

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn(
      "w-full border-t border-border dark:border-border-dark bg-background dark:bg-background-dark",
      className
    )}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Mento Protocol</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Community</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground dark:text-foreground-dark">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border dark:border-border-dark pt-8">
          <p className="text-center text-foreground/60 dark:text-foreground-dark/60">
            © {new Date().getFullYear()} Mento Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
