"use client";

import { useMemo } from "react";
import { cn } from "@/utils";

type Type = "success" | "info" | "warning" | "danger";

type ProgressStyle = {
  borderRadius?: number;
  border?: string;
  backgroundColor?: string;
};

interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
}

interface ProgressBarProps extends BaseComponentProps {
  current: number;
  max: number;
  type?: Type;
  color?: string;
  valueFormat?: "localised" | "alphabetic";
}

export interface MultiProgressBarValue {
  progress: number;
  type?: Type;
}

interface MultiProgressBarProps extends BaseComponentProps {
  values: MultiProgressBarValue[];
}

const barColor = (type?: Type) => {
  switch (type) {
    case "success":
      return "bg-success";
    case "danger":
      return "bg-destructive";
    case "warning":
      return "bg-warning";
    case "info":
      return "bg-info";
    default:
      return "bg-primary";
  }
};

export const ProgressBar = ({
  className,
  current = 0,
  max,
  type,
  color,
  valueFormat,
}: ProgressBarProps) => {
  const progress: number = useMemo(() => {
    return max ? Math.floor((current / max) * 100) : 0;
  }, [max, current]);

  const progressStyles: ProgressStyle = useMemo(() => {
    if (progress < 3) {
      return {
        border: "none",
        backgroundColor: "transparent",
      };
    } else if (progress < 6) {
      return {
        borderRadius: 0,
        backgroundColor: "transparent",
      };
    } else if (progress === 100) {
      return {
        border: "none",
      };
    } else {
      return {};
    }
  }, [progress]);

  const parsedValue = useMemo(() => {
    if (!valueFormat) {
      return current.toString();
    }
    if (valueFormat === "localised") {
      return current.toLocaleString();
    } else if (valueFormat === "alphabetic") {
      return current.toString();
    }
  }, [current, valueFormat]);

  return (
    <div
      className={cn(
        "flex flex-col items-end justify-center text-right text-base font-normal md:text-lg",
        className,
      )}
    >
      <div className="-mt-[3px] inline-block pb-2 align-top leading-none">
        {parsedValue}
      </div>
      <div
        className="flex h-2 w-full overflow-hidden rounded-full border border-input bg-background"
      >
        <div
          className={cn("h-full transition-all", barColor(type))}
          style={{
            width: `${progress}%`,
            color,
            ...progressStyles,
          }}
        />
      </div>
    </div>
  );
};

export const MultiProgressBar = ({
  className,
  values,
}: MultiProgressBarProps) => {
  const progressBars = useMemo(() => {
    return values.map(({ progress, type }) => {
      if (progress < 3) {
        return {
          progress,
          type,
          styles: {
            border: "none",
            backgroundColor: "transparent",
          },
        };
      } else if (progress < 6) {
        return {
          progress,
          type,
          styles: {
            backgroundColor: "transparent",
          },
        };
      } else if (progress === 100) {
        return {
          progress,
          type,
          styles: {
            border: "none",
          },
        };
      } else {
        return {
          progress,
          type,
          styles: {},
        };
      }
    });
  }, [values]);

  return (
    <div
      className={cn(
        "flex flex-col items-end justify-center text-right text-lg font-normal",
        className,
      )}
    >
      <div className="relative flex h-4 w-full overflow-hidden rounded-full">
        {progressBars
          .filter((item) => item.progress !== 0)
          .map(({ progress, type, styles }, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "relative h-full flex-grow border-r border-input transition-all",
                  barColor(type),
                )}
                style={{
                  width: `${progress}%`,
                  ...styles,
                }}
              />
            );
          })}
        <div
          className={cn(
            "absolute inset-0 z-10 rounded-full border border-input",
          )}
        />
      </div>
    </div>
  );
}; 