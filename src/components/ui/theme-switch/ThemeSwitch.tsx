"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { LightModeIcon, DarkModeIcon } from "../_icons";
import { cn } from "@/utils/common/cn";

export const enum Theme_Mode {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeSwitch = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  console.log("From kit",theme);
  const onToggleSwitch = () => {
    setTheme(theme === Theme_Mode.DARK ? Theme_Mode.LIGHT : Theme_Mode.DARK);
  };

  return (
    <button
      onClick={onToggleSwitch}
      className={cn(
        "relative flex h-[24px] w-[44px] items-center justify-between rounded-[32px] px-x1 py-[3px]",
        theme === Theme_Mode.LIGHT ? "border border-black bg-white" : "bg-secondary",
      )}
    >
      <div className="flex w-full items-center justify-between gap-x1">
        <div
          className={cn(
            "ease duration-[400ms] absolute h-[18px] w-[18px] rounded-[9px] bg-black transition-all",
            theme === Theme_Mode.LIGHT ? "left-[3px]" : "left-[21px]",
          )}
        />
        <div className="flex w-full justify-between">
          <LightModeIcon />
          <DarkModeIcon />
        </div>
      </div>
    </button>
  );
};

