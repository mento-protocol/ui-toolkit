"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Inter } from "next/font/google";
import { Footer } from "@/components/ui/footer/Footer";
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';
import { mentoRainbowKitProviderConfig, mentoWagmiConfig, rainbowKitTheme } from "@/config";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Header } from "@/components/ui";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html className={`${inter.variable} w-full overscroll-none`} lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryClientProvider client={queryClient}>
            <WagmiProvider config={mentoWagmiConfig}>
              <RainbowKitProvider 
                theme={rainbowKitTheme.darkMode}
                {...mentoRainbowKitProviderConfig}
              >
                <Header mentoBalance={{
                  formatted: "0",
                  symbol: "MENTO",
                }} veMentoBalance={{
                  formatted: "0",
                  symbol: "veMENTO",
                }} />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </RainbowKitProvider>
            </WagmiProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
