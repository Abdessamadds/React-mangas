import { useState, useEffect } from "react";
import MangaDetails from "../components/MangaDetails";

const Home = () => {
  const [mangas, setMangas] = useState(null);

  useEffect(() => {
    const fetchManga = async () => {
      const response = await fetch("/api/blogs", {
        headers: { "content-type": "application/json" },
      });
      const json = await response.json();
      if (response.ok) {
        setMangas(json);
      }
    };
    fetchManga();
  }, []);

  return (
    <>
      <div className="home">
        <div className="mangas">
          {mangas && mangas.map((manga) => <MangaDetails key={manga._id} manga = {manga}/>)}
        </div>
      </div>
    </>
  );
};

export default Home;
