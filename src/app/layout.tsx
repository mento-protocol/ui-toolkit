"use client";

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mentoWagmiConfig } from '@/config';
import { rainbowKitTheme } from '@/config/rainbow-kit.config';
import { mentoRainbowKitProviderConfig } from '@/config/rainbow-kit-provider.config';

import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
