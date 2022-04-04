import React, { useState } from "react";
import config from "../../lib/config";
import "./form.css";
import { useSelector } from "react-redux";

const Form = ({ userId, uriTracks }) => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  console.log(accessToken);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.title.length > 10) {
      try {
        const requestOptions = {
          method: "POST",
          headers: {
            Authorization: "Bearer " + accessToken,
            "Content-Type": "application/json",
          },
        };

        const optionsForm = {
          ...requestOptions,
          body: JSON.stringify({
            name: form.title,
            description: form.description,
            public: false,
            collaborative: false,
          }),
        };

        const responseCreatePlaylist = await fetch(
          `${config.SPOTIFY_BASE_URL}/users/${userId}/playlists`,
          optionsForm
        ).then((data) => data.json());

        const optionsAddTrack = {
          ...requestOptions,
          body: JSON.stringify({
            uris: uriTracks,
          }),
        };

        await fetch(
          `${config.SPOTIFY_BASE_URL}/playlists/${responseCreatePlaylist.id}/tracks`,
          optionsAddTrack
        ).then((data) => data.json());

        setForm({ title: "", description: "" });
        alert("playlist created successfully");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Title must be large 10 characters");
    }
  };

  return (
    <div>
      <form className="form-createplaylist" onSubmit={handleSubmit}>
        <div className="createPlaylist">
          <label className="label">Create Playlist</label>
          <br />
          <div className="form">
            <input
              type="text"
              name="title"
              className="inputTitle"
              placeholder="My Playlist"
              value={form.title}
              onChange={handleChange}
            />
            <br />
            <p>Description :</p>
            <textarea
              name="description"
              id="description"
              className="desc"
              cols="60"
              rows="3"
              placeholder="Add an optional description"
              value={form.description}
              onChange={handleChange}
            ></textarea>
            <br />
            <button className="createBtn" type="submit">
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
