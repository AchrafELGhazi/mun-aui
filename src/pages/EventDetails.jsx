import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowLeft,
} from 'react-icons/fa';
import { events } from '../components/Events';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <div className='mx-0 lg:mx-10 md:mx-10 px-4 mt-4 sm:mt-20 lg:mt-16 py-8 lg:py-16'>
        <Link
          to='/'
          className='group inline-flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors duration-300 mb-8'
        >
          <FaArrowLeft className='transition-transform group-hover:-translate-x-1' />
          <span className='font-medium'>Back to Events</span>
        </Link>

        <div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
          {/* Hero Section */}
          <div className='relative h-[60vh] max-h-[600px]'>
            <img
              src={event.image}
              alt={event.name}
              className='w-full h-full object-cover'
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-70`}
            ></div>
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
            <div className='absolute bottom-0 left-0 right-0 p-8 lg:p-12'>
              <h1 className='text-4xl lg:text-5xl font-bold text-white mb-4'>
                {event.name}
              </h1>
              <p className='text-lg text-white/90 max-w-2xl'>
                {event.description}
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className='p-8 lg:p-12'>
            {/* Event Details Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md'>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-green-100 rounded-xl'>
                    <FaCalendarAlt className='text-2xl text-green-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-1'>Date</p>
                    <p className='text-gray-600'>{event.date}</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md'>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-blue-100 rounded-xl'>
                    <FaMapMarkerAlt className='text-2xl text-blue-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-1'>Location</p>
                    <p className='text-gray-600'>{event.location}</p>
                  </div>
                </div>
              </div>
              <div className='bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-md'>
                <div className='flex items-start space-x-4'>
                  <div className='p-3 bg-purple-100 rounded-xl'>
                    <FaUsers className='text-2xl text-purple-600' />
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900 mb-1'>
                      Participants
                    </p>
                    <p className='text-gray-600'>{event.participants}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <div className='max-w-4xl'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                About the Event
              </h2>
              <p className='text-gray-600 leading-relaxed mb-12'>
                {event.longDescription}
              </p>

              {/* Event Details Sections */}
              <div className='space-y-12'>
                {event.agenda && (
                  <div className='bg-gray-50 rounded-2xl p-8'>
                    <h3 className='text-xl font-bold text-gray-900 mb-6'>
                      Agenda
                    </h3>
                    <ul className='space-y-4'>
                      {event.agenda.map((item, index) => (
                        <li key={index} className='flex items-start space-x-3'>
                          <span className='w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0' />
                          <span className='text-gray-600'>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.speakers && (
                  <div className='bg-gray-50 rounded-2xl p-8'>
                    <h3 className='text-xl font-bold text-gray-900 mb-6'>
                      Featured Speakers
                    </h3>
                    <ul className='space-y-4'>
                      {event.speakers.map((speaker, index) => (
                        <li key={index} className='flex items-start space-x-3'>
                          <span className='w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0' />
                          <span className='text-gray-600'>{speaker}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.topics && (
                  <div className='bg-gray-50 rounded-2xl p-8'>
                    <h3 className='text-xl font-bold text-gray-900 mb-6'>
                      Topics Covered
                    </h3>
                    <ul className='space-y-4'>
                      {event.topics.map((topic, index) => (
                        <li key={index} className='flex items-start space-x-3'>
                          <span className='w-2 h-2 mt-2 rounded-full bg-purple-500 flex-shrink-0' />
                          <span className='text-gray-600'>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
