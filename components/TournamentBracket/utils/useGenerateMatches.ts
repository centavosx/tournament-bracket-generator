import { MatchProps } from "./../components/Match";
import { useCallback, useMemo } from "react";

export const useGenerateMatches = (players: number) => {
  const generateEliminations = useCallback(
    (isLoser?: boolean) => {
      let currentColumn: MatchProps[] = [];
      const eliminations: MatchProps[][] = [
        [
          {
            title: "test",
            player1: "test",
            player2: "test2",
          },
        ],
      ];

      const currentNumberOfPlayers = isLoser ? players - 1 : players;
      let numberOfPlayers = currentNumberOfPlayers - 1;
      let currentIndex = 0;
      let shouldDouble = isLoser;

      while (numberOfPlayers >= 1) {
        if (currentColumn.length >= Math.pow(2, currentIndex)) {
          currentColumn = [];
          eliminations.push(currentColumn);
          if (shouldDouble && isLoser) {
            shouldDouble = false;
          } else {
            currentIndex++;
            shouldDouble = true;
          }
        }

        currentColumn.push({
          title: "test",
          player1: "test",
          player2: "test2",
        });

        numberOfPlayers--;
      }

      return eliminations.reverse();
    },
    [players]
  );

  return {
    eliminations: generateEliminations(),
    losers: generateEliminations(true),
  };
};
