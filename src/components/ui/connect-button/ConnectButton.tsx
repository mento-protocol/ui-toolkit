"use client";

import { forwardRef } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button, ButtonProps } from "../button/Button";
import { cn } from "@/utils/common/cn";

export interface ConnectButtonProps
  extends ButtonProps,
    React.HTMLAttributes<HTMLButtonElement> {}

const ConnectButton = forwardRef<HTMLButtonElement, ConnectButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const { address, isConnected } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    if (isConnected && address) {
      return (
        <Button
          ref={ref}
          variant="primary"
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
