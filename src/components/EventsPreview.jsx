import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EventsPreview = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredEvent, setHoveredEvent] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const events = [
    {
      id: 1,
      name: 'Annual Conference',
      description:
        'Our flagship event bringing together delegates from around the world ffdf fvf.',
      image: '/3.JPG',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      name: 'Workshop Series',
      description:
        'Skill-building workshops on diplomacy, public speaking, and negotiation.',
      image: '/4.jpg',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 3,
      name: 'Mock Debates',
      description:
        'Practice sessions to hone your debating skills on current global issues.',
      image: '/5.jpg',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      id: 4,
      name: 'Guest Speaker Series',
      description:
        'Insightful talks by diplomats, policymakers, and international experts.',
      image: '/6.jpg',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section ref={ref} className='py-20  text-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-4xl font-bold text-gray-700 text-center mb-16 relative'
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Our Events
          <motion.div
            className='absolute -bottom-2 left-1/4 transform -translate-x-1/2 w-48 sm:w-64 md:w-80 h-1 bg-gradient-to-r from-transparent via-green-700 to-transparent'
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              inView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {events.map(event => (
            <motion.div
              key={event.id}
              className='relative group'
              variants={itemVariants}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${event.color} transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-2`}
              />
              <div className='relative bg-gray-800 rounded-2xl p-6 transform transition-all duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2'>
                <img
                  src={event.image}
                  alt={event.name}
                  className='w-full h-48 object-cover rounded-xl mb-4'
                />
                <h3 className='text-xl font-semibold mb-2'>{event.name}</h3>
                <p className='text-gray-300 mb-4'>{event.description}</p>
                <Link
                  to='/events'
                  className='inline-block px-4 py-2 bg-white text-gray-900 rounded-full font-semibold text-sm transition-colors duration-300 hover:bg-gray-200'
                >
                  Learn More
                </Link>
              </div>
              <AnimatePresence>
                {hoveredEvent === event.id && (
                  <motion.div
                    className='absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className='text-white text-2xl font-bold'
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Explore Event
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsPreview;
