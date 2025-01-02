import React, { useState, useEffect } from 'react';
import { FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';

const CustomModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'>
      <div className='bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6'>
          <div className='flex justify-end'>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700'
            >
              ✕
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { icon: FaUsers, value: '500+', label: 'Participants' },
    { icon: FaGlobe, value: '50+', label: 'Countries' },
    { icon: FaHandshake, value: '20+', label: 'Partners' },
  ];

  return (
    <section className='py-16 sm:py-24 bg-white overflow-hidden mx-4 lg:mx-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
          <div className='w-full lg:w-1/2 z-10'>
            <h2 className='text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6'>
              About AUI Model United Nations
            </h2>
            <p className='text-lg sm:text-lg text-gray-600 mb-8 leading-relaxed'>
              AUI MUN is a dynamic student-run organization dedicated to
              fostering global awareness, critical thinking, and leadership
              among students. Through engaging simulations of the United
              Nations, we provide participants with the opportunity to debate
              pressing international issues, develop diplomatic skills, and
              collaborate on innovative solutions.
            </p>
            <button
              className='px-6 py-2 sm:py-3 bg-green-700 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-green-900 transition-colors duration-300 relative z-20'
              onClick={() => setIsModalOpen(true)}
            >
              Learn More
            </button>
          </div>
          <div className='w-full lg:w-1/2 relative mt-8 lg:mt-0'>
            <div className='absolute inset-0 bg-green-200 rounded-2xl sm:rounded-3xl transform rotate-3'></div>
            <img
              src='/2.jpg'
              alt='MUN AUI participants in action'
              className='rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl relative z-10 w-full h-auto'
            />
          </div>
        </div>

        <div className='mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg'
            >
              <stat.icon className='text-4xl text-green-600 mb-4' />
              <span className='text-3xl font-bold text-gray-800'>
                {stat.value}
              </span>
              <span className='text-lg text-gray-600'>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
          More About AUI MUN
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <img
            src='/mun1.jpg'
            alt='MUN Conference'
            className='rounded-lg shadow-md w-full'
          />
          <img
            src='/mun2.jpg'
            alt='Delegates in session'
            className='rounded-lg shadow-md w-full'
          />
        </div>
        <p className='text-gray-600 mb-4'>
          AUI Model United Nations is more than just a simulation; it's a
          transformative experience that shapes future leaders and global
          citizens. Our program offers:
        </p>
        <ul className='list-disc list-inside text-gray-600 mb-4'>
          <li>Hands-on experience in diplomacy and negotiation</li>
          <li>Exposure to diverse global perspectives</li>
          <li>Opportunities to develop public speaking and research skills</li>
          <li>Networking with students from around the world</li>
        </ul>
        <p className='text-gray-600'>
          Join us in our mission to cultivate a deeper understanding of
          international relations and empower the next generation of global
          leaders.
        </p>
      </CustomModal>
    </section>
  );
};

export default AboutSection;
