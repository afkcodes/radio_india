import useStore from '../useStore';

const playerStateSetter: any = {};

const { updatePlayerStatus } = useStore.getState();

playerStateSetter.playing = (track: any, type: string) => {
  updatePlayerStatus({
    playing: true,
    paused: false,
    stopped: false,
    nowPlaying: track,
    buffering: false,
    type,
  });
};

playerStateSetter.buffering = () => {
  updatePlayerStatus({
    playing: false,
    paused: true,
    buffering: true,
    stopped: true,
  });
};

playerStateSetter.error = (errorCode: number, description: string) => {
  updatePlayerStatus({
    playing: false,
    paused: true,
    stopped: true,
    buffering: false,
    error: {
      code: errorCode,
      description,
    },
  });
};

playerStateSetter.stopped = () => {
  updatePlayerStatus({
    playing: false,
    paused: true,
    stopped: true,
  });
};

playerStateSetter.paused = () => {
  updatePlayerStatus({
    playing: false,
    paused: true,
    stopped: true,
  });
};

playerStateSetter.muted = () => {
  updatePlayerStatus({
    muted: true,
  });
};

playerStateSetter.cleanUp = () => {
  updatePlayerStatus({
    playing: false,
    paused: true,
    stopped: true,
    buffering: false,
  });
};

export default playerStateSetter;
