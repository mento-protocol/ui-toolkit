"use client";

import * as React from "react";
import {
  ConnectButton as RainbowConnectButton,
} from "@rainbow-me/rainbowkit";
import {
  ChevronIcon,
  DisconnectIcon,
  MentoIcon,
  ChainIcon,
  AccountIcon,
} from "@/components/ui/_icons";
import { cn } from "@/utils/common/cn";
import { Button } from "@/components/ui/button/Button";
import { DropdownButton } from "@/components/ui/dropdown-button/DropdownButton";
import BaseComponentProps from "@/components/interfaces/base-component-props.interface";
import { Avatar } from "@/components/ui/avatar/Avatar";
import WalletHelper from "@/components/ui/_helpers/wallet.helper";

export interface TokenBalance {
  symbol: string;
  formatted: string;
}

interface ConnectedDropdownProps extends BaseComponentProps {
  fullwidth?: boolean;
  account: {
    address: string;
    displayBalance?: string;
  };
  chain?: unknown;
  mentoBalance: TokenBalance;
  veMentoBalance: TokenBalance;
  onAccountClick?: () => void;
  onChainClick?: () => void;
  onDisconnect?: () => void;
  onAddMento?: () => void;
  onAddVeMento?: () => void;
  showChainSelector?: boolean;
}

export const ConnectedDropdown = ({
  fullwidth,
  account,
  mentoBalance,
  veMentoBalance,
  onAccountClick,
  onChainClick,
  onDisconnect,
  onAddMento,
  onAddVeMento,
  showChainSelector = false,
}: ConnectedDropdownProps) => {
  return (
    <DropdownButton
      theme={"clear"}
      fullwidth={fullwidth}
      title={WalletHelper.getShortAddress(account.address)}
      avatar={
        <Avatar
          size="small"
          className="flex h-full flex-row items-center"
          address={account.address || ""}
        />
      }
    >
      <DropdownButton.Dropdown className="border border-solid border-black bg-white text-black dark:border-white dark:bg-black dark:text-white">
        <div className="flex w-full flex-col items-center border-b border-solid border-black py-2 font-inter dark:border-white">
          <div
            title="Click to add MENTO to your wallet"
            onClick={onAddMento}
            className="flex w-full cursor-pointer flex-row justify-between px-5 py-3"
          >
            <div className="flex flex-row items-center font-semibold">
              <MentoIcon
                className="mr-x1"
                height={32}
                width={32}
                backgroundColor={"cyan"}
              />
              <span>{mentoBalance.symbol}</span>
            </div>
            <div className="flex flex-row items-center justify-center font-semibold">
              {mentoBalance.formatted}
            </div>
          </div>
          <hr className="mx-auto w-[calc(100%_-_40px)] border-t-gray-light" />
          <div
            title="Click to add veMENTO to your wallet"
            onClick={onAddVeMento}
            className="flex w-full cursor-pointer flex-row justify-between px-5 py-x2"
          >
            <div className="flex flex-shrink flex-grow flex-row items-center font-semibold">
              <MentoIcon
                className="mr-x1"
                height={32}
                width={32}
                backgroundColor={"blush"}
              />
              <span>{veMentoBalance.symbol}</span>
            </div>
            <div className="flex flex-row items-center justify-center font-semibold">
              {veMentoBalance.formatted}
            </div>
          </div>
        </div>
        <DropdownButton.Element
          className="font-inter font-medium *:flex *:items-center *:justify-start [&_button]:pl-5"
          onClick={onAccountClick}
        >
          <AccountIcon className="mr-3" />
          <span>Account settings</span>
        </DropdownButton.Element>
        {showChainSelector && (
          <DropdownButton.Element
            className="font-inter font-medium *:flex *:items-center *:justify-start [&_button]:pl-5"
            onClick={onChainClick}
          >
            <ChainIcon className="mr-3" />
            <span>Chain settings</span>
          </DropdownButton.Element>
        )}
        <hr className="mx-auto w-[calc(100%_-_40px)] border-t-gray-light" />
        <DropdownButton.Element
          className="font-inter font-medium *:flex *:items-center *:justify-start [&_button]:pl-5"
          onClick={onDisconnect}
        >
          <DisconnectIcon className="mr-3" />
          <span>Disconnect</span>
        </DropdownButton.Element>
      </DropdownButton.Dropdown>
    </DropdownButton>
  );
};

interface ConnectButtonProps extends BaseComponentProps {
  theme?: "primary" | "secondary";
  fullwidth?: boolean;
  mentoBalance: TokenBalance;
  veMentoBalance: TokenBalance;
  onAccountClick?: () => void;
  onChainClick?: () => void;
  onDisconnect?: () => void;
  onAddMento?: () => void;
  onAddVeMento?: () => void;
  showChainSelector?: boolean;
}

export const ConnectButton = ({
  className,
  theme,
  fullwidth,
  mentoBalance,
  veMentoBalance,
  onAccountClick,
  onChainClick,
  onDisconnect,
  onAddMento,
  onAddVeMento,
  showChainSelector,
}: ConnectButtonProps) => {
  return (
    <RainbowConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        if (!mounted) return <></>;
        const connected = !!account && !!chain;

        return (
          <>
            <div
              className={cn(
                fullwidth ? "w-full" : "flex w-auto justify-center",
                className,
              )}
            >
              {!connected ? (
                <Button
                  fullwidth={fullwidth}
                  theme={theme || "secondary"}
                  onClick={openConnectModal}
                >
                  <div className="flex flex-row place-items-center justify-center gap-2">
                    <div>Connect wallet</div>
                    <ChevronIcon direction={"right"} />
                  </div>
                </Button>
              ) : (
                <ConnectedDropdown
                  account={account}
                  fullwidth={!!fullwidth}
                  chain={chain}
                  mentoBalance={mentoBalance}
                  veMentoBalance={veMentoBalance}
                  onAccountClick={onAccountClick}
                  onChainClick={onChainClick}
                  onDisconnect={onDisconnect}
                  onAddMento={onAddMento}
                  onAddVeMento={onAddVeMento}
                  showChainSelector={showChainSelector}
                />
              )}
            </div>
          </>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};
