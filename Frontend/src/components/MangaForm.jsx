import { useState } from "react";
import { useMangaContext }  from '../hooks/useMangaContext'
const MangaForm = () => {
  const {dispatch} = useMangaContext() 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const manga = { title, description, price };
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(manga),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setTitle("");
      setDescription("");
      setPrice("");
      setError(null);
      console.log("new Manga added !", json);
      dispatch({ type: "CREATE_MANGAS", payload: json})
    }
  };
  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a new Manga</h3>
        <label> Manga Title : </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label> Description : </label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className={emptyFields.includes('description') ? 'error' : ''}
        />
        <label> Price : $</label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className={emptyFields.includes('price') ? 'error' : ''}
        />
        <button>Add manga</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default MangaForm;
