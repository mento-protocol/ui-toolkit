"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { defaultWagmiConfig, WagmiConfig } from "./wagmi.config";
import { Chain } from "wagmi/chains";

interface Web3ProviderProps {
  children: React.ReactNode;
  projectId: string;
  appName?: string;
  config?: Partial<WagmiConfig>;
  customTheme?: {
    accentColor?: string;
    accentColorForeground?: string;
    borderRadius?: "none" | "small" | "medium" | "large";
    fontStack?: "system" | "rounded";
  };
}

export const WagmiWeb3Provider = ({
  children,
  config: userConfig,
}: Web3ProviderProps) => {
  const mergedConfig = {
    ...defaultWagmiConfig,
    ...userConfig,
  };

  const config = createConfig({
    chains: mergedConfig.chains as unknown as [Chain, ...Chain[]],
    transports: Object.fromEntries(
      mergedConfig.chains.map((chain) => [
        chain.id,
        http(chain.rpcUrls.default.http[0]),
      ])
    ),
    connectors: mergedConfig.connectors,
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
