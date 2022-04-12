import { useState } from "react";
import Form from "../../components/FormCreatePlaylist";
import Search from "../../components/Searchbar";
import Card from "../../components/Card";

const CreatePlaylist = () => {
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);

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
      <Form uriTracks={selected} />
      <div className="top-wrapper">
        <Search onSuccess={(tracks) => onSuccessSearch(tracks)} />
      </div>
      <div className="container">
        {tracks.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            artist={item.artists[0].name}
            img={item.album.images[0].url}
            // album={item.album[0].name}
            toggleSelect={() => toggleSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreatePlaylist;
