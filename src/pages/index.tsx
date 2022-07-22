import type { NextPage } from 'next';
import Image from 'next/image';
// import hungama from '../../stations/radio.json';
import hindi from '../../stations/hindi.json';

import player from '../modules/player';
const Home: NextPage = () => {
  // const stations = hungama.data.stations.filter(
  //   (value, index, self) =>
  //     index === self.findIndex((t) => t.radio_uid === value.radio_uid)
  // );
  // console.log(stations);
  const playRadio = (track: any) => {
    const playTrack: any = { url: JSON.parse(track.streams)[0] };
    player.play(playTrack);
  };
  return (
    <div className='flex bg-[#111111] text-white '>
      <aside className='bg-[#1D1D1D] w-[17rem]  h-screen hidden lg:flex shadow-md justify-center'>
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
      <main className='h-screen w-full overflow-scroll py-4'>
        <div className='flex flex-wrap justify-evenly md:flex  gap-2 lg:grid grid-cols-4 sm:justify-center xl:grid-cols-6 2xl:grid-cols-8 3xl:grid-cols-9'>
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
      </main>
    </div>
  );
};

export default Home;
