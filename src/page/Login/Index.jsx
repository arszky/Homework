import React, { useEffect } from "react";
import config from "../../lib/config";
import { useDispatch } from "react-redux";
import { login } from "../../reducer/authReducer";
import { useHistory } from "react-router-dom";
import "../CreatePlaylist/index.css";

const Login = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    const accessTokenParams = new URLSearchParams(window.location.hash).get(
      "#access_token"
    );

    if (accessTokenParams !== null) {
      dispatch(login(accessTokenParams));

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
          dispatch(
            login({
              accessToken: accessTokenParams,
              user: response,
            })
          );
          history.push("/create-playlist");
        } catch (e) {
          alert(e);
        }
      };
      setUserProfile();
    }
  });

  const getLinkAuth = () => {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  };

  return (
    <div className="top-wrapper">
      <a id="link" href={getLinkAuth()}>
        Authorization
      </a>
    </div>
  );
};

export default Login;
