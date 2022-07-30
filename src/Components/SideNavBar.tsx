import React from 'react';

const SideNavBar = () => (
  <aside className='bg-[#111111] w-[17rem] hidden lg:flex shadow-md justify-center h-screen fixed z-30'>
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
);

export default SideNavBar;
