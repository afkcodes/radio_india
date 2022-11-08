import { StateCreator } from 'zustand';
import player from '../../../modules/newPlayer';
import { PlayerStatusSliceTypes } from './types';

const createPlayerSlice: StateCreator<PlayerStatusSliceTypes> = (set, get) => ({
  playerStatus: {
    playing: false,
    paused: false,
    buffering: false,
    stopped: false,
    error: {
      code: null,
      description: null,
    },
    muted: false,
    nowPlaying: {},
    type: '',
  },
  updatePlayerStatus: (status: PlayerStatusSliceTypes) => {
    set((prev: PlayerStatusSliceTypes) => ({
      playerStatus: { ...prev.playerStatus, ...status },
    }));
  },
  fetchAndPlay: async () => {
    const response = await fetch(
      'https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm'
    );
    const res = await response.json();
    const track = res.tracks[0];
    console.log(track);
    player.play(track);
  },
});
export default createPlayerSlice;
