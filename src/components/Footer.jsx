import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiThreads } from 'react-icons/si';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/AUIMUN/',
      label: 'Facebook',
    },
    {
      icon: SiThreads,
      href: 'https://www.threads.net/@aui_mun',
      label: 'Threads',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/aui_mun/',
      label: 'Instagram',
    },
    {
      icon: FaLinkedinIn,
      href: 'https://www.linkedin.com/company/auimun/posts/?feedView=all',
      label: 'LinkedIn',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apply', path: '/Apply' },
    { name: 'Join', path: '/Join' },
  ];

  return (
    <motion.footer
      ref={ref}
      className='bg-gradient-to-b from-white to-green-50 pt-12 pb-6 px-4 sm:px-6 lg:px-8'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-wrap justify-between items-start gap-8'>
          {/* Logo and Description */}
          <div className='w-full md:w-auto max-w-xs'>
            <img src='/mun1.png' alt='MUN AUI Logo' className='h-16 mb-4' />
            <p className='text-sm text-gray-600'>
              Fostering global awareness, critical thinking, and leadership
              through engaging UN simulations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-green-700 mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {quickLinks.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className='text-sm text-gray-600 hover:text-green-700 transition-colors duration-300'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-green-700 mb-4'>
              Contact Us
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='mailto:modelun@aui.ma'
                  className='text-sm text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center'
                >
                  <FaEnvelope className='mr-2' />
                  modelun@aui.ma
                </a>
              </li>
              <li>
                <a
                  href='https://goo.gl/maps/AUIcampus'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-gray-600 hover:text-green-700 transition-colors duration-300 flex items-center'
                >
                  <FaMapMarkerAlt className='mr-2' />
                  Al Akhawayn University, Ifrane
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold text-green-700 mb-4'>
              Connect With Us
            </h3>
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:text-green-700 hover:scale-110'
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm'>
          © {new Date().getFullYear()} MUN AUI. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;