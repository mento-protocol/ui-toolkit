import type { Config } from "tailwindcss";

export default {
  presets: [require("./src/tailwind.default.config")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
