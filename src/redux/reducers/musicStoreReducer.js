/**
 *  Imports
 */
import {
  ADD_MUSIC_LIST_ACTION,
  GET_SONG_DETAILS_ACTION,
} from '../actionConstants';

/** Initial State  */
const INITIAL_STATE = { musicList: [], songDetails: {} };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MUSIC_LIST_ACTION:
      return { ...state, musicList: action.payload };
    case GET_SONG_DETAILS_ACTION:
      return { ...state, songDetails: action.payload };
    default:
      return { ...state };
  }
}
