"use client";

import * as React from "react";
import { useDisconnect } from "wagmi";
import { Button, type ButtonProps } from "@/components/ui/button/Button";

export const DisconnectButton = (props: ButtonProps) => {
  const { disconnect } = useDisconnect();
  return <Button {...props} onClick={() => disconnect()} />;
};

DisconnectButton.displayName = "DisconnectButton";
