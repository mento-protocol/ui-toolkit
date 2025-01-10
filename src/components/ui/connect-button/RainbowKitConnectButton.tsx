"use client";

import { forwardRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, ButtonProps } from "../button/Button";
import { cn } from "@/utils/common/cn";

export interface RainbowKitConnectButtonProps
  extends ButtonProps,
    React.HTMLAttributes<HTMLButtonElement> {}

const RainbowKitConnectButton = forwardRef<HTMLButtonElement, RainbowKitConnectButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, mounted }) => {
          if (!mounted) return null;
          const connected = !!account && !!chain;

          if (connected && account) {
            return (
              <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn("font-medium", className)}
                {...props}
              >
                {account.address.slice(0, 6)}...{account.address.slice(-4)}
              </Button>
            );
          }

          return (
            <Button
              ref={ref}
              variant={variant}
              size={size}
              className={cn("font-medium", className)}
              onClick={openConnectModal}
              {...props}
            >
              Connect Wallet
            </Button>
          );
        }}
      </ConnectButton.Custom>
    );
  }
);

RainbowKitConnectButton.displayName = "RainbowKitConnectButton";

export { RainbowKitConnectButton };
