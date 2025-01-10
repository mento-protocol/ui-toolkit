"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { RainbowKitWeb3Provider } from "@components/web3";
import { ThemeProvider } from "next-themes";
export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <RainbowKitWeb3Provider>
      {mounted && (
        <ThemeProvider
          enableSystem
          enableColorScheme
          defaultTheme="system"
          attribute="class"
            >
          {children}
        </ThemeProvider>
      )}
    </RainbowKitWeb3Provider>
  );
}
