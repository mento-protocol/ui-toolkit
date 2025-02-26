import { type CSSProperties, type ComponentProps } from "react";

export interface BaseIconProps extends ComponentProps<"svg"> {
  /**
   * Width of the icon in pixels
   */
  width?: number;
  /**
   * Height of the icon in pixels
   */
  height?: number;
  /**
   * Color for the icon
   */
  color?: string;
  /**
   * Background color for the icon
   */
  backgroundColor?: string;
  /**
   * Whether to use theme colors
   */
  useThemeColor?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Additional CSS styles
   */
  style?: CSSProperties;
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
}