import React from "react";
import "./form.css";

const Form = () => {
  const handleClick = () => {
    const judul = document.getElementById("title").value;

    alert(`Added new playlist. Playlist name: ${judul}`);
  };
  return (
    <div className="card">
      <div className="createPlaylist">
        <h1>Create Playlist</h1>
        <div className="form">
          <p>Title of Your Playlist :</p>
          <input
            type="text"
            id="title"
            name="title_input"
            className="inputTitle"
          />
          <p>Description :</p>
          <textarea
            id="description"
            placeholder="Add an optional description"
            className="desc"
          ></textarea>
          <p></p>
          <button onClick={handleClick} id="btn-Submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
