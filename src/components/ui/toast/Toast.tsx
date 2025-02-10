"use client";

import * as React from "react";
import { Toaster as SonnerToaster, toast } from "sonner";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const toastVariants = cva(
  cn(
    "group flex w-full items-center justify-between gap-2 rounded-lg border p-4 text-sm",
    "data-[type=success]:border-success data-[type=success]:bg-success/10 data-[type=success]:text-success",
    "data-[type=error]:border-error data-[type=error]:bg-error/10 data-[type=error]:text-error",
    "data-[type=warning]:border-warning data-[type=warning]:bg-warning/10 data-[type=warning]:text-warning",
    "data-[type=info]:border-info data-[type=info]:bg-info/10 data-[type=info]:text-info",
    "dark:data-[type=success]:border-success-dark dark:data-[type=success]:bg-success-dark/10 dark:data-[type=success]:text-success-dark",
    "dark:data-[type=error]:border-error-dark dark:data-[type=error]:bg-error-dark/10 dark:data-[type=error]:text-error-dark",
    "dark:data-[type=warning]:border-warning-dark dark:data-[type=warning]:bg-warning-dark/10 dark:data-[type=warning]:text-warning-dark",
    "dark:data-[type=info]:border-info-dark dark:data-[type=info]:bg-info-dark/10 dark:data-[type=info]:text-info-dark"
  ),
  {
    variants: {
      variant: {
        default: "",
        success: "data-[type=success]",
        error: "data-[type=error]",
        warning: "data-[type=warning]",
        info: "data-[type=info]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ToasterProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center";
  duration?: number;
  className?: string;
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  title?: string;
  description?: string;
}

export function Toaster({ position = "bottom-right", duration = 3000, className }: ToasterProps) {
  return (
    <SonnerToaster
      position={position}
      duration={duration}
      className={className}
      theme="light"
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: cn(
            toastVariants(),
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-80 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full",
            "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0",
            "data-[swipe=end]:animate-out data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
            "data-[swipe=end]:duration-200 data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
          ),
          title: "font-semibold",
          description: "text-muted-foreground",
          actionButton: "group-[.success]:bg-success group-[.error]:bg-error group-[.warning]:bg-warning group-[.info]:bg-info",
          cancelButton: "group-[.success]:bg-success/20 group-[.error]:bg-error/20 group-[.warning]:bg-warning/20 group-[.info]:bg-info/20",
        },
      }}
    />
  );
}

// Utility functions for showing toasts
export function showToast(props: ToastProps) {
  const { title, description, variant = "default", ...rest } = props;
  toast(title, {
    description,
    className: cn(toastVariants({ variant }), rest.className),
    ...rest,
  });
}

export function showSuccessToast(props: Omit<ToastProps, "variant">) {
  showToast({ ...props, variant: "success" });
}

export function showErrorToast(props: Omit<ToastProps, "variant">) {
  showToast({ ...props, variant: "error" });
}

export function showWarningToast(props: Omit<ToastProps, "variant">) {
  showToast({ ...props, variant: "warning" });
}

export function showInfoToast(props: Omit<ToastProps, "variant">) {
  showToast({ ...props, variant: "info" });
} 