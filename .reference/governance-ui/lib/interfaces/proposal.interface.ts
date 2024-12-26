import { ProposalState } from "@/lib/graphql/subgraph/generated/subgraph";
import { BadgeType } from "@/lib/types";

export const stateToStatusColorMap: Record<ProposalState, BadgeType> = {
  [ProposalState.Active]: "tertiary",
  [ProposalState.Pending]: "info",
  [ProposalState.Executed]: "info",
  [ProposalState.Defeated]: "danger",
  [ProposalState.Canceled]: "danger",
  [ProposalState.Expired]: "outline",
  [ProposalState.NoState]: "info",
  [ProposalState.Queued]: "info",
  [ProposalState.Succeeded]: "success",
};
