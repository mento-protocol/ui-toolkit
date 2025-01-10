import BaseComponentProps from "@/lib/interfaces/base-component-props.interface";
import { useMemo } from "react";
import NumbersService from "@/lib/helpers/numbers.service";
import { cn } from "@/styles/helpers";

type Type = "success" | "info" | "warning" | "danger";

type ProgressStyle = {
  borderRadius?: number;
  border?: string;
  backgroundColor?: string;
};

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

const barColor = (type: Type) => {
  switch (type) {
    case "success":
      return "#D2FCBD";
    case "danger":
      return "#FF848A";
    case "info":
      return "#FFFFFF";
    default:
      return "#D2FCBD";
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

  const barColorString = type ? barColor(type) : "";

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
        backgroundColor: barColorString,
      };
    } else {
      return {
        backgroundColor: barColorString,
      };
    }
  }, [progress, barColorString]);

  const parsedValue = useMemo(() => {
    if (!valueFormat) {
      return current.toString();
    }
    if (valueFormat === "localised") {
      return current.toLocaleString();
    } else if (valueFormat === "alphabetic") {
      return NumbersService.parseNumericValue(current);
    }
  }, [current, valueFormat]);

  return (
    <div
      className={cn(
        "flex flex-col items-end justify-center text-right font-fg text-[16px] font-normal md:text-[22px]",
        className,
      )}
    >
      <div className="-mt-[3px] inline-block border-black pb-[8px] align-top leading-none">
        {parsedValue}
      </div>
      <div
        className="flex h-[8px] w-full overflow-hidden rounded-3xl border-[0.5px] border-solid border-black dark:border-gray"
        style={{
          background:
            progress < 6
              ? `linear-gradient(to right, ${barColorString} ${progress}%, white ${progress}%)`
              : "transparent",
        }}
      >
        <div
          className={cn("h-full bg-gray")}
          style={{
            width: `${progress}%`,
            color,
            ...progressStyles,
          }}
        ></div>
      </div>
    </div>
  );
};

// Cases where percent is larger than 100 does not affect appearance, can Math.min vs 100 if needed
export const MultiProgressBar = ({
  className,
  values,
}: MultiProgressBarProps) => {
  const progressBars = useMemo(() => {
    return values.map(({ progress, type }) => {
      const barColorString = type ? barColor(type) : "";
      if (progress < 3) {
        return {
          progress,
          barColorString,
          styles: {
            border: "none",
            backgroundColor: "transparent",
          },
        };
      } else if (progress < 6) {
        return {
          progress,
          barColorString,
          styles: {
            backgroundColor: "transparent",
          },
        };
      } else if (progress === 100) {
        return {
          progress,
          barColorString,
          styles: {
            border: "none",
            backgroundColor: barColorString,
          },
        };
      } else {
        return {
          progress,
          barColorString,
          styles: {
            backgroundColor: barColorString,
          },
        };
      }
    });
  }, [values]);

  return (
    <div
      className={cn(
        "flex flex-col items-end justify-center text-right font-fg text-[22px]/[22px] font-normal",
        className,
      )}
    >
      <div className="relative flex h-4 w-full overflow-hidden rounded-3xl">
        {progressBars
          .filter((item) => item.progress !== 0)
          .map(({ progress, barColorString }, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "h-100% relative top-0 flex-grow border-r-[1px] border-black bg-gray dark:border-gray",
                )}
                style={{
                  width: `${progress}%`,
                  backgroundColor: barColorString,
                }}
              ></div>
            );
          })}
        {/* More sensible border */}
        <div
          className={cn(
            "absolute top-0 z-10 h-full w-full flex-grow rounded-3xl border-[0.5px] border-solid border-black bg-transparent dark:border-gray",
          )}
        ></div>
      </div>
    </div>
  );
};
