import type { Config } from "tailwindcss";
import tailwindConfig from "./configs/tailwind.config";

export default {
  presets: [tailwindConfig],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
