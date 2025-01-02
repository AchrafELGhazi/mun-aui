import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  // const scrollToSection = sectionId => {
  //   if (location.pathname !== '/') {
  //     navigate('/', { state: { scrollTo: sectionId } });
  //     return;
  //   }

  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };


  return (
    <motion.footer
      ref={ref}
      className='bg-gradient-to-br from-white to-green-50 backdrop-blur-lg pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#1a5632] to-transparent' />
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b-2 border-green-500 inline-block'>
              About MUN AUI
            </h3>
            <p className='text-gray-600 mb-4'>
              Model United Nations at Al Akhawayn University fosters global
              awareness, critical thinking, and leadership through engaging UN
              simulations.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b-2 border-green-500 inline-block'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {[
                { name: 'Home', path: '/' },
                { name: 'Apply', path: '/Apply' },
                { name: 'Join', path: '/Join' },
              ].map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className='text-gray-600 hover:text-green-700 transition-colors duration-300'
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b-2 border-green-500 inline-block'>
              Contact Us
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='mailto:modelun@aui.ma'
                  className='text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center'
                >
                  <FaEnvelope className='mr-2' />
                  modelun@aui.ma
                </a>
              </li>
              <li>
                <a
                  href='tel:+212535586000'
                  className='text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center'
                >
                  <FaPhone className='mr-2' />
                  +212 5355-86000
                </a>
              </li>
              <li>
                <a
                  href='https://goo.gl/maps/AUIcampus'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center'
                >
                  <FaMapMarkerAlt className='mr-2' />
                  Al Akhawayn University, Ifrane
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className='text-lg font-semibold text-green-700 mb-4 pb-2 border-b-2 border-green-500 inline-block'>
              Connect With Us
            </h3>
            <div className='flex space-x-4'>
              {[
                {
                  icon: FaFacebookF,
                  href: 'https://facebook.com/munaui',
                  label: 'Facebook',
                },
                {
                  icon: FaTwitter,
                  href: 'https://twitter.com/munaui',
                  label: 'Twitter',
                },
                {
                  icon: FaInstagram,
                  href: 'https://instagram.com/munaui',
                  label: 'Instagram',
                },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 hover:text-green-700'
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className='mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm'
          variants={itemVariants}
        >
          © {new Date().getFullYear()} MUN AUI. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
