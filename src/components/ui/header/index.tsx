"use client";
import * as React from "react";
import { MobileHeader } from "./mobile-header";
import HeaderNav from "./header-nav";

import Link from "next/link";
import { MentoLogoIcon } from "@/components/ui/_icons";
import { ConnectButton, type TokenBalance } from "@/components/ui/connect-button/ConnectButton";

export interface HeaderProps {
  mentoBalance: TokenBalance;
  veMentoBalance: TokenBalance;
  onAccountClick?: () => void;
  onChainClick?: () => void;
  onDisconnect?: () => void;
  onAddMento?: () => void;
  onAddVeMento?: () => void;
  showChainSelector?: boolean;
  isProd?: boolean;
}

export const Header = ({
  mentoBalance,
  veMentoBalance,
  onAccountClick,
  onChainClick,
  onDisconnect,
  onAddMento,
  onAddVeMento,
  showChainSelector,
  isProd = false,
}: HeaderProps) => {
  return (
    <>
      <DesktopHeader
        mentoBalance={mentoBalance}
        veMentoBalance={veMentoBalance}
        onAccountClick={onAccountClick}
        onChainClick={onChainClick}
        onDisconnect={onDisconnect}
        onAddMento={onAddMento}
        onAddVeMento={onAddVeMento}
        showChainSelector={showChainSelector}
      />
      <MobileHeader
        mentoBalance={mentoBalance}
        veMentoBalance={veMentoBalance}
        isProd={isProd}
      />
    </>
  );
};

const DesktopHeader = ({
  mentoBalance,
  veMentoBalance,
  onAccountClick,
  onChainClick,
  onDisconnect,
  onAddMento,
  onAddVeMento,
  showChainSelector,
}: HeaderProps) => {
  return (
    <header className="mx-auto hidden h-32 w-full items-center justify-center bg-white px-4 py-10 dark:border-[#343437] dark:bg-black lg:flex">
      <div className="flex w-full max-w-container-max items-center justify-between">
        <Link href="/" className="flex items-center">
          <MentoLogoIcon className="h-6 w-logo-desktop" />
        </Link>
        <HeaderNav />
        <ConnectButton
          mentoBalance={mentoBalance}
          veMentoBalance={veMentoBalance}
          onAccountClick={onAccountClick}
          onChainClick={onChainClick}
          onDisconnect={onDisconnect}
          onAddMento={onAddMento}
          onAddVeMento={onAddVeMento}
          showChainSelector={showChainSelector}
        />
      </div>
    </header>
  );
};
