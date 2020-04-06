// Base URL of the Server
const BASE_URL = 'https://my-json-server.typicode.com/pankaj-work/Temp-JSON';

// API for getting all the songs list
export const GET_MUSIC_LIST = `${BASE_URL}/MusicList`;

// API for getting all the details of a particular song
export const GET_DETAILS = (SONG_ID) => `${BASE_URL}/${SONG_ID}`;
