import { Chain, connectorsForWallets, RainbowKitWalletConnectParameters } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  omniWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http } from "wagmi";
import { valora } from "./valora.config";
import { Alfajores, Celo } from "../../chains";

interface RainbowKitConfigOptions extends RainbowKitWalletConnectParameters {
  appName: string;
  projectId: string;
  chains?: Chain[];
  valora?: any; // Type from valora config
}

export function getRainbowKitConfig({
  appName,
  projectId,
  chains = [Celo, Alfajores],
}: RainbowKitConfigOptions) {
  const connectors = connectorsForWallets(
    [
      {
        groupName: "Recommended for Celo chains",
        wallets: [
          metaMaskWallet,
          walletConnectWallet,
          valora,
          omniWallet,
          trustWallet,
        ],
      },
    ],
    {
      appName,
      projectId,
    }
  );
  return createConfig({
    chains: [chains[0], ...chains] satisfies [Chain, ...Chain[]],
    transports: Object.fromEntries(
      chains.map((chain) => [chain.id, http(chain.rpcUrls.default.http[0])])
    ),
    connectors,
  });
}

export type RainbowKitConfig = ReturnType<typeof getRainbowKitConfig>;
