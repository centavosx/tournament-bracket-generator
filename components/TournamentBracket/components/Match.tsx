import { View, StyleSheet, Text } from "react-native";

export type MatchProps = {
  title: string;
  player1: string;
  player2: string;
};
export const Match = ({ title, player1, player2 }: MatchProps) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <View style={styles.matchContainer}>
        <View style={styles.matchContainerRow}>
          <Text>{player1}</Text>
        </View>
        <View style={styles.matchDivider} />
        <View style={styles.matchContainerRow}>
          <Text>{player2}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    overflow: "hidden",
    gap: 16,
  },
  matchContainer: {
    gap: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  matchContainerRow: {
    gap: 8,
    padding: 8,
  },
  matchDivider: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
  },
});
