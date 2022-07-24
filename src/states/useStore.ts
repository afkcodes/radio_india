import create from 'zustand';
import createPlayerSlice from './slices/player/createPlayerSlice';
import { PlayerStatusSliceTypes } from './slices/player/types';

export type StoreState = PlayerStatusSliceTypes;

const useStore = create<StoreState>((...state) => ({
  ...createPlayerSlice(...state),
}));

export default useStore;
