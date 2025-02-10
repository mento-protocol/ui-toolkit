"use client";

import { forwardRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "../button/Button";
import { cn } from "@/utils";

export interface RainbowKitConnectButtonProps {
  className?: string;
  fullWidth?: boolean;
  theme?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "tertiary" | "link" | "clear";
}

const RainbowKitConnectButton = forwardRef<HTMLButtonElement, RainbowKitConnectButtonProps>(
  ({ className, theme = "primary", fullWidth, ...props }, ref) => {
    return (
      <ConnectButton.Custom>
        {({ account, chain, openConnectModal, mounted }) => {
          if (!mounted) return null;
          const connected = !!account && !!chain;

          if (connected && account) {
            return (
              <Button
                ref={ref}
                theme={theme}
                fullwidth={fullWidth}
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
              theme={theme}
              fullwidth={fullWidth}
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
