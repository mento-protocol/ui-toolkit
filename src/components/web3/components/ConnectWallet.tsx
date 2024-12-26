import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, ButtonProps } from "@/components/ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/common/cn";

const walletButtonVariants = cva(
  "inline-flex items-center justify-center gap-2",
  {
    variants: {
      mode: {
        default: "",
        compact: "min-w-[140px]",
        minimal: "min-w-[120px]",
      },
      chainDisplay: {
        default: "flex gap-2",
        icon: "w-8 h-8 p-0",
        hidden: "hidden",
      },
      addressDisplay: {
        default: "flex",
        short: "max-w-[120px] truncate",
        hidden: "hidden",
      },
    },
    defaultVariants: {
      mode: "default",
      chainDisplay: "default",
      addressDisplay: "default",
    },
  },
);

interface ConnectWalletProps extends VariantProps<typeof walletButtonVariants> {
  connectButtonProps?: ButtonProps;
  chainButtonProps?: ButtonProps;
  accountButtonProps?: ButtonProps;
  wrongNetworkProps?: ButtonProps;
}

export function ConnectWallet({
  mode,
  chainDisplay,
  addressDisplay,
  connectButtonProps,
  chainButtonProps,
  accountButtonProps,
  wrongNetworkProps,
}: ConnectWalletProps) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        if (!ready) return null;

        if (!account) {
          return (
            <Button onClick={openConnectModal} {...connectButtonProps}>
              Connect Wallet
            </Button>
          );
        }

        if (chain.unsupported) {
          return (
            <Button
              variant="secondary"
              onClick={openChainModal}
              {...wrongNetworkProps}
            >
              Wrong network
            </Button>
          );
        }

        return (
          <div
            className={cn(
              walletButtonVariants({ mode, chainDisplay, addressDisplay }),
            )}
          >
            <Button
              variant="ghost"
              onClick={openChainModal}
              className={cn({ hidden: chainDisplay === "hidden" })}
              {...chainButtonProps}
            >
              {chainDisplay === "icon" ? chain.iconUrl : chain.name}
            </Button>
            <Button
              onClick={openAccountModal}
              className={cn({ hidden: addressDisplay === "hidden" })}
              {...accountButtonProps}
            >
              {addressDisplay === "short"
                ? `${account.address.slice(0, 6)}...${account.address.slice(-4)}`
                : account.displayName}
            </Button>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
