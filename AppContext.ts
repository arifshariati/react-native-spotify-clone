import React from "react";

type AppContextType = {
  songId: string | null;
  setSongId: (id: string) => void;
};

export const AppContext = React.createContext<AppContextType | null>(null);
