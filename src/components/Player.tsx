import Image from 'next/image';
import React from 'react';
import {
  RiLoader5Line,
  RiPlayCircleFill,
  RiStopCircleFill,
} from 'react-icons/ri';
// import player from '../modules/player';
import useStore from '../states/useStore';

const Player = () => {
  const { playerStatus, updatePlayerStatus } = useStore((state) => state);

  const playRadio = (track: any) => {
    // player.play(track);
    updatePlayerStatus({
      ...playerStatus,
      nowPlaying: track,
    });
    localStorage.setItem('lastPlayed', JSON.stringify(track));
  };

  const handlePlayOrPause = () => {
    if (playerStatus.playing) {
      // player.pause();
    } else {
      playRadio(playerStatus.nowPlaying);
    }
  };

  return (
    <div className='w-full flex justify-between items-center sticky bottom-0 z-10 bg-[#111111] p-4 h-22'>
      <audio id='tarana' />
      <div className=' h-14 w-14 rounded-md overflow-hidden '>
        <Image
          src={
            playerStatus?.nowPlaying?.player_image
              ? playerStatus?.nowPlaying?.player_image
              : 'https://cdn.statically.io/gh/afkcodes/dummy/f1f6fa87/rock.png'
          }
          height='100%'
          width='100%'
          alt={playerStatus?.nowPlaying?.name}
          objectFit='contain'
          loading='eager'
        />
      </div>

      <div className='text-center text-white'>
        <p className='font-medium text-lg lg:text-xl' id='radio_name'>
          {playerStatus?.nowPlaying?.name}
        </p>
        <p className='text-[0.7rem]' id='radio_category'>
          {playerStatus?.nowPlaying?.categories?.split(',').join(', ')}
        </p>
      </div>

      {playerStatus.playing ? (
        <div className='cursor-pointer transform transition duration-300 focus:outline-none  justify-center motion-safe:active:scale-95'>
          <RiStopCircleFill
            size={55}
            color='#00AC7C'
            scale={1.5}
            onClick={handlePlayOrPause}
          />
        </div>
      ) : playerStatus.buffering && !playerStatus.playing ? (
        <RiLoader5Line size={55} color='#00AC7C' className='animate-spin' />
      ) : (
        <div className='motion-safe:hi:scale-2 duration-300 cursor-pointer'>
          <RiPlayCircleFill
            size={55}
            color='#00AC7C'
            className='cursor-pointer transform transition duration-300 focus:outline-none  justify-center motion-safe:active:scale-95'
            onClick={handlePlayOrPause}
          />
        </div>
      )}
    </div>
  );
};

export default Player;
