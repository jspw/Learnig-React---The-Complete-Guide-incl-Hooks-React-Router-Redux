import * as actionTypes from "../services/actionTypes";

import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    {
      title: "Sona Dia Bandhaiyasi Ghor",
      duration: "4.05",
    },
    {
      title: "Somoy Gele Sadhon Hobe Na",
      duration: "6.00",
    },
    {
      title: "Dilo na Dilo na",
      duration: "4.05",
    },
    {
      title: "Country Road Take Me Home",
      duration: "4.05",
    },
    {
      title: "Love Me Like You Do",
      duration: "4.05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case actionTypes.SELECT_SONG:
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({
  songs: songListReducer,
  selectedSong: selectedSongReducer,
});
