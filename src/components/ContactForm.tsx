'use client';

import React from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [response, setResponse] = React.useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    formData.append('access_key', 'cdeeb002-da92-48e3-b1c6-858c90ef6dfc');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      setResponse('We have received your message!');
      e.target.reset();
    } else {
      setResponse('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={onSubmit} className='mt-6'>
      <div className='flex-1'>
        <label className='mb-2 block text-sm text-gray-600'>Name</label>
        <input
          type='text'
          name='Name'
          required
          placeholder='Your name'
          className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40'
        />
      </div>

      <div className='mt-6 flex-1'>
        <label className='mb-2 block text-sm text-gray-600'>
          Email address
        </label>
        <input
          type='email'
          name='Email'
          required
          placeholder='name@gmail.com'
          className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40'
        />
      </div>

      <div className='mt-6 w-full'>
        <label className='mb-2 block text-sm text-gray-600'>Message</label>
        <textarea
          rows={3}
          className='mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40'
          name='Message'
          required
          placeholder='Enter Message'
        ></textarea>
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className='mt-6 w-full transform rounded-md bg-blue-700 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 disabled:bg-blue-500'
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </button>
      {response && (
        <p className='mt-4 text-center text-sm text-gray-400'>{response}</p>
      )}
    </form>
  );
};

export default ContactForm;
