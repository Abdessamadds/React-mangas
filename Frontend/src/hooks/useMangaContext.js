import { MangaContext } from "../context/MangaContext";
import { useContext } from "react";

 export const useMangaContext = () => {

    const context = useContext(MangaContext)

    if(!context){
        Error(' useMangaContext must be used within the MangasContextProvider')
    }
    return context
}