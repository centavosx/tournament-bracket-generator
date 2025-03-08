import { TournamentContext } from "@/context/TournamentBracketContext";
import { PropsWithChildren } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export type TournamentBracketProps = PropsWithChildren<{}>;
const TournamentBracket = ({ children }: TournamentBracketProps) => {
  return (
    <TournamentContext.Provider value={{}}>
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {/**
             * The goal is to pass multiple brackets for single/double elimnination tournament
             */}
            {children}
          </ScrollView>
        </ScrollView>
      </View>
    </TournamentContext.Provider>
  );
};

export default TournamentBracket;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  tournamentWrapper: {
    flexDirection: "column",
    gap: 8,
    height: "100%",
  },
});
