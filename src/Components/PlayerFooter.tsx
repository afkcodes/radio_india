import Image from 'next/image';
import React from 'react';
import {
  RiLoader5Line,
  RiPlayCircleFill,
  RiStopCircleFill,
} from 'react-icons/ri';

interface PlayerProps {
  playerStatus: any;
  handlePlayOrPause: (value: any) => void;
}
const PlayerFooter: React.FC<PlayerProps> = ({
  playerStatus,
  handlePlayOrPause,
}) => (
  <div className='w-full flex justify-between items-center lg:w-85p fixed bottom-0 lg:left-[17rem] z-10 bg-[#111111] p-4 h-22'>
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

    <div className='text-center'>
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

export default PlayerFooter;
