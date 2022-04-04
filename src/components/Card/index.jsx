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
      <div className="card-wrap">
        <img src={img} alt={title} className="card_img" />

        <div className="card_content">
          <h3 className="card_album">{title}</h3>
          <h3 className="card_artist">{artist}</h3>
        </div>

        <div className="button_wrapper">
          <button className="card_button" onClick={handleToggleSelect}>
            {isSelected ? "Deselect" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
