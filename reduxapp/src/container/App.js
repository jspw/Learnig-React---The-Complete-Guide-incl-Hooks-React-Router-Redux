import React from "react";
import { selectSong } from "../actions";
import SongDetail from "../components/SongDetail";
import SongList from "../components/SongList";

const App = () => {
  return (
    <div>
      <h1 align="center">Hello From React-Redux</h1>
      <div>
        <SongList />
        <SongDetail />
      </div>
    </div>
  );
};

export default App;
