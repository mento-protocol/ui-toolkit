"use client";
import * as React from "react";
import BaseComponentProps from "@/components/interfaces/base-component-props.interface";
import { cn } from "@/utils/common/cn";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button/Button";
import { ChevronIcon, DiscordIcon, LearnMoreIcon } from "@/components/ui/_icons";
import { links } from "@/config/links";

interface LearnMoreProps extends BaseComponentProps {}

export const LearnMore = ({ className, style }: LearnMoreProps) => {
  const pathname = usePathname();

  return (
    <div className={cn("mb-auto mt-x4", className)} style={style}>
      <div className="mx-auto w-full max-w-[1120px]">
        {pathname === "/" && (
          <div className="flex flex-col items-center justify-between gap-x3 bg-[#121316] px-x5 py-0 lg:flex-row lg:pl-x13 lg:pr-x11">
            <div className="max-w-[500px] text-white">
              <h2 className="text-[44px] mb-x5 text-center font-semibold lg:text-left">
                Learn more
              </h2>
              <p className="text-x3 leading-x5 text-center lg:text-left">
                If you&apos;re interested in learning more about Mento, finding
                out what the team is working on now, or would like to
                contribute, please join our discord server.
              </p>
              <Button
                className="mt-x4 w-full lg:w-fit"
                href={links.discord}
                target="_blank"
              >
                <div className="flex items-center gap-x2 px-x3">
                  <DiscordIcon />
                  <span>Join the community</span>
                  <ChevronIcon direction="right" />
                </div>
              </Button>
            </div>
            <div className="learn-more-icon">
              <LearnMoreIcon className="h-auto max-w-full" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

LearnMore.displayName = "LearnMore";