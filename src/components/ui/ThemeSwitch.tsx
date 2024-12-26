"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/utils/common/cn";

export const ThemeSwitch = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-[24px] w-[44px] items-center justify-between rounded-[32px] px-x1 py-[3px]",
        isDark ? "bg-secondary" : "border border-black bg-white",
      )}
    >
      <div className="flex w-full items-center justify-between gap-x1">
        <div
          className={cn(
            "ease duration-[400ms] absolute h-[18px] w-[18px] rounded-[9px] bg-black transition-all",
            isDark ? "left-[21px]" : "left-[3px]",
          )}
        />
        <div className="flex w-full justify-between">
          <Sun size={14} />
          <Moon size={14} />
        </div>
      </div>
    </button>
  );
};
