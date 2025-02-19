import * as React from "react";
import { BaseIconProps } from "./base-icon-interface";

export const MentoLogoIcon = ({
  width = 100,
  height = 25,
}: BaseIconProps) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 109 25"
  >
    <path
      d="M88.1069 9.16049V3.98283H81.2649V0.0234375H76.1183V3.98283H72.4854V9.16049H76.1183V16.7138C76.1183 20.9778 79.3274 24.0234 83.5658 24.0234H86.8959V18.8458H84.7767C82.6576 18.8458 81.2649 17.6275 81.2649 15.4955V9.16049H88.1069ZM103.002 18.8458V24.0234H95.4938C91.2554 24.0234 88.1069 20.9778 88.1069 16.7138V9.16049H93.2535V15.4955C93.2535 17.6275 94.5856 18.8458 96.7048 18.8458H103.002ZM93.2535 9.16049V3.98283H100.762C105 3.98283 108.148 7.02851 108.148 11.2925V18.8458H103.002V12.5107C103.002 10.3788 101.67 9.16049 99.5506 9.16049H93.2535Z"
      className={`fill-black dark:fill-white`}
    />
    <path
      d="M58.6354 23.5922H53.2968V3.9906H58.6354V6.22518C59.6486 4.65705 61.6749 3.55936 64.2078 3.55936C68.923 3.55936 71.7287 7.00924 71.7287 12.1057V23.5922H66.3901V13.0073C66.3901 10.1847 65.182 8.45976 62.9608 8.45976C60.5059 8.45976 58.6354 10.2631 58.6354 14.0266V23.5922Z"
      className={`fill-black dark:fill-white`}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.0097 17.2021H51.5821C50.4131 21.1616 46.5552 24.0234 41.6063 24.0234C35.6441 24.0234 31.3966 19.7111 31.3966 13.7522C31.3966 7.91092 35.7221 3.55936 41.6452 3.55936C47.3736 3.55936 52.0887 7.6757 51.8159 15.0459H36.6183C36.8521 17.3589 38.5668 19.3583 41.879 19.3583C43.7495 19.3583 45.3862 18.535 46.0097 17.2021ZM41.4894 7.91092C43.3209 7.91092 45.3082 8.891 45.9707 11.5176H36.8132C37.3198 9.36144 39.0344 7.91092 41.4894 7.91092Z"
      className={`fill-black dark:fill-white`}
    />
    <path
      d="M0.148438 23.5922H5.48707V14.0266C5.48707 10.2631 7.08477 8.45976 9.38388 8.45976C11.4882 8.45976 12.4234 10.2239 12.4234 13.1249V23.5922H17.762V14.0266C17.762 10.2631 19.3597 8.45976 21.6588 8.45976C23.7631 8.45976 24.6984 10.2239 24.6984 13.1249V23.5922H30.037V12.2233C30.037 6.93084 27.3872 3.55936 22.75 3.55936C20.5288 3.55936 17.9179 4.73546 16.7099 7.16606C15.5409 4.89227 13.5145 3.55936 10.6698 3.55936C8.29278 3.55936 6.53921 4.69626 5.48707 6.22518V3.9906H0.148438V23.5922Z"
      className={`fill-black dark:fill-white`}
    />
  </svg>
);
