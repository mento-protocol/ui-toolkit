"use client";

import {
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http } from "wagmi";
import { Chain, mainnet, sepolia } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { getRainbowKitConfig } from "./rainbow-kit.config";
import { Alfajores, Celo } from "../../chains";

interface Web3ProviderProps {
  children: React.ReactNode;
  projectId: string;
  appName?: string;
  chains?: Chain[];
  theme?: Theme;
}

export const RainbowKitWeb3Provider = ({
  children,
  projectId = "YOUR_PROJECT_ID",
  appName = "UI Components Demo",
  chains = [Celo, Alfajores],
  theme,
}: Web3ProviderProps) => {
  const config = getRainbowKitConfig({
    appName,
    projectId,
    chains: [chains[0], ...chains] satisfies [Chain, ...Chain[]],
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
