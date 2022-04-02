import React, { useState, useEffect } from "react";
import config from "../../lib/config";
import "./index.css";

const Search = ({ accessToken, onSuccess }) => {
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`,
        requestOptions
      ).then((data) => data.json());

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form className="searchBarWrap" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="form_inputSearch"
        required
        onChange={handleInput}
      />
      <button className="btn-search" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
