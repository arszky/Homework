import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import config from "../../lib/config";
import "./index.css";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TRootState } from "../../store";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
    },
  },
}));

interface IProps {
  onSuccess: (tracks: any[], text: string) => void;
}

const Search: React.FC<IProps> = ({ onSuccess }) => {
  const classes = useStyles();
  const accessToken: string = useSelector(
    (state: TRootState) => state.auth.accessToken
  );
  const [text, setText] = useState<string>("");

  const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
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
      onSuccess(tracks, text);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form className="searchBarWrap" onSubmit={onSubmit}>
      <div className={classes.root}>
        <input
          type="text"
          placeholder="Search..."
          className="form_inputSearch"
          required
          onChange={handleInput}
          data-testid="input-search"
        />
        <Button
          style={{ borderRadius: 0, height: 40 }}
          variant="contained"
          color="default"
          className="form_inputSearch"
          type="submit"
          data-testid="button-search"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default Search;
