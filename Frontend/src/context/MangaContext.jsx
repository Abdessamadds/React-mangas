import { createContext, useReducer } from "react";

export const MangaContext = createContext();

export const mangasReducer = (state, action) => {};

export const MangaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mangasReducer, {
    mangas: null,
  });
  return <MangaContext.Provider>{children}</MangaContext.Provider>;
};
