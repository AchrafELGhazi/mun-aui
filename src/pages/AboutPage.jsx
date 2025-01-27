import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaHandshake,
  FaGlobe,
  FaChalkboardTeacher,
  FaUsers,
} from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className='min-h-screen mx-0 lg:mx-10 md:mx-10 sm:mx-0 mt-0 sm:mt-20 lg:mt-16 bg-gradient-to-br  py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <Link
          to='/'
          onClick={() => window.scrollTo(0, 0)}
          className='group inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300 mb-8'
        >
          <FaArrowLeft className='transition-transform group-hover:-translate-x-1' />
          <span className='font-medium'>Back to Home</span> 
        </Link>

        <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-8'>
          Empowering Future Global Leaders
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
          <img
            src='/aa.jpg'
            alt='MUN Conference'
            className='rounded-2xl shadow-xl w-full h-64 object-cover'
          />
          <img
            src='/bb.jpg'
            alt='Delegates in session'
            className='rounded-2xl shadow-xl w-full h-64 object-cover'
          />
        </div>

        <div className='prose prose-lg max-w-none mb-12'>
          <p>
            At AUI Model United Nations, we believe in the power of youth to
            shape the future of global diplomacy. Our program is designed to
            cultivate critical thinking, enhance public speaking skills, and
            foster a deep understanding of international relations.
          </p>

          <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4'>
            Our Program Offers:
          </h2>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <FaHandshake className='text-green-600 mr-3 text-xl' />
              <span>Hands-on experience in diplomacy and negotiation</span>
            </li>
            <li className='flex items-center'>
              <FaGlobe className='text-green-600 mr-3 text-xl' />
              <span>Exposure to diverse global perspectives</span>
            </li>
            <li className='flex items-center'>
              <FaChalkboardTeacher className='text-green-600 mr-3 text-xl' />
              <span>
                Opportunities to develop public speaking and research skills
              </span>
            </li>
            <li className='flex items-center'>
              <FaUsers className='text-green-600 mr-3 text-xl' />
              <span>Networking with students from around the world</span>
            </li>
          </ul>

          <p className='mt-8'>
            Join us in our mission to cultivate a deeper understanding of
            international relations and empower the next generation of global
            leaders. At AUI MUN, we're not just simulating the United Nations;
            we're building the foundation for a more connected and cooperative
            world.
          </p>
        </div>

        <div className='text-center'>
          <Link
            to='/Join'
            onClick={() => window.scrollTo(0, 0)}
            className='inline-block px-7 py-3 bg-green-700 text-white rounded-full font-semibold text-md transition-all duration-300 hover:bg-green-700 hover:scale-105 shadow-lg'
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
