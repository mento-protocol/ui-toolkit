import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mentoWagmiConfig } from './wagmi.config';

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WALLET_CONNECT_ID is not defined');
}

export const mentoRainbowKitProviderConfig = getDefaultConfig({
  appName: 'Mento Protocol',
  projectId,
  chains: mentoWagmiConfig.chains,
}); 