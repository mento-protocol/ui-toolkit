import { defineConfig } from "bunchee";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  external: [
    "react",
    "react-dom",
    "next",
    "@rainbow-me/rainbowkit",
    "@tanstack/react-query",
    "wagmi",
    "viem",
    "framer-motion",
  ],
  declaration: true,
  clean: true,
});
