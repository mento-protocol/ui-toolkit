"use client";

import { forwardRef } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "../button/Button";
import { cn } from "@/utils";
import { ChevronRight, LogOut } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export interface ConnectButtonProps {
  className?: string;
  fullWidth?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const ConnectedDropdown = ({
  address,
  variant,
  onDisconnect,
}: {
  address: string;
  variant: ConnectButtonProps["variant"];
  fullWidth?: boolean;
  onDisconnect: () => void;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant={variant}
          className="w-full"
        >
          <div className="flex items-center justify-between gap-2">
            <span>{address.slice(0, 6)}...{address.slice(-4)}</span>
          </div>
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[200px] overflow-hidden rounded-md border border-input bg-background p-1 shadow-md"
          align="end"
        >
          <DropdownMenu.Item
            className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
            onClick={onDisconnect}
          >
            <LogOut className="h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const ConnectButton = ({
  className,
  fullWidth,
  variant = "default",
}: ConnectButtonProps) => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <ConnectedDropdown
        address={address}
        variant={variant}
        fullWidth={!!fullWidth}
        onDisconnect={() => disconnect()}
      />
    );
  }

  return (
    <Button
      variant={variant}
      className={cn("w-full", className)}
      onClick={() => connect({ connector: connectors[0] })}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <span>Connect wallet</span>
        <ChevronRight className="h-4 w-4" />
      </div>
    </Button>
  );
};
