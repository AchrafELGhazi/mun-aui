import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BoardMembers = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

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

  const members = [
    {
      name: 'Nour Laghzal',
      position: 'President',
      image: '/pr.JPG',
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
    <section
      ref={ref}
      className='py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10'
    >
      <div className='container mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 sm:mb-16'
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-800 mb-4'>
            Our Board Members
          </h2>
          <div className='w-20 sm:w-24 h-1 bg-green-500 mx-auto mb-4 sm:mb-6'></div>
          <p className='text-base sm:text-lg text-gray-600 max-w-5xl mx-auto px-4 sm:px-0'>
            Meet the dedicated individuals who lead our organization with
            passion and expertise. Our board members bring diverse skills and
            experiences to guide MUN AUI towards excellence.
          </p>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              className='relative group flex flex-col h-full'
              variants={itemVariants}
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
                <motion.p
                  className='text-gray-600 italic text-xs sm:text-sm text-center mt-auto'
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  "{member.quote}"
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='mt-12 sm:mt-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className='text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 px-4 sm:px-0'>
            Interested in joining our team? We're always looking for passionate
            individuals!
          </p>
          <a
            href='/join'
            className='inline-block bg-[#1a5632] text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base'
          >
            Join MUN AUI
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BoardMembers;
