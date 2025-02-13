"use client";
import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "../button/Button";
import { ButtonProps } from "../button/Button";
import { cn } from "@/utils";
import { ChevronIcon } from "../_icons";

type ConnectButtonProps = ButtonProps;

export const ConnectButtonMobile = ({
  className,
  theme,
}: ConnectButtonProps) => {
  return (
    <RainbowConnectButton.Custom>
      {({ openConnectModal, mounted }) => {
        if (!mounted) return <></>;
        return (
          <Button
            theme={theme || "secondary"}
            fullwidth
            onClick={openConnectModal}
            className={cn(className)}
          >
            <div className="flex flex-row place-items-center justify-center gap-2">
              <div>Connect wallet</div>
              <ChevronIcon direction={"right"} />
            </div>
          </Button>
        );
      }}
    </RainbowConnectButton.Custom>
  );
};
