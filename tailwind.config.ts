import type { Config } from "tailwindcss";

export default {
  presets: [require("./configs/tailwind.config")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
