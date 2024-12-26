"use client";

import { forwardRef } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "../button/Button";
import { cn } from "@/utils/common/cn";

export interface ConnectButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const ConnectButton = forwardRef<HTMLButtonElement, ConnectButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    if (isConnected && address) {
      return (
        <Button
          ref={ref}
          variant={variant}
          size={size}
          className={cn("font-medium", className)}
          onClick={() => disconnect()}
          {...props}
        >
          {address.slice(0, 6)}...{address.slice(-4)}
        </Button>
      );
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("font-medium", className)}
        onClick={() => connect({ connector: connectors[0] })}
        {...props}
      >
        Connect Wallet
      </Button>
    );
  },
);
ConnectButton.displayName = "ConnectButton";

export { ConnectButton };
