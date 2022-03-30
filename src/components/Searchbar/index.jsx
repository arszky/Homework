import React, { Component } from "react";
import "./index.css";

class Searchbar extends Component {
  state = {
    text: "",
  };

  hendleInput(e) {
    this.setState({ text: e.target.value });
  }

  async onSubmit(e) {
    const { text } = this.state;

    const option = {
      header: {
        Authorization: this.props.accessToken,
        "Content-Type": "application/json",
      },
    };

    // const response = await fetch(
    //   `${config.SPOTIFY_BASE_URL}/v1/search?type=track&q=${text}`
    // ).then(data.json());
    // const tracks = response.items;
    // this.props.onSuccess(tracks);
  }

  render() {
    return (
      <div className="searchbarWrap" onSubmit={(e) => this.onSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="form_inputSearch"
          required
          onChange={this.handleInput}
        />
        <button type="submit" value="submit">
          Search
        </button>
      </div>
    );
  }
}

export default Searchbar;
