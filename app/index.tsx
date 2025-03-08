import TournamentBracket from "@/components/TournamentBracket";
import { EliminationRow } from "@/components/TournamentBracket/components/Elimination";
import { useGenerateMatches } from "@/components/TournamentBracket/utils/useGenerateMatches";
import { View } from "react-native";

const Index = () => {
  const { eliminations, losers } = useGenerateMatches(16);
  return (
    <TournamentBracket>
      <EliminationRow matches={eliminations} />
      <EliminationRow matches={losers} />
    </TournamentBracket>
  );
};

export default Index;
