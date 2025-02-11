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
      colors: {
        border: {
          DEFAULT: "#E5E7EB",
          dark: "#2D2D2D",
        },
        input: {
          DEFAULT: "#D1D5DB",
          dark: "#1F1F1F",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#02010A",
        },
        foreground: {
          DEFAULT: "#000000",
          dark: "#FFFFFF",
        },
        primary: {
          light: "#4D62F0",
          DEFAULT: "#4D62F0",
          dark: "#2A326A",
          foreground: {
            DEFAULT: "#FFFFFF",
            dark: "#FFFFFF",
          }
        },
        secondary: {
          light: "#FCD7FC",
          DEFAULT: "#FCD7FC",
          dark: "#845F84",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          },
        },
        success: {
          light: "#D2FCBD",
          DEFAULT: "#D2FCBD",
          dark: "#64805D",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          },
        },
        error: {
          light: "#FF848A",
          DEFAULT: "#FF848A",
          dark: "#893E43",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          },
        },
        warning: {
          light: "#F9FA96",
          DEFAULT: "#F9FA96",
          dark: "#878751",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          },
        },
        info: {
          light: "#D5F0F6",
          DEFAULT: "#D5F0F6",
          dark: "#5C6C74",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          },
        },
        mento: {
          blue: "#4D62F0",
          cyan: "#A5E5F7",
          bright: "#F9FAA2",
          mint: "#D2FCBD",
          blush: "#FCD7FC",
          dark: "#02010A",
        },
        accent: {
          DEFAULT: "#F4F4F5",
          dark: "#27272A",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          }
        },
        popover: {
          DEFAULT: "#FFFFFF",
          dark: "#02010A",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          }
        },
        card: {
          DEFAULT: "#FFFFFF",
          dark: "#02010A",
          foreground: {
            DEFAULT: "#000000",
            dark: "#FFFFFF",
          }
        },
      },
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial-primary-light": "radial-gradient(ellipse 544px 501px, #8CA5FE, transparent)",
        "gradient-radial-primary-light-mobile": "radial-gradient(ellipse 200px 217px, #8CA5FE, transparent)",
      },
      fontFamily: {
        fg: ["var(--font-fg)"],
        inter: ["var(--font-inter)"],
      },
      spacing: {
        ...generateCustomSpacing(),
        initial: "initial",
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
