import React from "react";

const MangaDetails = ({ manga }) => {
  return (
    <>
      <div className="manga-details">
        <h4>{manga.title}</h4>
        <p>
          Description:
          <strong> {manga.description}</strong>{" "}
        </p>
        <p>
          Price:<strong> {manga.price} $</strong>
        </p>
        <p>Published in our website : {manga.createdAt}</p>
      </div>
    </>
  );
};

export default MangaDetails;
