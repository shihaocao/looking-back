import React from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Letter from '../components/Letter';
import Sidenote from '../components/Sidenote';
import Sidebar from '../components/Sidebar';

import { useScroll } from 'framer-motion';

const navList = [
  { name: 'Credits', link: '#credits' },
  { name: 'Collection', link: '/collection' },
  {
    name: 'Contribute',
    link: 'https://8fmdz3e9wad.typeform.com/to/Z1mOCaPD',
  },
  { name: 'Github', link: 'https://github.com/ansonyuu/levers' },
];

export default function Home() {
  const { scrollY } = useScroll();

  return (
    <div className='overflow-y-auto'>
      <SEO title='Home' />
      <Sidebar />

      <div className='flex flex-col relative w-full'>
        {/* Add this back if we want a header image */}
        {/* <img
          className='w-[100vw] mt-[-80px] inline-block'
          src='/index-topbanner.svg'
          alt='decorational photo'
        /> */}
        {/* Spacing div to make more space at the top */}
        <div className='w-[100vw] mt-[80px] inline-block'>

        </div>

        <div className='md:px-10 lg:px-20 w-full h-auto relative flex flex-col '>
          <div className='flex flex-row justify-end m-10 gap-x-4 md:mt-[-80px]'>
            {navList.map((navItem) => {
              return (
                <a
                  key={navItem.name}
                  className='no-underline'
                  href={navItem.link}
                >
                  <p className='text-right text-black '> {navItem.name}</p>
                  <hr className='border-t-0.5 border-black' />
                </a>
              );
            })}
          </div>
          <div className='flex flex-col justify-center items-center m-10 gap-x-4 md:mt-[-30px]'>
            <h1 className='text-center text-black normal-case tracking-tight'>
              Looking Back... <br />
            </h1>

            <div className='flex  justify-center px-5 md:px-10 lg:px-20 w-full md:w-2/3 lg:w-[50vw] flex flex-col  pt-10 lg:pt-5'>
              {' '}
              <p className=''>
                {/* <Sidenote id={1} right={false}>
                  All views presented here are personal to members of PAN, and do not represent views of their employers
                </Sidenote> */}
                <Sidenote id={1} right={true}>
                  The code to make this website was in large part made possible by the groundwork laid by Anson Yu and Kevlin Yu from the leversforprogress.com project.
                </Sidenote>
                <p className='text-center tracking-normal'>
                  <em>
                    A collection of lessons learned and stories from teams and clubs in school.
                  </em>

                  <br />

                  <em>By Shihao Cao and friends</em>
                </p>
              </p>
            </div>
            <Button className='mt-5' />
          </div>
        </div>
      </div>
      <Letter />
    </div>
  );
}
