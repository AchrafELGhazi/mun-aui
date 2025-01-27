import React from 'react';

const BoardHeads = () => {
  const heads = [
    {
      name: 'Chama Benchouikh',
      position: 'Student Advisor',
      image: '/CHAMA.jpg',
    },
    {
      name: 'Aya Abou El Houda',
      position: 'Co-head of organization',
      image: '/abou.jpg',
    },
    {
      name: 'Inasse Bellahrach',
      position: 'Co-head of organization',
      image: '/ins.jpg',
    },
    {
      name: 'Hafsa Omari Alaoui',
      position: 'Chief of Staff',
      image: '/hafsa.jpg',
    },
    {
      name: 'Kawtar Choutine',
      position: 'Head of sponsoring',
      image: '/kawtar.jpg',
    },
    {
      name: 'Naila Boussouf',
      position: 'Co-head of social media',
      image: '/naila.jpg',
    },
    {
      name: 'Hajar El Yahyaoui',
      position: 'Co-head of social media',
      image: '/hajar.jpg',
    },
    {
      name: 'Hiba Lazhar',
      position: 'Head of Training',
      image: '/hiba.jpg',
    },
    {
      name: 'Achraf El Ghazi',
      position: 'Software Developer',
      image: '/achraf.jpg',
    },
  ];

  return (
    <div className='mt-20 w-full'>
      <div className='text-center mb-12 sm:mb-16'>
        <h3 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4'>
          Our Heads
        </h3>
        <div className='w-20 sm:w-24 h-1 bg-green-500 mx-auto mb-4 sm:mb-6'></div>
        <p className='text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0'>
          Meet our dedicated team of heads who work tirelessly to ensure the
          success of our organization. Their expertise and commitment drive our
          initiatives forward.
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center w-full'>
        {heads.map(head => (
          <div
            key={head.name}
            className='flex flex-col items-center w-full max-w-[140px]'
          >
            <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 border-2 border-green-500'>
              <img
                src={head.image || '/placeholder.svg'}
                alt={head.name}
                className='w-full h-full object-cover'
              />
            </div>
            <h4 className='text-sm sm:text-base font-semibold text-gray-800 text-center line-clamp-2 mb-1'>
              {head.name}
            </h4>
            <p className='text-xs sm:text-sm text-green-600 text-center line-clamp-2'>
              {head.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardHeads;
