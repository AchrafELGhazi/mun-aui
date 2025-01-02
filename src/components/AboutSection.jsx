import React from 'react';

const AboutSection = () => {
  return (
    <section className='py-8 sm:py-12 md:py-16 bg-gray-50 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl mx-4 sm:mx-8 md:mx-14 overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border border-white/30'>
      <div className='container mx-auto px-4 sm:px-6 md:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
          <div className='w-full md:w-1/2'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-4 sm:mb-6 relative'>
              About AUI Model United Nations
              <span className='absolute -bottom-2 left-0 w-16 sm:w-20 h-1 bg-green-700'></span>
            </h2>
            <p className='text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed'>
              AUI MUN is a dynamic student-run organization dedicated to
              fostering global awareness, critical thinking, and leadership
              among students. Through engaging simulations of the United
              Nations, we provide participants with the opportunity to debate
              pressing international issues, develop diplomatic skills, and
              collaborate on innovative solutions.
            </p>
            <button className='px-4 sm:px-6 py-2 sm:py-3 bg-[#1a5632] text-white rounded-full font-semibold text-base sm:text-lg shadow-md sm:shadow-lg hover:bg-green-600 transition-all duration-300'>
              Learn More
            </button>
          </div>
          <div className='w-full md:w-1/2 relative mt-8 md:mt-0'>
            <div className='absolute inset-0 bg-green-200 rounded-lg sm:rounded-xl md:rounded-2xl transform rotate-3'></div>
            <img
              src='/2.jpg'
              alt='MUN AUI participants in action'
              className='rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl relative z-10 transform -rotate-3 transition-transform duration-300 hover:rotate-0 w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
