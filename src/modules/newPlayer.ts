import OpenPlayerJS from 'openplayerjs';
import playerStateSetter from '../states/setters/player';

const player: any = {};
const type = 'audio';

const getMimeType = (url: string) => {
  if (/\.m3u8/i.test(url)) {
    return 'application/x-mpegURL';
  } else if (/\.mpd/i.test(url)) {
    return 'application/dash+xml';
  } else if (/\.mp4/i.test(url)) {
    return type === 'audio' ? 'audio/mp4' : 'video/mp4';
  } else if (/\.mp3/i.test(url)) {
    return 'audio/mp3';
  } else if (/\.webm/i.test(url)) {
    return type === 'audio' ? 'audio/webm' : 'video/webm';
  } else if (/\.ogg/i.test(url)) {
    return type === 'audio' ? 'audio/ogg' : 'video/ogg';
  } else if (/\.ogv/i.test(url)) {
    return 'video/ogg';
  } else if (/\.oga/i.test(url)) {
    return 'audio/ogg';
  } else if (/\.3gp/i.test(url)) {
    return 'audio/3gpp';
  } else if (/\.wav/i.test(url)) {
    return 'audio/wav';
  } else if (/\.aac/i.test(url)) {
    return 'audio/aac';
  } else if (/\.flac/i.test(url)) {
    return 'audio/flac';
  }

  // Let browser figure out if it can play it
  return '';
};

let playerRef: any = null;
player.init = () => {
  if (!playerRef) {
    playerRef = new OpenPlayerJS('tarana', {
      forceNative: false,
      startTime: -1,
    });
    playerRef.init();
  }
  return playerRef;
};

player.play = async (track: any) => {
  const stream = JSON.parse(track.streams)[0];

  player.cleanUp();
  player.init();
  console.log(playerRef);

  playerRef.getElement().addEventListener('waiting', (event: any) => {
    // console.log('----- BUFFERING -----');
    playerStateSetter.buffering();
  });

  playerRef.getElement().addEventListener('playing', (event: any) => {
    // console.log('----- PLAYING -----');
    playerStateSetter.playing(track, getMimeType(stream));
  });

  playerRef.getElement().addEventListener('progress', (event: any) => {
    // console.log('----- PROGRESSING -----');
  });

  playerRef.getElement().addEventListener('pause', (event: any) => {
    // console.log('----- PAUSED -----');
    playerRef.stop();
    playerStateSetter.cleanUp();
  });

  playerRef.getElement().addEventListener('seeking', (event: any) => {
    // console.log('----- SEEKING -----');
  });

  playerRef.getElement().addEventListener('durationchange', (event: any) => {
    // console.log('----- DURATION CHANGED -----');
  });

  playerRef.getElement().addEventListener('timeupdate', (event: any) => {
    // console.log('----- TIME UPDATED -----');
  });

  playerRef.getElement().addEventListener('playererror', function (event: any) {
    // console.log('----- ERROR -----');
  });

  playerRef.src = stream;
  await playerRef?.load();
  await playerRef?.play();
};

player.cleanUp = () => {
  if (playerRef) {
    playerRef.stop();
  }
};

player.pause = () => {
  if (playerRef) {
    playerRef.pause();
  }
};

player.stop = () => {
  if (playerRef) {
    playerRef.stop();
  }
};

player.setVolume = (volume: any) => {
  if (playerRef) {
    playerRef.getMedia().volume = volume / 100;
    return;
  }
};

player.mute = () => {
  if (playerRef) {
    playerRef.getMedia().muted = true;
    playerStateSetter.muted();
  }
};

export default player;
