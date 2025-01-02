import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaChalkboardTeacher,
  FaUniversity,
} from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { icon: FaUsers, value: '500+', label: 'Participants' },
    { icon: FaGlobe, value: '50+', label: 'Countries' },
    { icon: FaHandshake, value: '20+', label: 'Partners' },
  ];

  const features = [
    {
      icon: FaLightbulb,
      title: 'Innovative Learning',
      description: 'Experience cutting-edge educational methodologies',
    },
    {
      icon: FaChalkboardTeacher,
      title: 'Expert Guidance',
      description: 'Learn from experienced diplomats and educators',
    },
    {
      icon: FaUniversity,
      title: 'Global Network',
      description: 'Connect with students from around the world',
    },
  ];

  

  return (
    <section className='py-20 -mt-24 -lg:mt-24 -sm:mt-24 sm:py-32 mx-3 lg:mx-10'>
      <div className='bg-white  rounded-3xl shadow-[0_0_50px_0_rgba(0,0,0,0.1)] p-8 sm:p-12'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20'>
            <div className='w-full lg:w-1/2 z-10 text-center lg:text-left'>
              {/* Added text-center lg:text-left */}
              <h2 className='text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight'>
                Shaping Global Leaders at{' '}
                <span className='text-green-700'>AUI MUN</span>
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed mx-auto lg:mx-0'>
                {/* Added mx-auto lg:mx-0 */}
                AUI Model United Nations is more than a simulation—it's a
                transformative journey into global diplomacy and leadership.
              </p>
              <div className='flex justify-center lg:justify-start'>
                {/* Added wrapper div with flex and justify classes */}
                <Link
                  to='/AboutPage'
                  className='inline-block px-6 py-3 bg-green-700 text-white rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:bg-green-800 transition-all duration-300 transform hover:scale-105 relative z-20'
                >
                  Discover Our Mission
                </Link>
              </div>
            </div>
            <div className='w-full lg:w-1/2 relative mt-10 lg:mt-0'>
              <div className='absolute inset-0 bg-green-200 rounded-3xl transform rotate-3 scale-105'></div>
              <img
                src='/2.jpg'
                alt='MUN AUI participants in action'
                className='rounded-3xl shadow-2xl relative z-10 w-full h-auto transform -rotate-3 transition-transform duration-300 hover:rotate-0'
              />
            </div>
          </div>

          <div className='mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105'
              >
                <stat.icon className='text-5xl text-green-600 mb-4' />
                <span className='text-3xl font-bold text-gray-800 mb-2'>
                  {stat.value}
                </span>
                <span className='text-lg text-gray-600'>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className='mt-24'>
            <h3 className='text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8'>
              Why Choose AUI MUN?
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105'
                >
                  <feature.icon className='text-4xl text-green-700 mb-4' />
                  <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                    {feature.title}
                  </h4>
                  <p className='text-gray-600'>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
