import {  useEffect } from "react";
import { useMangaContext } from "../hooks/useMangaContext"; 


// components
import MangaDetails from "../components/MangaDetails";
import MangaForm from "../components/MangaForm";

const Home = () => {
  // const [mangas, setMangas] = useState(null);
  const { mangas, dispatch} = useMangaContext() 
  useEffect(() => {
    const fetchManga = async () => {
      const response = await fetch("/api/blogs", {
        headers: { "content-type": "application/json" },
      });
      const json = await response.json();
      if (response.ok) {
        // setMangas(json);
        dispatch({type: 'SET_MANGAS', payload:json})

      }
    };
    fetchManga();
  }, []);

  return (
    <>
      <div className="home">
        <div className="mangas">
          {mangas && mangas.map((manga) =>
           <MangaDetails key={manga._id} manga = {manga}
           />)}
        </div>
           <MangaForm />
      </div>
    </>
  );
};

export default Home;
