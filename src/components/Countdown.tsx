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
    <div className='flex items-center justify-center text-white'>
      <div className='m-2 sm:m-5'>
        <span className='flex justify-center text-xl font-bold text-blue-600 sm:text-5xl'>
          {days}
        </span>
        <p className='flex w-full justify-center'>Days</p>
      </div>
      <div className='m-2 sm:m-5'>
        <span className='flex justify-center text-xl font-bold text-blue-600 sm:text-5xl'>
          {hours}
        </span>
        <p className='flex w-full justify-center'>Hours</p>
      </div>
      <div className='m-2 sm:m-5'>
        <span className='flex justify-center text-xl font-bold text-blue-600 sm:text-5xl'>
          {minutes}
        </span>
        <p className='flex w-full justify-center'>Mins</p>
      </div>
      <div className='m-2 sm:m-5'>
        <span className='flex justify-center text-xl font-bold text-blue-600 sm:text-5xl'>
          {seconds}
        </span>
        <p className='flex w-full justify-center'>Secs</p>
      </div>
    </div>
  );
};

export default Countdown;
