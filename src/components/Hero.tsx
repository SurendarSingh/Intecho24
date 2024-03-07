import React from 'react';
import Image from 'next/image';

function HeroText() {
  return (
    <div className='flex w-full flex-col items-center justify-center overflow-hidden'>
      {/* <Image
        className='h-96 w-auto'
        src='/intecho.png'
        alt='intecho'
        width={100}
        height={100}
      /> */}

      <h1 className='bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-9xl font-extrabold uppercase text-transparent'>
        Intecho 2024
      </h1>

      {/* <div className='relative h-2 w-[20rem] md:w-[40rem] lg:w-[80rem]'>
        <div className='absolute left-1/2 top-1/2 h-[2px] w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm' />
        <div className='absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
        <div className='absolute left-1/2 top-1/2 h-[5px] w-1/4 -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm' />
        <div className='absolute left-1/2 top-1/2 h-px w-1/4 -translate-x-1/2 -translate-y-1/2   transform bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
      </div> */}
    </div>
  );
}

const Hero = () => {
  return (
    <div className='pattern h-screen max-h-[50rem] bg-slate-900'>
      <div className='container mx-auto px-6'>
        <nav className='flex flex-row items-center justify-between py-6'>
          <Image
            className='h-16 w-auto sm:h-24'
            src='/annauniv.png'
            alt='annauniv'
            width={100}
            height={100}
          />
          <Image
            className='h-16 w-auto sm:h-24'
            src='/iea.png'
            alt='iea'
            width={100}
            height={100}
          />
          <Image
            className='h-16 w-auto sm:h-24'
            src='/mit75.png'
            alt='mit75'
            width={100}
            height={100}
          />
        </nav>

        <section className='relative h-screen max-h-[50rem] bg-gradient-to-b from-gray-800/10 via-transparent to-transparent'>
          <div className='relative z-10'>
            <div className='absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
              <svg
                className='h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='e9033f3e-f665-41a6-84ef-756f6778e6fe'
                    width='200'
                    height='200'
                    x='50%'
                    y='50%'
                    patternUnits='userSpaceOnUse'
                    patternTransform='translate(-100 0)'
                  >
                    <path d='M.5 200V.5H200' fill='none'></path>
                  </pattern>
                </defs>
                <svg
                  x='50%'
                  y='50%'
                  className='overflow-visible fill-slate-900'
                >
                  <path
                    d='M-300 0h201v201h-201Z M300 200h201v201h-201Z'
                    strokeWidth='0'
                  ></path>
                </svg>
                <rect
                  width='100%'
                  height='100%'
                  strokeWidth='0'
                  fill='url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)'
                ></rect>
              </svg>
            </div>
          </div>
          <div className='relative z-20 mx-auto flex w-full flex-col items-center justify-center space-y-5 px-4 py-12 text-center md:px-8'>
            {/* <CountDown /> */}

            <HeroText />

            <div className='mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center p-4'>
              <h1 className='relative z-10 bg-gradient-to-b from-neutral-200 to-white bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-3xl lg:text-5xl'>
                National Level Technical Symposium
              </h1>
              <p className='mx-auto my-2 mt-4 max-w-lg text-center text-xs font-normal text-neutral-400 md:text-xl'>
                by Department of Instrumentation Engineering
                <br />
                Anna Univeristy
              </p>
            </div>
            <span className='z-30 mx-auto inline-flex w-fit items-center justify-center gap-x-3 rounded-full border border-transparent bg-neutral-300 bg-gradient-to-tl from-blue-600 to-violet-600 px-2 py-1 text-center text-base font-medium text-white shadow-lg shadow-transparent hover:shadow-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-800 md:px-6 md:py-3 md:text-xl'>
              16 & 17 March 2024
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
