'use client';

import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  let countDownDate = 1710556200000;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [countDownDate]);

  return (
    <div className='flex w-full items-center justify-center text-center text-4xl md:text-6xl'>
      <div className='mx-1 w-24 rounded-lg bg-gray-500/10 p-2 text-gray-300'>
        <div className='font-mono leading-none' x-text='days'>
          {days}
        </div>
        <div className='font-mono text-sm uppercase leading-none'>Days</div>
      </div>
      <div className='mx-1 w-24 rounded-lg bg-gray-500/10 p-2 text-gray-300'>
        <div className='font-mono leading-none' x-text='hours'>
          {hours}
        </div>
        <div className='font-mono text-sm uppercase leading-none'>Hours</div>
      </div>
      <div className='mx-1 w-24 rounded-lg bg-gray-500/10 p-2 text-gray-300'>
        <div className='font-mono leading-none' x-text='minutes'>
          {minutes}
        </div>
        <div className='font-mono text-sm uppercase leading-none'>Minutes</div>
      </div>
      <div className='mx-1 w-24 rounded-lg bg-gray-500/10 p-2 text-gray-300'>
        <div className='font-mono leading-none' x-text='seconds'>
          {seconds}
        </div>
        <div className='font-mono text-sm uppercase leading-none'>Seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
