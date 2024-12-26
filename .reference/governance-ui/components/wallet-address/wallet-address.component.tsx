import { BlockExplorerLink } from "@/components/_shared";
import BaseComponentProps from "@/interfaces/base-component-props.interface";
import { centerEllipsis } from "@/lib/helpers/string.service";
import { cn } from "@/styles/helpers";

interface WalletAddressProps extends BaseComponentProps {
  address: string;
  remaining?: number;
}

export const WalletAddress = ({
  address,
  className,
  remaining,
}: WalletAddressProps) => {
  return (
    <BlockExplorerLink
      className={cn("no-underline", className)}
      type="address"
      item={address}
    >
      {centerEllipsis(address, remaining)}
    </BlockExplorerLink>
  );
};
