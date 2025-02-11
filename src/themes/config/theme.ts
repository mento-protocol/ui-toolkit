import { type Config } from "tailwindcss";

function generateCustomSpacing() {
  const spacing: { [key: string]: string } = {};
  for (let i = 1; i <= 20; i++) {
    spacing[`x${i}`] = `${5 * i}px`;
  }
  return spacing;
}

export const themeConfig = {
  darkMode: ["class"],
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Common animations across all repos
      animation: {
        loaderPulseBorder: "loaderPulseBorder 2s linear infinite",
        altSpin: "altSpin 1s linear infinite",
        loading: "loading 1.4s ease-in-out infinite 20ms alternate-reverse none",
      },
      keyframes: {
        altSpin: {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        loaderPulseBorder: {
          "0%": {
            "clip-path": "polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0)",
          },
          "25%": {
            "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0)",
          },
          "50%": {
            "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)",
          },
          "75%": {
            "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%)",
          },
          "100%": {
            "clip-path": "polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0)",
          },
        },
        loading: {
          from: { opacity: "0" },
          to: { opacity: "0.4" },
        },
      },
      // Common background gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial-primary-light": "radial-gradient(ellipse 544px 501px, #8CA5FE, transparent)",
        "gradient-radial-primary-light-mobile": "radial-gradient(ellipse 200px 217px, #8CA5FE, transparent)",
      },
      // Common font families
      fontFamily: {
        fg: ["var(--font-fg)"],
        inter: ["var(--font-inter)"],
      },
      // Common spacing
      spacing: {
        ...generateCustomSpacing(),
        initial: "initial",
      },
      // Common transition timing functions
      transitionTimingFunction: {
        "in-sine": "cubic-bezier(0.12, 0, 0.39, 0)",
        "out-sine": "cubic-bezier(0.61, 1, 0.88, 1)",
        "in-out-sine": "cubic-bezier(0.37, 0, 0.63, 1)",
        "in-quad": "cubic-bezier(0.11, 0, 0.5, 0)",
        "out-quad": "cubic-bezier(0.5, 1, 0.89, 1)",
        "in-out-quad": "cubic-bezier(0.45, 0, 0.55, 1)",
        "in-cubic": "cubic-bezier(0.32, 0, 0.67, 0)",
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
        "in-out-cubic": "cubic-bezier(0.65, 0, 0.35, 1)",
        "in-quart": "cubic-bezier(0.5, 0, 0.75, 0)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
        "in-quint": "cubic-bezier(0.64, 0, 0.78, 0)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-quint": "cubic-bezier(0.83, 0, 0.17, 1)",
        "in-expo": "cubic-bezier(0.7, 0, 0.84, 0)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
      // Unified color system based on existing repos
      colors: {
        primary: {
          light: "#4D62F0",
          DEFAULT: "#4D62F0",
          dark: "#2A326A",
          foreground: "#FFFFFF",
        },
        secondary: {
          light: "#FCD7FC",
          DEFAULT: "#FCD7FC",
          dark: "#845F84",
          foreground: "#000000",
        },
        success: {
          light: "#D2FCBD",
          DEFAULT: "#D2FCBD",
          dark: "#64805D",
          foreground: "#000000",
        },
        error: {
          light: "#FF848A",
          DEFAULT: "#FF848A",
          dark: "#893E43",
          foreground: "#000000",
        },
        warning: {
          light: "#F9FA96",
          DEFAULT: "#F9FA96",
          dark: "#878751",
          foreground: "#000000",
        },
        info: {
          light: "#D5F0F6",
          DEFAULT: "#D5F0F6",
          dark: "#5C6C74",
          foreground: "#000000",
        },
        black: {
          off: "#121316",
          DEFAULT: "#02010A",
        },
        white: "#FFFFFF",
        gray: {
          alt66: "#88888866",
          lighter: "#CCCFDE",
          light: "#B3B3B3",
          DEFAULT: "#808080",
          dark: "#636366",
        },
        mento: {
          blue: "#4D62F0",
          cyan: "#A5E5F7",
          bright: "#F9FAA2",
          mint: "#D2FCBD",
          blush: "#FCD7FC",
          dark: "#02010A",
        },
        border: "#E5E7EB",
        input: "#D1D5DB",
        background: "#FFFFFF",
        foreground: "#000000",
      },
      // Common screen breakpoints
      screens: {
        content: "1120px",
        smallPhone: { max: "320px" },
        mediumPhone: { max: "420px" },
        phablet: { max: "500px" },
        smallTablet: { max: "590px" },
        tablet: { max: "890px" },
      },
    },
  },
} satisfies Config;

export default themeConfig;
