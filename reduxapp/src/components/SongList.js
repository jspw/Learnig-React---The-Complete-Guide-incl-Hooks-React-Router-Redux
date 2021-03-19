import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

const SongList = (props) => {
  console.log(props.songs);

  const songs = props.songs;

  const songsListUI = songs.map((song) => {
    return (
      <li style={{ margin: "5px" }} key={song.title}>
        <b>{song.title}</b>{" "}
        <button
          style={{ padding: "5px", color: "white", backgroundColor: "green" }}
          onClick={() => props.selectSong(song)}
        >
          Select
        </button>
      </li>
    );
  });

  return (
    <div style={{ float: "left" }}>
      <div>
        <h3>Songs List</h3>
      </div>
      <div>
        <ul>{songsListUI}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
