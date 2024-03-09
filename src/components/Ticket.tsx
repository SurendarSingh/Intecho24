import Image from 'next/image';
import React from 'react';

const Ticket = ({
  title,
  code,
  description,
  link,
}: {
  title: string;
  code: string;
  description: string;
  link: string;
}) => {
  return (
    <div className='z-10 mx-auto h-full w-full max-w-sm rounded-3xl bg-blue-900'>
      <div className='flex flex-col'>
        <div className='relative m-3 rounded-3xl bg-white px-4 drop-shadow-2xl'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <span className='mr-3 h-16 w-16 rounded-full bg-white'>
                <Image
                  src='/intecho.png'
                  alt='intecho'
                  width={100}
                  height={100}
                />
              </span>
              <h1 className='text-xl font-bold'>{title}</h1>
            </div>
            <div className='ml-auto text-blue-800'>{code}</div>
          </div>

          <div className='border-b-2 border-dashed'>
            <div className='absolute -left-2 -mt-2 h-5 w-5 rounded-full bg-blue-900'></div>
            <div className='absolute -right-2 -mt-2 h-5 w-5 rounded-full bg-blue-900'></div>
          </div>

          <div className='flex items-center p-5'>
            <div className='flex flex-col text-sm'>
              <span className=''>Date</span>
              <div className='font-semibold'>16 & 17 Mar</div>
            </div>
            <div className='mx-auto flex flex-col text-sm'>
              <span className=''>Time</span>
              <div className='font-semibold'>8:00AM</div>
            </div>
            <div className='flex flex-col text-sm'>
              <span className=''>Loc</span>
              <div className='font-semibold'>MIT</div>
            </div>
          </div>

          <p className='mx-auto px-9 pb-5 text-center text-base font-semibold text-blue-800'>
            {description}
          </p>

          <div className='border-b-2 border-dashed'>
            <div className='absolute -left-2 -mt-2 h-5 w-5 rounded-full bg-blue-900'></div>
            <div className='absolute -right-2 -mt-2 h-5 w-5 rounded-full bg-blue-900'></div>
          </div>

          <div className='flex flex-col items-center justify-center py-5'>
            <a
              href={link}
              target='_blank'
              className='w-full rounded-lg bg-blue-700 py-2 text-center text-white transition duration-300 ease-in-out hover:bg-blue-900'
            >
              Grab Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
