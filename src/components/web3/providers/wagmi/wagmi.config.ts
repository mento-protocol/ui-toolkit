import { injected,  } from "wagmi";
import { Alfajores, Celo } from "../../chains";
import { http } from "viem";

export const defaultWagmiConfig = {
  chains: [Celo, Alfajores],
  transports: Object.fromEntries(
    [Celo, Alfajores].map((chain) => [
      chain.id,
      http(chain.rpcUrls.default.http[0]),
    ])
  ),
  connectors: [injected(), ],
};

export type WagmiConfig = typeof defaultWagmiConfig;