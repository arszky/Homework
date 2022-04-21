import React, { useState } from "react";
import "./index.css";

interface IProps {
  img: string;
  title: string;
  artist: string;
  duration: number;
  toggleSelect: () => void;
}

const Card: React.FC<IProps> = ({
  title,
  artist,
  img,
  duration,
  toggleSelect,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleToggleSelect: () => void = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };

  return (
    <div className="card">
      <img src={img} alt={title} className="img" />

      <div className="right_content_wrapper">
        <h3 className="card_title">{title}</h3>
        <h4 className="card_duration">{duration} second</h4>
        <h3 className="card_artist">{artist}</h3>

        <button className="card_button" onClick={handleToggleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Card;
