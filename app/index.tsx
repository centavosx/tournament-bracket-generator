import TournamentBracket from "@/components/TournamentBracket";
import { EliminationRow } from "@/components/TournamentBracket/components/Elimination";
import { useGenerateMatches } from "@/components/TournamentBracket/utils/useGenerateMatches";

const Index = () => {
  const { losers: eliminations } = useGenerateMatches(16);
  return (
    <TournamentBracket>
      <EliminationRow matches={eliminations} />
      {/* <EliminationRow /> */}
    </TournamentBracket>
  );
};

export default Index;
