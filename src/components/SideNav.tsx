import Link from 'next/link';
import React from 'react';

const SideNav = () => {
  return (
    <aside className='bg-[#111111] w-[17rem] hidden lg:flex shadow-md justify-center text-white '>
      <ul className='flex flex-col w-full pt-2'>
        <li>
          <Link href='/hindi'>
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
  );
};

export default SideNav;
