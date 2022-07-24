import type { NextPage } from 'next';
import Image from 'next/image';
import hindi from '../../stations/hindi.json';

import player from '../modules/player';
import useStore from '../states/useStore';
const Home: NextPage = () => {
  // const stations = hungama.data.stations.filter(
  //   (value, index, self) =>
  //     index === self.findIndex((t) => t.radio_uid === value.radio_uid)
  // );
  // console.log(stations);
  const { playerStatus } = useStore((state) => state);

  const playRadio = (track: any) => {
    player.play(track);
  };

  return (
    <div className='flex bg-black text-white'>
      <audio id='tarana' />
      <aside className='bg-[#111111] w-[17rem] hidden lg:flex shadow-md justify-center '>
        <ul className='flex flex-col w-full pt-2'>
          <li className='pl-8 py-4 text-md font-semibold sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
            Hindi Radios
          </li>
          <li className='pl-8 py-4 text-md font-semibold sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
            Mirchi Radios
          </li>
          <li className='pl-8 py-4 text-md font-semibold sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r border-[#00AC7C]'>
            Telugu
          </li>
          <li className='pl-8 py-4 text-md font-semibold sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
            Kanada
          </li>
          <li className='pl-8 py-4 text-md font-semibold sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
            Malayalam
          </li>
          <li className='pl-8 py-4 text-md font-semibold sm:motion-safe:hover:text-[#00AC7C] hover:bg-[#00ac7b15] duration-200 focus:outline-none cursor-pointer hover:border-r  border-[#00AC7C]'>
            Punjabi
          </li>
        </ul>
      </aside>
      <main className='h-screen w-full overflow-scroll'>
        <div className='w-full flex justify-center sticky top-0 z-10 bg-black py-4'>
          <div className=' rounded-full bg-[#1D1D1D] text-white outline-none w-96 flex items-center '>
            <input
              type='text'
              placeholder='Search your favorite stations'
              className='p-4 rounded-full bg-[#1D1D1D] text-white outline-none w-full'
            />
            <div className='px-4'>icon</div>
          </div>
        </div>
        <div className='flex flex-wrap justify-evenly md:flex gap-2 lg:grid grid-cols-4 sm:justify-center xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-9 py-2'>
          {hindi.data.map((station: any) => (
            <div key={station.radio_uid} className='flex justify-center'>
              <div
                className='flex flex-col items-center gap-1 cursor-pointer transform transition
             sm:motion-safe:hover:bg-[#1D1D1D] duration-300 focus:outline-none rounded-md h-56 w-44 justify-center '>
                <div
                  className='rounded-md overflow-hidden h-50 w-40 motion-safe:active:scale-95 duration-300'
                  onClick={() => {
                    playRadio(station);
                  }}>
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
                <div className='w-40 flex flex-col'>
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
        <div className='w-full flex justify-center sticky bottom-0 z-10 bg-[#111111] py-4 h-18'>
          {playerStatus.nowPlaying.player_image ? (
            <Image
              src={playerStatus?.nowPlaying?.player_image}
              height='80'
              width='80'
              alt={playerStatus?.nowPlaying?.name}
              loading='eager'
            />
          ) : (
            <h2></h2>
          )}
          <button
            className='bg-[#00AC7C] rounded-full overflow-hidden h-8 w-40 motion-safe:active:scale-95 duration-300 ml-4'
            onClick={() =>
              playerStatus.playing
                ? player.pause()
                : player.play(playerStatus?.nowPlaying)
            }>
            {playerStatus.playing
              ? 'Pause'
              : playerStatus.buffering && !playerStatus.playing
              ? 'Buffering'
              : 'Play'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
