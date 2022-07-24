import { StateCreator } from 'zustand';
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
});
export default createPlayerSlice;
