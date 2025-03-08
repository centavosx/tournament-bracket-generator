import { View, StyleSheet } from "react-native";
import { Match, MatchProps } from "./Match";

export type EliminationsProps = {
  matches: MatchProps[][];
};
export const EliminationRow = ({ matches }: EliminationsProps) => {
  return (
    <View style={styles.tournamentRow}>
      {matches.map((match, index) => (
        <View key={index} style={[styles.tournamentColumn]}>
          {match.map((value, matchIndex) => (
            <Match {...value} key={matchIndex} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tournamentRow: {
    flexDirection: "row",
    gap: 64,
    alignItems: "center",
  },
  tournamentColumn: {
    flexDirection: "column",
    gap: 24,
    justifyContent: "space-around",
    height: "100%",
  },
});
