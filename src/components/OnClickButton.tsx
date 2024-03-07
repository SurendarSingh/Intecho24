'use client';

import React from 'react';

const OnClickButton = ({ link }: { link: string }) => {
  return (
    <button
      onClick={() => {
        window.open(link, '_blank');
      }}
      className='mt-2 flex w-full items-center justify-center gap-x-3 rounded-lg border border-transparent bg-black px-8 py-1.5 text-sm text-white transition-colors duration-300 hover:bg-black/80 sm:text-base'
    >
      <span>Register Now</span>
    </button>
  );
};

export default OnClickButton;
