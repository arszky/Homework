import React, { Component } from "react";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import data from "../data/dataAlbum";
import "./index.css";
import config from "../lib/config";

class Home extends Component {
  state = {
    accessToken: "",
    isLogin: false,
  };

  getHashParams() {
    const hashParams = {};
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    let e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {
    const params = this.getHashParams();
    const { access_token: accessToken } = params;

    this.setState({ accessToken, isAuthorize: accessToken !== undefined });
  }

  getSpotifyLinkAuthorize() {
    const state = Date.now().toString();
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    return `${config.SPOTIFY_BASE_URL}/authorize?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000&state=${state}&scope=${config.SPOTIFY_SCOPE}`;
  }

  onSuccessSearch(tracks) {
    this.setState({ tracks });
  }

  render() {
    return (
      <div className="top-wrapper">
        <a href={this.getSpotifyLinkAuthorize()}>Authorize</a>

        {/* <Searchbar accessToken={this.state.accessToken} onSuccess={tracks} /> */}
        <Searchbar />

        <div className="container">
          {data.map((data) => (
            <Card
              key={data.id}
              img={data.album.images[0].url}
              title={data.name}
              artists={data.artists[0].name}
            />
          ))}
        </div>
      </div>
    );
  }

  // const Home = () => {
  // return (
  //   <div className="container">
  //     {data.map((data) => (
  //       <Card
  //         key={data.id}
  //         img={data.album.images[0].url}
  //         title={data.name}
  //         artists={data.artists[0].name}
  //       />
  //     ))}
  //   </div>
  //   );
  // };
}
export default Home;
