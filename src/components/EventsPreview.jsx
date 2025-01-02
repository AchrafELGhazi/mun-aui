import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

const EventsPreview = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: 'Annual Conference',
      description:
        'Our flagship event bringing together delegates from around the world.',
      image: '/3.jpg',
      color: 'from-blue-400 to-blue-600',
      date: 'October 15-17, 2023',
      location: 'Al Akhawayn University, Ifrane',
      participants: '500+',
    },
    {
      id: 2,
      name: 'Workshop Series',
      description:
        'Skill-building workshops on diplomacy, public speaking, and negotiation.',
      image: '/4.jpg',
      color: 'from-green-400 to-green-600',
      date: 'Every Saturday, Sept-Nov 2023',
      location: 'Online & On-campus',
      participants: '100 per workshop',
    },
    {
      id: 3,
      name: 'Mock Debates',
      description:
        'Practice sessions to hone your debating skills on current global issues.',
      image: '/5.jpg',
      color: 'from-yellow-400 to-yellow-600',
      date: 'Monthly, 2023',
      location: 'AUI Auditorium',
      participants: '50-100 per session',
    },
    {
      id: 4,
      name: 'Guest Speaker Series',
      description:
        'Insightful talks by diplomats, policymakers, and international experts.',
      image: '/6.jpg',
      color: 'from-purple-400 to-purple-600',
      date: 'Quarterly, 2023',
      location: 'Various venues',
      participants: '200-300 per event',
    },
  ];

  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 -mt-16 -mb-24 overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-4'>
            Our Events
          </h2>
          <div className='w-24 h-1 bg-green-500 rounded-full mb-6' />
          <p className='text-center text-gray-600 max-w-2xl mb-7'>
            Join us for a variety of engaging events designed to enhance your
            understanding of global diplomacy and international relations.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {events.map(event => (
            <div
              key={event.id}
              className='relative group'
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${event.color} transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2`}
              />
              <div className='relative bg-white rounded-2xl p-6 shadow-xl transform transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 flex flex-col h-full'>
                <img
                  src={event.image}
                  alt={event.name}
                  className='w-full h-48 object-cover rounded-xl mb-4'
                />
                <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                  {event.name}
                </h3>
                <p className='text-gray-600 mb-4 flex-grow'>
                  {event.description}
                </p>
                <div className='space-y-2 mb-4'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <FaCalendarAlt className='mr-2' />
                    {event.date}
                  </div>
                  <div className='flex items-center text-sm text-gray-500'>
                    <FaMapMarkerAlt className='mr-2' />
                    {event.location}
                  </div>
                  <div className='flex items-center text-sm text-gray-500'>
                    <FaUsers className='mr-2' />
                    {event.participants} participants
                  </div>
                </div>
                <Link
                  to='/events'
                  className='inline-block px-4 py-2 bg-[#1a5632] text-white rounded-full font-semibold text-sm transition-colors duration-300 hover:bg-green-600 text-center'
                >
                  Learn More
                </Link>
              </div>
              {hoveredEvent === event.id && (
                <div className='absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center'>
                  <div className='text-white text-2xl font-bold'>
                    Explore Event
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='text-center mt-12'></div>
      </div>
    </section>
  );
};

export default EventsPreview;
