"use client";

import { Popover } from "@headlessui/react";
import { Calendar, type CalendarProps } from "@/components/ui/calendar/Calendar";
import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/utils/common/cn";

type DatePickerProps = CalendarProps & {
  selected?: Date | null;
  onDayClick: (date: Date) => void;
  closeOnSelect?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
};

interface DatePickerButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  closeButtonRef?: React.RefObject<HTMLButtonElement>;
}

interface DatePickerPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

const DatePickerButton = forwardRef<HTMLButtonElement, DatePickerButtonProps>(
  ({ children, className, closeButtonRef, ...props }, ref) => {
    return (
      <Popover.Button
        ref={closeButtonRef || ref}
        className={cn(
          "w-full rounded-[4px] border border-gray-light p-1 text-left",
          className
        )}
        {...props}
      >
        {children}
      </Popover.Button>
    );
  }
);
DatePickerButton.displayName = "DatePickerButton";

const DatePickerPanel = forwardRef<HTMLDivElement, DatePickerPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mt-2", className)} {...props}>
        {children}
      </div>
    );
  }
);
DatePickerPanel.displayName = "DatePickerPanel";

const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
  ({ onDayClick, children, className, closeOnSelect = true, onClose, ...restProps }, ref) => {
    const buttonChild = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === DatePickerButton
    );
    const panelChild = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === DatePickerPanel
    );

    if (!buttonChild || !React.isValidElement(buttonChild)) {
      throw new Error("DatePicker must have a DatePickerButton as a child");
    }

    return (
      <Popover ref={ref} onAbort={onClose} className={cn(className, "relative h-full")}>
        {({ close }) => (
          <>
            {buttonChild}
            <Popover.Panel className="absolute right-0 z-10 flex w-[300px] flex-col items-center rounded-[4px] border border-gray-light bg-white dark:bg-black-off">
              <Calendar
                {...restProps}
                onDayClick={(date: Date) => {
                  if (closeOnSelect) close();
                  onDayClick(date);
                }}
              />
              {panelChild}
            </Popover.Panel>
          </>
        )}
      </Popover>
    );
  }
);
DatePicker.displayName = "DatePicker";

export { DatePicker, DatePickerButton, DatePickerPanel }; 