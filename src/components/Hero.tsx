import React from 'react';
import Image from 'next/image';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <div className='pattern mx-auto flex min-h-screen flex-col items-center bg-slate-900 px-6'>
      <nav className='flex w-full max-w-7xl flex-row items-center justify-between py-6'>
        <Image
          className='h-12 w-auto sm:h-24'
          src='/annauniv.png'
          alt='annauniv'
          width={100}
          height={100}
        />
        <Image
          className='h-12 w-auto sm:h-24'
          src='/mitlogo.png'
          alt='mitlogo'
          width={100}
          height={100}
        />
        <Image
          className='h-12 w-auto sm:h-24'
          src='/iea.png'
          alt='iea'
          width={100}
          height={100}
        />
        <Image
          className='h-12 w-auto sm:h-24'
          src='/mit75.png'
          alt='mit75'
          width={100}
          height={100}
        />
      </nav>

      <Countdown />

      <div className='my-auto flex flex-col items-center justify-center space-y-5 pb-20 text-center'>
        <div className='hidden w-full flex-col items-center justify-center overflow-hidden lg:flex'>
          <Image
            src={'/intechoLogo.svg'}
            alt='Intecho Logo'
            width={1000}
            height={500}
          />
        </div>

        <div className='flex w-full flex-col items-center justify-center overflow-hidden lg:hidden'>
          <Image
            src={'/intechoLogoMob.svg'}
            alt='Intecho Logo'
            width={1000}
            height={1000}
          />
        </div>

        <div className='mx-auto flex max-w-4xl flex-col items-center justify-center'>
          <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-white bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-4xl lg:text-5xl'>
            National Level Technical Symposium
          </h1>
          <p className='text-md mx-auto my-2 mt-4 max-w-xs text-base font-normal text-neutral-400 md:max-w-xl md:text-xl'>
            by Department of Instrumentation Engineering, MIT Campus
            <br />
            Anna Univeristy
          </p>
        </div>

        <span className='z-30 mx-auto inline-flex w-fit items-center justify-center gap-x-3 rounded-full border border-transparent bg-neutral-300 bg-gradient-to-tl from-blue-800 to-blue-600 px-2 py-1 text-center text-base font-medium text-white shadow-lg shadow-blue-700/50 outline-none ring-2 ring-blue-600 ring-offset-2 ring-offset-gray-800 md:px-6 md:py-2.5 md:text-xl'>
          16 & 17 March 2024
        </span>
      </div>
    </div>
  );
};

export default Hero;
