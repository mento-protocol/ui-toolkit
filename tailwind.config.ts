import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#4D62F0",
          dark: "#2A326A",
          light: "#6B7EFF",
        },
        secondary: {
          DEFAULT: "#E5E7EB",
          dark: "#D1D5DB",
          light: "#F3F4F6",
        },
        success: {
          DEFAULT: "#10B981",
          dark: "#059669",
          light: "#34D399",
        },
        error: {
          DEFAULT: "#EF4444",
          dark: "#DC2626",
          light: "#F87171",
        },
        warning: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
          light: "#FBBF24",
        },
        info: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
          light: "#60A5FA",
        },
        gray: {
          DEFAULT: "#9CA3AF",
          light: "#E5E7EB",
          dark: "#4B5563",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fg: ["var(--font-fg)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
