import { http, createConfig } from 'wagmi';
import { celo, celoAlfajores } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WALLET_CONNECT_ID is not defined');
}

const chains = [celo, celoAlfajores] as const;

export const mentoWagmiConfig = createConfig({
  chains,
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
}); 