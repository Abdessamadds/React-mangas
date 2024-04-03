import { useMangaContext } from "../hooks/useMangaContext";

const MangaDetails = ({ manga }) => {
  const { dispatch } = useMangaContext();

  const handleClick = async () => {
    // console.log("Deleting manga with ID:", manga._id);
    const response = await fetch("/api/blogs/" + manga._id, {
      method: "DELETE"
    })
    const json = await response.json();
    console.log(json)
    if (response.ok) {
      dispatch({ type: 'DELETE_MANGAS', payload: json })
    }else {
      console.error("Error deleting manga:", response.status, json);
    }
  };
  return (
    <>
      <div className="manga-details">
        <h4>{manga.title}</h4>
        <p>
          Description:
          <strong> {manga.description}</strong>
        </p>
        <p>
          Price:<strong> {manga.price} $</strong>
        </p>
        <p>Published in our website : {manga.createdAt}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>Delete</span>
      </div>
    </>
  );
};

export default MangaDetails;
