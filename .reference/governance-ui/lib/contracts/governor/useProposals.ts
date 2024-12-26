import { getSubgraphApiName } from "@/config/config.constants";
import { GovernorABI } from "@/lib/abi/Governor";
import {
  STATE_FROM_NUMBER,
  isStateNumber,
} from "@/lib/contracts/governor/hookHelpers";
import { useContracts } from "@/lib/contracts/useContracts";
import {
  Proposal,
  useGetProposalsQuery,
} from "@/lib/graphql/subgraph/generated/subgraph";
import { useEnsureChainId } from "@/lib/hooks/useEnsureChainId";
import { NetworkStatus } from "@apollo/client";
import { useCallback, useMemo } from "react";
import { useReadContracts } from "wagmi";

export const GraphProposalsQueryKey = ["proposals-graph-query"];

const useProposals = () => {
  const ensuredChainId = useEnsureChainId();
  const contracts = useContracts();

  const {
    data: graphData,
    networkStatus: graphNetworkStatus,
    refetch,
    loading,
  } = useGetProposalsQuery({
    context: {
      apiName: getSubgraphApiName(ensuredChainId),
    },
    initialFetchPolicy: "network-only",
    nextFetchPolicy: "cache-and-network",
    refetchWritePolicy: "merge",
    errorPolicy: "ignore",
    pollInterval: 5000,
  });

  const { data: chainData, isLoading } = useReadContracts({
    contracts: graphData
      ? (graphData?.proposals as Proposal[]).map(
          (proposal: Proposal) =>
            ({
              address: contracts.MentoGovernor.address,
              abi: GovernorABI,
              functionName: "state",
              args: [proposal.proposalId],
              chainId: ensuredChainId,
            }) as const,
        )
      : [],
    query: {
      refetchInterval: 5000,

      enabled:
        graphNetworkStatus === NetworkStatus.ready &&
        graphData &&
        graphData.proposals.length > 0,
    },
  });

  const proposals: Proposal[] = useMemo<Proposal[]>(() => {
    if (chainData === undefined) return [];
    if (graphData?.proposals === undefined) return [];

    const proposalBuild: Proposal[] = [];
    for (const chainDataKey of chainData.keys()) {
      const proposal = graphData.proposals[chainDataKey];
      const { status, result } = chainData[chainDataKey];
      if (status !== "success" || !isStateNumber(result)) {
        proposalBuild.push(proposal as Proposal);
        continue;
      }

      proposalBuild.push({
        ...(proposal as Proposal),
        state: STATE_FROM_NUMBER[result],
      });
    }

    return proposalBuild;
  }, [chainData, graphData?.proposals]);

  const proposalExists = useCallback(
    (id: string) => {
      return (
        proposals.filter((proposal) => proposal.proposalId === id).length === 1
      );
    },
    [proposals],
  );

  return {
    isLoading: isLoading || loading,
    proposals,
    proposalExists,
    refetchProposals: refetch,
  };
};

export default useProposals;
