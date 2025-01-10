import { Card, TabList } from "@/components/_shared";
import { VotesList } from "@/components/index";
import type { ProposalVotes } from "@/lib/graphql";

type Props = {
  votes: ProposalVotes;
};

export default function Participants({ votes }: Props) {
  if (votes.total === 0) {
    return <NoParticipants />;
  }

  return (
    <Card
      // Was originally z-49
      className="bottom-0 z-40 flex w-full grow flex-col gap-6 p-4"
    >
      <Card.Header className="text-center text-3xl font-medium">
        Participants
      </Card.Header>
      <TabList tabs={["For", "Against", "Abstain"]}>
        <VotesList
          participants={votes.for.participants}
          voteTypeTotal={votes.for.total}
          totalVotes={votes.total}
        />
        <VotesList
          participants={votes.against.participants}
          voteTypeTotal={votes.against.total}
          totalVotes={votes.total}
        />
        <VotesList
          participants={votes.abstain.participants}
          voteTypeTotal={votes.abstain.total}
          totalVotes={votes.total}
        />
      </TabList>
    </Card>
  );
}

const NoParticipants = () => (
  <Card className="bottom-0 z-40 flex w-full grow flex-col gap-6 p-4">
    <Card.Header className="text-center text-3xl font-medium">
      Participants
    </Card.Header>
    There are not participants to display yet
  </Card>
);
