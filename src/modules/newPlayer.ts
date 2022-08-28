import OpenPlayerJS from 'openplayerjs';

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
    });
    playerRef.init();
  }
  return playerRef;
};

player.cleanUp = () => {
  if (playerRef) {
    playerRef.stop();
  }
};

player.play = async (track: any) => {
  player.cleanUp();
  player.init();

  playerRef.getElement().addEventListener('playing', (event: any) => {
    console.log('-----event playing', event);
  });

  playerRef.getElement().addEventListener('loadstart', (event: any) => {
    console.log('-----event loadstart', event);
  });

  playerRef.getElement().addEventListener('canplay', () => {
    console.log('------> volume', playerRef.getMedia().volume);
  });

  const stream = JSON.parse(track.streams)[0];
  playerRef.src = stream;
  await playerRef.load();
  console.log('-----media', playerRef.getMedia());
  playerRef.play();
};

export default player;