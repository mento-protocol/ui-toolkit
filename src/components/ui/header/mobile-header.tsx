"use client";

import React from "react";

import { MotionConfig, motion } from "framer-motion";
import Link from "next/link";

import { useAccount } from "wagmi";

import { useChainModal } from "@rainbow-me/rainbowkit";
import { toast } from "sonner";
import { MobileAccordionMenu } from "../mobile-accordion-menu/MobileAccordionMenu";
import { DisconnectButton } from "../disconnect-button/DisconnectButton";
import { ConnectButtonMobile } from "../connect-button/ConnectButtonMobile";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";
import { links } from "@/config";
import { ChainIcon, CopyIcon, DiscordIcon, GithubIcon, MentoLogoIcon, TwitterIcon } from "../_icons";
import { cn } from "@/utils";
import { Avatar } from "../avatar/Avatar";
import WalletHelper from "../_helpers/wallet.helper";
import NumbersService from "../_helpers/numbers.service";
import { TokenBalance } from "../connect-button/ConnectButton";
import CopyToClipboard from "react-copy-to-clipboard";

const variants = {
  open: { opacity: 1, x: 0, y: 21 },
  closed: { opacity: 0, x: "100%", y: 21 },
};

export const MobileHeader = ({
  mentoBalance,
  veMentoBalance,
  isProd,
}: {
  mentoBalance: TokenBalance;
  veMentoBalance: TokenBalance;
  isProd: boolean;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { address } = useAccount();
  const toggleMenu = () => setIsOpen((currIsOpenStatus) => !currIsOpenStatus);

  return (
    <header className="w-full px-4 lg:hidden">
      <div className="flex items-center justify-between border-b border-black p-4 dark:border-[#343437]">
        <MentoLogoIcon className="h-5 w-[90px]" />
        <AnimatedHamburgerButton
          className="pr-4"
          isOpen={isOpen}
          onClick={toggleMenu}
        />
        <DropDownMenuOverlay isOpen={isOpen} address={address} mentoBalance={mentoBalance} veMentoBalance={veMentoBalance} isProd={isProd} />
      </div>
    </header>
  );
};

const DropDownMenuOverlay = ({
  isOpen,
  address,
  mentoBalance,
  veMentoBalance,
  isProd,
}: {
  isOpen: boolean;
  address?: string;
  mentoBalance: TokenBalance;
  veMentoBalance: TokenBalance;
  isProd: boolean;
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        className="fixed bottom-0 left-0 right-0 top-5 z-50 flex h-screen w-screen flex-col bg-white p-4 pt-12 dark:bg-black"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.8 }}
      >
        {address && <ConnectedInfo address={address} mentoBalance={mentoBalance} veMentoBalance={veMentoBalance} isProd={isProd} />}
        <MobileAccordionMenu />

        <div className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center py-[32px]">
            {address ? (
              <DisconnectButton
                theme="white"
                fullwidth
                className="h-[60px] text-[15px]"
              >
                Disconnect Wallet
              </DisconnectButton>
            ) : (
              <ConnectButtonMobile
                theme="primary"
                className="h-[60px] text-[15px]"
              />
            )}
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <SocialLinks />
              <div className="flex flex-col items-center pt-[32px]">
                <span className="font-inter text-[15px] font-normal text-[#636768]">
                  Theme
                </span>
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const SocialLinks = () => {
  return (
    <nav className="mx-auto flex items-center justify-center">
      <Link
        className=" px-[8px]"
        target="_blank"
        rel="noopener noreferrer"
        href={links.twitter}
      >
        <TwitterIcon height={40} width={40} />
      </Link>
      <Link
        className=" px-[16px] py-[8px]"
        target="_blank"
        rel="noopener noreferrer"
        href={links.github}
      >
        <GithubIcon height={24} width={24} />
      </Link>
      <Link
        className="px-[16px] py-[8px]"
        target="_blank"
        rel="noopener noreferrer"
        href={links.discord}
      >
        <DiscordIcon height={24} width={24} />
      </Link>
    </nav>
  );
};

const AnimatedHamburgerButton = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={onClick}
        className={cn(
          "relative h-[20px] w-5  rounded-full transition-colors ",
          className,
        )}
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute top-0 h-[2px] w-full -translate-y-1/2 translate-x-1/2 transform bg-black dark:bg-white"
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute top-1/2 h-[2px] w-full -translate-y-1/2 translate-x-1/2 transform bg-black dark:bg-white"
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute top-full h-[2px] w-full -translate-y-1/2 translate-x-1/2 transform bg-black dark:bg-white"
        />
      </motion.button>
    </MotionConfig>
  );
};

export interface ConnectedInfoProps {
  address: string;
  mentoBalance: TokenBalance;
  veMentoBalance: TokenBalance;
  isProd: boolean;
}

const ConnectedInfo = ({ address, mentoBalance, veMentoBalance, isProd = false }: ConnectedInfoProps) => {
  const { openChainModal } = useChainModal();
  const onCopy = async () => {
    toast.success("Address copied to clipboard", {
      unstyled: true,
      duration: 2000,
    });
  };

  return (
    <div className="flex pb-[32px] pt-[14px]">
      <div className="mx-auto">
        <div className="flex items-center justify-center pb-[16px]">
          <div className="mx-[8px] my-[10px] flex h-[20px] w-[20px] items-center justify-center">
            <Avatar
              size="small"
              className="flex h-full flex-row rounded-full"
              address={address || ""}
            />
          </div>
          <div className=" my-[10px]">
            <div className="inline-block align-middle font-inter text-[15px] font-medium ">
              {WalletHelper.getShortAddress(address)}
            </div>
          </div>
          <div className="mx-[8px] my-[10px] flex h-[20.75px] w-[17.313px] items-center justify-center">
            <CopyToClipboard onCopy={onCopy} text={address}>
              <div className="cursor-pointer">
                <CopyIcon height={22} width={18} />
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <div className="width-full mb-[8px] flex min-h-[32px] flex-row">
          <div className="mr-[-1px] flex-1 rounded-l-lg border border-gray-300">
            <div className="mx-[10px] inline-block w-[75px] align-middle font-inter text-[15px] font-semibold ">
              MENTO
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-r-lg border border-gray-300">
            <div className="inline-block px-[10px] text-center align-middle font-inter text-[15px] font-semibold">
              {NumbersService.parseNumericValue(mentoBalance.formatted, 1)}
            </div>
          </div>
        </div>

        <div className="width-full flex min-h-[32px] flex-row">
          <div className="mr-[-1px] flex-1 rounded-l-lg border border-gray-300">
            <div className="mx-[10px] inline-block w-[75px] align-middle font-inter text-[15px] font-semibold">
              veMENTO
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-r-lg border border-gray-300">
            <div className="inline-block px-[10px] text-center align-middle font-inter text-[15px] font-semibold">
              {NumbersService.parseNumericValue(veMentoBalance.formatted, 1)}
            </div>
          </div>
        </div>

        {!isProd && (
          <div
            onClick={openChainModal}
            className="flex items-center justify-center pt-[16px]"
          >
            <ChainIcon
              className="-[32px] h-[32px]"
              strokeClass="stroke-mento-blue"
            />
            <a className="font-inter text-[15px] font-medium text-mento-blue underline underline-offset-[3px]">
              Chain Settings
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["0%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "0%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
      top: ["100%", "50%", "50%"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
      top: ["50%", "50%", "100%"],
    },
  },
};
