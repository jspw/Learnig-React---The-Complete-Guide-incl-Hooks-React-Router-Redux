import * as actionTypes from "../services/actionTypes";

export const selectSong = (song) => {
  return {
    type: actionTypes.SELECT_SONG,
    payload: song,
  };
};
