import * as React from "react";
import { type BaseIconProps } from "./base-icon-interface";

export const GithubIcon = ({
  width = 20,
  height = 20,
  className,
  ...restProps
}: BaseIconProps) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M10.9863 0.241211C16.5248 0.241211 20.9863 4.70275 20.9863 10.2412C20.9863 14.6643 18.1017 18.4335 14.1402 19.7412C13.794 19.8566 13.4863 19.6643 13.4863 19.2412V16.5104C13.4863 15.1643 12.794 14.6643 12.794 14.6643C14.9863 14.4335 17.3709 13.5874 17.3709 9.7412C17.3709 8.0489 16.3325 7.0489 16.3325 7.0489C16.3325 7.0489 16.8709 5.93352 16.2556 4.39506C16.2556 4.39506 15.4094 4.12583 13.4863 5.43352C11.8709 4.97198 10.1017 4.97198 8.48633 5.43352C6.56325 4.12583 5.7171 4.39506 5.7171 4.39506C5.10171 5.93352 5.64017 7.0489 5.64017 7.0489C5.64017 7.0489 4.60171 8.0489 4.60171 9.7412C4.60171 13.5874 6.98633 14.4335 9.1786 14.6643C9.1786 14.6643 8.64017 15.0489 8.52479 16.0104C7.94787 16.2797 6.48633 16.7027 5.60171 15.1643C5.60171 15.1643 5.10171 14.2027 4.10171 14.1258C4.10171 14.1258 3.10171 14.1258 4.02479 14.7412C4.02479 14.7412 4.67864 15.0489 5.14017 16.2027C5.14017 16.2027 5.75556 18.1643 8.52479 17.5489V19.2412C8.52479 19.6643 8.17864 19.8566 7.83248 19.7412C3.87094 18.4335 0.986328 14.6643 0.986328 10.2412C0.986328 4.70275 5.44787 0.241211 10.9863 0.241211Z"
      className={"fill-black dark:fill-white"}
    />
  </svg>
);

