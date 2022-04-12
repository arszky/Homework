import React, { useState } from "react";
import "./index.css";

const Card = ({ title, artist, img, toggleSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  return (
    <div className="card">
      <img src={img} alt={title} className="img" />

      <div className="left_content_wrapper">
        <h3 className="card_title">{title}</h3>
        <h3 className="card_artist">{artist}</h3>

        <button className="card_button" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Card;
