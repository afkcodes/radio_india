/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';
import Image from 'next/image';
import hindi from '../../stations/hindi.json';
import {
  RiPlayCircleFill,
  RiPauseCircleFill,
  RiLoader3Line,
  RiLoader5Line,
} from 'react-icons/ri';

import player from '../modules/player';
import useStore from '../states/useStore';
import { useEffect } from 'react';
const Home: NextPage = () => {
  // const stations = hungama.data.stations.filter(
  //   (value, index, self) =>
  //     index === self.findIndex((t) => t.radio_uid === value.radio_uid)
  // );
  // console.log(stations);
  const { playerStatus, updatePlayerStatus } = useStore((state) => state);

  useEffect(() => {
    const lastPlayed = localStorage.getItem('lastPlayed');
    updatePlayerStatus({
      ...playerStatus,
      nowPlaying: JSON.parse(lastPlayed as string),
    });
  }, []);

  const playRadio = (track: any) => {
    player.play(track);
    localStorage.setItem('lastPlayed', JSON.stringify(track));
  };

  const handlePlayOrPause = () => {
    if (playerStatus.playing) {
      player.pause();
    } else {
      playRadio(playerStatus.nowPlaying);
    }
  };

  return (
    <div className='flex flex-col bg-black text-white'>
      <audio id='tarana' />
      <div className='flex'>
        <aside className='bg-[#111111] w-[17rem] hidden lg:flex shadow-md justify-center '>
          <ul className='flex flex-col w-full pt-2'>
            <li className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
              Hindi Radios
            </li>
            <li className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
              Mirchi Radios
            </li>
            <li className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r border-[#00AC7C]'>
              Telugu
            </li>
            <li className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
              Kanada
            </li>
            <li className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
              Malayalam
            </li>
            <li className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
              Punjabi
            </li>
          </ul>
        </aside>
        <main className='h-screen w-full overflow-scroll'>
          <div className='w-full flex justify-center sticky top-0 z-10 bg-black py-1'>
            <div className=' rounded-full bg-[#1D1D1D] text-white outline-none w-96 flex items-center '>
              <input
                type='text'
                placeholder='Search your favorite stations'
                className='p-3 rounded-full bg-[#1D1D1D] text-white outline-none w-full'
              />
              <div className='px-4'>icon</div>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly md:flex gap-2 lg:grid grid-cols-4 sm:justify-center xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-9 py-2'>
            {hindi.data.map((station: any) => (
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
                  <div className='w-40 flex flex-col text-center '>
                    <p className='overflow-hidden whitespace-nowrap text-ellipsis'>
                      {station.name}
                    </p>
                    <p className='overflow-hidden whitespace-nowrap text-ellipsis text-[0.7rem]'>
                      {station?.categories.split(',').join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <div className='w-full flex justify-between items-center sticky bottom-0 z-10 bg-[#111111] p-4 h-22'>
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
          <p className='font-medium text-xl' id='radio_name'>
            {playerStatus?.nowPlaying?.name}
          </p>
          <p className='text-[0.8rem]' id='radio_category'>
            {playerStatus?.nowPlaying?.categories}
          </p>
        </div>

        {playerStatus.playing ? (
          <RiPauseCircleFill
            size={55}
            color='#00AC7C'
            scale={1.5}
            className='motion-safe:hi:scale-2 duration-300 cursor-pointer'
            onClick={handlePlayOrPause}
          />
        ) : playerStatus.buffering && !playerStatus.playing ? (
          <RiLoader5Line size={55} color='#00AC7C' className='animate-spin' />
        ) : (
          <RiPlayCircleFill
            size={55}
            color='#00AC7C'
            className='motion-safe:active:scale-2 duration-300 cursor-pointer'
            onClick={handlePlayOrPause}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
