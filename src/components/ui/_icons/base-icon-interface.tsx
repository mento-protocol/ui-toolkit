import { type HTMLAttributes } from "react";

export interface BaseIconProps extends HTMLAttributes<SVGElement> {
  /**
   * Width of the icon in pixels
   */
  width?: number;
  /**
   * Height of the icon in pixels
   */
  height?: number;
  /**
   * CSS class for the stroke color, following our color system
   * @default "stroke-foreground dark:stroke-foreground-dark"
   */
  strokeClass?: string;
  /**
   * CSS class for the fill color, following our color system
   * @default "fill-foreground dark:fill-foreground-dark"
   */
  fillClass?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}
  