import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Ride On Shooting Star",
      artist: "The Pillows",
      duration: "2:21"
    },
    {
      title: "Making Of A Cyborg",
      artist: "Kenji Kawai",
      duration: "3:18"
    },
    {
      title: "Hit in the USA",
      artist: "Beat Crusaders",
      duration: "3:01"
    },
    {
      title: "Rewrite",
      artist: "Asian Kung Fu Generation",
      duration: "1:37"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
