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
  let zPlayer = null;
  if (!playerRef) {
    zPlayer = new OpenPlayerJS('tarana', {
      hls: {
        smoothQualityChange: true,
        overrideNative: true,
      },
    });
  } else {
    zPlayer = playerRef;
  }
  playerRef = zPlayer;
  return zPlayer;
};

player.cleanUp = () => {
  if (playerRef) {
    // playerRef.destroy();
    console.log('cleaning----->');
  }
};

player.play = async (track: any) => {
  player.cleanUp();
  let zPlayer = player.init();

  zPlayer.getElement().addEventListener('playing', (event: any) => {
    console.log('-----event playing', event);
  });

  zPlayer.getElement().addEventListener('loadstart', (event: any) => {
    console.log('-----event loadstart', event);
  });

  zPlayer
    .getElement()
    .addEventListener('hlsFragParsingMetadata', (event: any) => {
      console.log(event);
    });

  // zPlayer.getMedia().volume = 100;

  console.log('------>', zPlayer.getMedia());

  // player.cleanUp();
  const stream = JSON.parse(track.streams)[0];
  const type = stream.indexOf('.m3u8') === -1 ? 'sm2' : 'hls';
  // const isHTTP = stream.indexOf('http:') !== -1;

  const audioType = getMimeType(stream);
  zPlayer.src = { src: stream, type: audioType };

  await zPlayer.init();
  await zPlayer.load();
  await zPlayer.play();
  // console.log(zPlayer);
};

export default player;
