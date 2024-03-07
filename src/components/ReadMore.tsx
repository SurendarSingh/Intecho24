'use client';

import React, { useState } from 'react';

const ReadMore = ({ content }: { content: string }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p className='py-2 text-gray-700'>
        {isTruncated ? content.substring(0, 100) : content}

        {content.length > 100 && (
          <button onClick={toggleIsTruncated} className='text-blue-500'>
            {isTruncated ? '...Read More' : ' Read Less'}
          </button>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
