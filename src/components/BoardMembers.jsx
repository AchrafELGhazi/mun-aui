import React from 'react';

const BoardMembers = () => {
  const members = [
    {
      name: 'Nour Laghzal',
      position: 'President',
      image: '/pr.jpg',
      quote: 'Leading with vision and purpose.',
    },
    {
      name: 'Yasmine Abendag',
      position: 'Vice President',
      image: '/vp.jpg',
      quote: 'Bridging ideas and actions for a better tomorrow.',
    },
    {
      name: 'Meryem Bourichi',
      position: 'Secretary General',
      image: '/gs.jpg',
      quote: 'Organizing our path to global understanding.',
    },
    {
      name: 'Youssef El Fadil',
      position: 'Treasurer',
      image: '/tr.jpg',
      quote: 'Managing resources for maximum impact.',
    },
  ];

  return (
    <section className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10'>
      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
            Our Board Members
          </h2>
          <div className='w-20 sm:w-24 h-1 bg-green-500 mx-auto mb-4 sm:mb-6'></div>
          <p className='text-base sm:text-lg text-gray-600 max-w-5xl mx-auto px-4 sm:px-0'>
            Meet the dedicated individuals who lead our organization with
            passion and expertise. Our board members bring diverse skills and
            experiences to guide MUN AUI towards excellence.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {members.map(member => (
            <div
              key={member.name}
              className='relative group flex flex-col h-full'
            >
              <div className='absolute inset-0 bg-green-100 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2'></div>
              <div className='relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg transform transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 flex flex-col h-full'>
                <div className='relative mb-4 sm:mb-6 overflow-hidden rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-br from-green-500/80 to-green-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2 text-center'>
                  {member.name}
                </h3>
                <p className='text-green-600 font-medium mb-2 sm:mb-4 text-center text-sm sm:text-base'>
                  {member.position}
                </p>
                <p className='text-gray-600 italic text-xs sm:text-sm text-center mt-auto'>
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 sm:mt-16 text-center'>
          <p className='text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 px-4 sm:px-0'>
            Interested in joining our team? We're always looking for passionate
            individuals!
          </p>
          <a
            href='/Join'
            className='inline-block bg-[#1a5632] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base'
          >
            Join MUN AUI
          </a>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
