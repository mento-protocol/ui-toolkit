"use client";

import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils/common/cn";
import { RefCallBack } from "react-hook-form";

type CurrencyInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof variants> & {
    label?: string;
    addon?: React.ReactNode;
    errorMessage?: string;
    maxValue?: string;
    maxLabel?: string;
    symbol?: string;
  };

const variants = cva(
  "flex flex-col gap-2 rounded-[4px] border border-input p-2 text-sm disabled:bg-background dark:border-input",
  {
    variants: {
      fullWidth: { true: "w-full" },
      disabled: { true: "cursor-not-allowed opacity-50" },
      error: { true: "border-destructive" },
    },
    defaultVariants: {
      fullWidth: false,
      disabled: false,
      error: false,
    },
  },
);

export const CurrencyInput = ({
  label,
  className,
  errorMessage,
  addon,
  fullWidth,
  disabled,
  onMax,
  onChange,
  id,
  inputRef,
  maxValue,
  maxLabel = "Max available",
  symbol,
  ...props
}: CurrencyInputProps & {
  inputRef?: RefCallBack;
  onMax?: () => void;
  onChange: (val: string) => void;
}) => {
  const _onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"] = (
    e,
  ) => {
    const nextUserInput = e.target.value;
    if (typeof nextUserInput === "undefined") {
      return;
    }
    const val = nextUserInput.replace(/,/g, ".");
    if (/^[0-9]*\.?[0-9]*$/.test(val)) {
      if (onChange) onChange(val);
    }
  };
  
  const hasError = !!errorMessage;
  
  return (
    <div className="flex flex-col">
      <div
        className={cn(
          variants({ error: hasError, fullWidth, disabled, className }),
        )}
      >
        {!!label && <label htmlFor={id}>{label}</label>}
        <input
          {...props}
          ref={inputRef}
          id={id}
          className="text-[22px] focus:outline-none disabled:bg-background"
          placeholder="0.0"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck="false"
          autoComplete="off"
          disabled={disabled}
          onChange={_onChange}
        />
        {maxValue && (
          <button
            onClick={(e) => {
              e.preventDefault();
              onMax?.();
            }}
            className="w-full opacity-50 hover:opacity-100"
          >
            <div className="flex justify-between">
              <div>{maxLabel}</div>
              <div className="flex gap-1">
                <span>{maxValue}</span>
                {symbol && ` ${symbol}`}
              </div>
            </div>
          </button>
        )}
      </div>
      <span className="min-h-[16px] text-base/[16px] text-destructive">
        {!!errorMessage && errorMessage}
      </span>
    </div>
  );
}; 