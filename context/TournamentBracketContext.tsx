import { createContext, useContext } from "react";

export type TournamentBracketContextType = {};

export const TournamentContext = createContext<TournamentBracketContextType>(
  null!
);

export const useTournamentContext = () => {
  return useContext(TournamentContext);
};
