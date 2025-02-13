"use client";

import * as React from "react";
import { forwardRef } from "react";
import { useDisconnect } from "wagmi";
import { Button, ButtonProps } from "../button/Button";

const DisconnectButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { disconnect } = useDisconnect();
    return <Button ref={ref} {...props} onClick={() => disconnect()} />;
  }
);
DisconnectButton.displayName = "DisconnectButton";

export { DisconnectButton };
