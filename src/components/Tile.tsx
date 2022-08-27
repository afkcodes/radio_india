import Image from 'next/image';
import React from 'react';
import player from '../modules/player';
import useStore from '../states/useStore';

const Tile = ({ station }: any) => {
  const { playerStatus, updatePlayerStatus } = useStore((state) => state);

  const playRadio = (track: any) => {
    player.play(track);
    updatePlayerStatus({
      ...playerStatus,
      nowPlaying: track,
    });
    localStorage.setItem('lastPlayed', JSON.stringify(track));
  };

  return (
    <div key={station.radio_uid} className='flex justify-center'>
      <div
        className='flex flex-col items-center gap-1 cursor-pointer transform transition
             sm:motion-safe:hover:bg-[#1D1D1D] duration-300 focus:outline-none rounded-md h-56 w-44 justify-center motion-safe:active:scale-95'
        onClick={() => {
          playRadio(station);
        }}>
        <div className='rounded-md overflow-hidden h-50 w-40 '>
          <Image
            src={station.player_image}
            width='100%'
            height='100%'
            layout='responsive'
            objectFit='cover'
            alt={`${station.name}-img`}
            loading='lazy'
          />
        </div>
        <div className='w-40 flex flex-col text-center'>
          <p className='overflow-hidden whitespace-nowrap text-ellipsis'>
            {station.name}
          </p>
          <p className='overflow-hidden whitespace-nowrap text-ellipsis text-[0.7rem]'>
            {station?.categories.split(',').join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tile;
