import { MobileHeader } from "./mobile-header";
import HeaderNav from "./header-nav";

import Link from "next/link";
import { MaxWidthWrapper } from "../max-width-wrapper/MaxWidthWrapper";
import { MentoLogoIcon } from "../_icons";
import { ConnectButton, TokenBalance } from "../connect-button/ConnectButton";

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
      <MaxWidthWrapper>
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <MentoLogoIcon className="h-6 w-[108px]" />
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
      </MaxWidthWrapper>
    </header>
  );
};
