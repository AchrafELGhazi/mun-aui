import React from 'react';
import { Link } from 'react-router-dom';

const AUIMUN12thEdition = () => {
  return (
    <div className='min-h-screen w-full lg:mt-16 flex items-center justify-center p-8'>
      <div className='w-full max-w-6xl mx-auto'>
        <div className='bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg'>
          {/* Logo Badge */}
          <div className='mb-6'>
            <div className='w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center'>
              <span className='text-xl font-bold text-white'>12th</span>
            </div>
          </div>

          {/* Title */}
          <h1 className='text-4xl font-bold text-gray-800 text-center mb-2'>
            AUIMUN
            <span className='block text-lg text-gray-600 mt-1'>
              12th Edition
            </span>
          </h1>

          {/* Coming Soon */}
          <div className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 text-center py-3 mb-6 animate-pulse'>
            Coming Soon
          </div>

          {/* Description */}
          <p className='text-lg text-gray-600 mb-8 max-w-3xl mx-auto text-center'>
            Get ready for an extraordinary conference experience! Join us for
            engaging debates, inspiring speakers, and meaningful connections.
          </p>

          {/* Buttons */}
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              to='/'
              className='px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300'
            >
              Back to Home
            </Link>
            {/* <button
              className='px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AUIMUN12thEdition;
