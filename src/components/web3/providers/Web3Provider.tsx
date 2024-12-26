import {
  RainbowKitProvider,
  getDefaultConfig,
  Theme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, http, Chain } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";

interface Web3ProviderProps {
  children: React.ReactNode;
  projectId: string;
  appName?: string;
  chains?: Chain[];
  theme?: Theme;
  customTheme?: {
    accentColor?: string;
    accentColorForeground?: string;
    borderRadius?: "none" | "small" | "medium" | "large";
    fontStack?: "system" | "rounded";
  };
}

const defaultChains = [mainnet, sepolia];

export function Web3Provider({
  children,
  projectId,
  appName = "UI Components Demo",
  chains = defaultChains,
  theme = "light",
  customTheme,
}: Web3ProviderProps) {
  const config = getDefaultConfig({
    appName,
    projectId,
    chains,
    transports: Object.fromEntries(chains.map((chain) => [chain.id, http()])),
  });

  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={theme} customTheme={customTheme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
