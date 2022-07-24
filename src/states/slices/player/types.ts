export interface PlayerStatusSliceTypes {
  playerStatus: {
    playing: boolean;
    buffering: boolean;
    stopped: boolean;
    paused: boolean;
    error: {
      code: null;
      description: null;
    };
    muted: boolean;
    nowPlaying: any;
    type: string;
  };
  updatePlayerStatus: (state: any) => void;
}
