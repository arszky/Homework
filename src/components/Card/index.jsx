import React from "react";
import "./index.css";

const Card = ({ title, artists, img }) => {
  return (
    <div className="card">
      <div className="card-wrap">
        <img src={img} alt={title} className="card_img" />

        <div class="card_content">
          <h3 className="card_album">{title}</h3>
          <h3 className="card_artist">{artists}</h3>
        </div>

        <div className="button_wrapper">
          <button className="card_button">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
