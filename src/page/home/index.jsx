import React from "react";
import Card from "../../components/Card";
import data from "../../data/dataAlbum";
import "./index.css";

const Home = () => {
  return (
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
  );
};

export default Home;
