/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';
import Image from 'next/image';
import { RiSearchLine } from 'react-icons/ri';
import hindi from '../../stations/hindi.json';

import Link from 'next/link';
import { useEffect } from 'react';
// import player from '../modules/player';
import useStore from '../states/useStore';
import player from '../modules/newPlayer';
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
    updatePlayerStatus({
      ...playerStatus,
      nowPlaying: track,
    });
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
      <div className='flex'>
        <aside className='bg-[#111111] w-[17rem] hidden lg:flex shadow-md justify-center '>
          <ul className='flex flex-col w-full pt-2'>
            <li>
              <Link href='/test'>
                <div className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
                  <a>Hindi Radios</a>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/test'>
                <div className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
                  <a>Mirchi Radios</a>
                </div>
              </Link>
            </li>

            <li>
              <Link href='/test'>
                <div className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
                  <a>Telugu Radios</a>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/test'>
                <div className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
                  <a>Kannada Radios</a>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/test'>
                <div className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
                  <a>Malayalam Radios</a>
                </div>
              </Link>
            </li>
            <li>
              <Link href='/test'>
                <div className='pl-8 py-4 text-md font-medium sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
                  <a>Punjabi Radios</a>
                </div>
              </Link>
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
              <div className='px-4'>
                <RiSearchLine size={24} color='#00AC7C' />
              </div>
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
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
