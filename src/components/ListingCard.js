import React, { useState } from "react";

function ListingCard({id, description, image = 'https://via.placeholder.com/300x300', location, handleDelete}) {
  const [liked, setLiked] = useState(false);

  function handleLike(e) {
    setLiked(!liked);
  }

  function handleDeleteClick() {
    handleDelete(id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={handleLike}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleLike}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
