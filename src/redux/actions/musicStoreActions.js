import {
  ADD_MUSIC_LIST_ACTION,
  GET_SONG_DETAILS_ACTION,
} from '../actionConstants/index';
import { GET_MUSIC_LIST, GET_DETAILS } from '../../config/ApiDetails';

function addMusicDetails(data) {
  return {
    type: ADD_MUSIC_LIST_ACTION,
    payload: data,
  };
}

function addSongDetails(data) {
  return {
    type: GET_SONG_DETAILS_ACTION,
    payload: data,
  };
}

export function getAllMusicList() {
  return (dispatch) => {
    fetch(GET_MUSIC_LIST)
      .then((response) => response.json())
      .then((data) => {
        const siaSongs = (data && data.SIA && data.SIA.length) ? data.SIA : [];
        dispatch(addMusicDetails(siaSongs));
      })
      .catch((error) => console.log(error));
  };
}

export function getSongDetails(ID) {
  return (dispatch) => {
    fetch(GET_DETAILS(ID))
      .then((response) => response.json())
      .then((data) => {
        dispatch(addSongDetails(data));
      })
      .catch((error) => console.log(error));
  };
}
