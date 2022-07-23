import create from 'zustand';
import createPlayerSlice from './playerStatusSlice/createPlayerSlice';
import { PlayerStatusSliceTypes } from './playerStatusSlice/types';

export type StoreState = PlayerStatusSliceTypes;

const useStore = create<StoreState>((...state) => ({
  ...createPlayerSlice(...state),
}));

export default useStore;
