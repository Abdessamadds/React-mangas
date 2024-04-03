import { createContext, useReducer } from "react";

export const MangaContext = createContext();

export const mangasReducer = (state, action) => {
  switch (action.type) {
    case "SET_MANGAS":
      return {
        mangas: action.payload
      }
    case "CREATE_MANGAS":
      return {
        mangas: [action.payload, ...state.mangas]
      }
      case "DELETE_MANGAS": 
      return {
        mangas: state.mangas.filter((manga) => manga._id !== action.payload._id )
      }
     default:
      return state
  }
}

export const MangaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mangasReducer, {
    mangas: null,
  });
  /* dispatch: it's a function that updates the state, within it, we pass an object as argument, 
  first propretie called type  ( REQUIRED )  ( string with all Uppercase letters and underScore ex: ADD_COUNT) which describe the state change we want to make.
  Second propertie called payload ( Optional ) which represents  Any additional data that the reducer function needs to perform the update
  */
  return(
    <MangaContext.Provider value={{ ...state, dispatch }}>
    {children}
  </MangaContext.Provider>
  )

}
