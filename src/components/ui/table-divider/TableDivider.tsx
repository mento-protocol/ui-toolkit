import * as React from "react";
import BaseComponentProps from "@/components/interfaces/base-component-props.interface";
import { cn } from "@/utils/common/cn";

interface TableDividerProps extends BaseComponentProps {
  fullWidth?: boolean;
}

export const TableDivider = ({
  className,
  fullWidth = true,
}: TableDividerProps) => (
  <div
    className={cn(
      "border-b border-solid border-gray-light",
      fullWidth && "[grid-column:1_/_-1]",
      className,
    )}
  />
);

