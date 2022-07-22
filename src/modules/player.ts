import Hls from 'hls.js';
const pendingCalls: any = [];

let soundManager: any;
let hlsRef: any;
let hlsAudio: any;

// Allow server side rendering
if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV !== 'production') {
    ({ soundManager } = require('soundmanager2'));
  } else {
    ({ soundManager } = require('soundmanager2/script/soundmanager2-nodebug'));
  }

  soundManager.onready(() => {
    pendingCalls.slice().forEach((cb: any) => cb());
    console.log('Tarana Ready');
  });
}

const player: any = {};
player.play = (track: any) => {
  let currentVolume = 100;
  if (soundManager.sounds && soundManager.sounds.tarana) {
    currentVolume = soundManager.sounds.tarana.volume;
  }
  player.cleanUp();
  console.log('============', track);
  const type = track.url.indexOf('.m3u8') === -1 ? 'sm2' : 'hls';

  if (type === 'hls') {
    const audio = document.createElement('audio');
    audio.setAttribute('id', 'hls-audio');

    hlsAudio = audio;
    console.log('============', hlsAudio);
    if (Hls.isSupported()) {
      player.cleanUp();
      console.log(' *************', hlsRef);
      const hls = new Hls({
        enableWorker: false,
        debug: true,
      });
      hls.loadSource(track.url);
      hls.attachMedia(hlsAudio);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hlsAudio.play();
      });
      // window.hls = hlsAudio;
      // window.hlsRef = hls;
      // window.hlsAudio = hlsAudio;
      // hlsRef = hlsAudio;

      hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, (eventName, data) => {
        console.log(`Error event: ${eventName} `, data);
        // playerStateSetter.error(eventName, data);
      });

      hlsAudio.addEventListener('canplay', () => {
        console.log(`---------> Buffering`);
        // playerStateSetter.buffering();
      });

      hlsAudio.addEventListener('playing', () => {
        console.log(`---------> Playing`);
        // playerStateSetter.playing(track, type);
      });

      hlsAudio.addEventListener('pause', () => {
        console.log(`---------> Pauses`);
        // playerStateSetter.cleanUp();
      });

      hlsAudio.addEventListener('error', (evt: any) => {
        const mediaError = evt.currentTarget.error;
        console.log(`---------> Playing`, mediaError);
      });

      hlsAudio.addEventListener('volumechange', () => {
        console.log(`---------> volumeChange`);
      });
    }
    return;
  }
  const sound = soundManager.createSound({
    url: track.url,
    id: 'tarana',
    volume: currentVolume,
    stream: true,
    // whileplaying() {
    //   if (!playerState.playing.get() && sound.playState === 1) {
    //     // playerStateSetter.playing(track, type);
    //   }
    // },

    whileloading() {},
    onerror(errorCode: any, description: any) {
      // playerStateSetter.error(errorCode, description);
    },
    onload() {},
    onpause() {
      // playerStateSetter.cleanUp();
    },
    onresume() {},
    onstop() {
      // playerStateSetter.stopped();
    },
    onbufferchange() {
      // playerStateSetter.buffering();
    },
    onfinish() {},
  });
  sound.play();
  // window.soundManager = null;
};

player.pause = () => {
  const sound = soundManager.sounds;
  if (sound.tarana) {
    player.cleanUp();
  }
  if (hlsRef != null) {
    player.cleanUp();
  }
};

player.setVolume = (volume: any) => {
  // if (playerState.type.get() === "hls") {
  //   hlsAudio.volume = volume / 100;
  //   return;
  // }
  soundManager.setVolume(volume);
};

player.mute = () => {
  soundManager.mute();
  // playerStateSetter.muted();
};

player.cleanUp = () => {
  const id = soundManager.getSoundById('tarana');

  if (id) {
    id.destruct();

    // playerStateSetter.cleanUp();
  }
  // if (playerState.type.get() === 'hls') {
  console.log('cleanUp', hlsRef);
  // hlsRef.destroy();
  // playerStateSetter.cleanUp();
  // }
};

export default player;
