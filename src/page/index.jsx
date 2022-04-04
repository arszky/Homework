import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Search from "../components/Searchbar";
import config from "../lib/config";
import Form from "../components/FormCreatePlaylist";
import "./index.css";

const Home = () => {
  const [accToken, setAccToken] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );

    if (accessTokenParams !== null) {
      setAccToken(accessTokenParams);
      setIsLogin(accessTokenParams !== null);

      const setUserProfile = async () => {
        try {
          const requestOptions = {
            headers: {
              Authorization: "Bearer " + accessTokenParams,
              "Content-Type": "application/json",
            },
          };
          console.log(requestOptions);

          const response = await fetch(
            `${config.SPOTIFY_BASE_URL}/me`,
            requestOptions
          ).then((data) => data.json());
          console.log(response);
          setUser(response);
        } catch (e) {
          alert(e);
        }
      };
      setUserProfile();
    }
  }, []);

  const getLinkAuth = () => {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  };

  const onSuccessSearch = (searchtracks) => {
    const selectedTracks = filterSelectedTracks();
    const searchDistincTracks = searchtracks.filter(
      (track) => !selected.includes(track.uri)
    );

    setTracks([...selectedTracks, ...searchDistincTracks]);
  };

  const toggleSelect = (track) => {
    const uri = track.uri;

    if (selected.includes(uri)) {
      setSelected(selected.filter((item) => item !== uri));
    } else {
      setSelected([...selected, uri]);
    }
  };

  const filterSelectedTracks = () => {
    return tracks.filter((track) => selected.includes(track.uri));
  };

  return (
    <div className="formCreatePlaylist">
      <Form accessToken={accToken} userId={user.id} uris={selected} />
      <div className="top-wrapper">
        {!isLogin && <a href={getLinkAuth()}>Authorize</a>}
        <Search
          accessToken={accToken}
          onSuccess={(tracks) => onSuccessSearch(tracks)}
        />
      </div>
      <div className="container">
        {tracks.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            artist={item.artists[0].name}
            img={item.album.images[0].url}
            toggleSelect={() => toggleSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
