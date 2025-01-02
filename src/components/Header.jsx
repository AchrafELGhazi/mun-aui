import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = sectionId => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(`#${sectionId}`);
      closeMenu();
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setActiveLink('/');
    closeMenu();
  };

  const navItems = [
    { name: 'Home', path: '/', action: handleHomeClick },
    {
      name: 'Events',
      path: '#events',
      action: () => scrollToSection('events'),
    },
    {
      name: 'Board Members',
      path: '#board-members',
      action: () => scrollToSection('board-members'),
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-out z-50 
      ${
        scrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          : 'bg-gray-50 backdrop-blur-sm'
      }
      md:top-8 md:left-1/2 md:-translate-x-1/2 md:w-[96%] md:max-w-7xl md:rounded-3xl md:border md:border-white`}
    >
      <div className='px-4 py-3'>
        <div className='flex items-center justify-between md:gap-6'>
          {/* Logo - Left Edge */}
          <div className='flex-shrink-0'>
            <Link to='/' onClick={handleHomeClick}>
              <img
                src='/mun1.png'
                alt='MUN AUI Logo'
                className='h-8 w-auto transition-all duration-300 md:h-12 md:ml-1'
              />
            </Link>
          </div>

          {/* Hamburger Menu - Mobile */}
          <button
            className='md:hidden text-gray-600 focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>

          {/* Main Navigation - Desktop */}
          <div className='hidden md:flex justify-center flex-grow'>
            <nav className='flex items-center'>
              <div className='flex gap-1.5 bg-black/5 p-1.5 rounded-2xl'>
                {navItems.map(item => (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className={`px-5 py-2.5 rounded-xl transition-all duration-300 relative
                      font-medium text-sm whitespace-nowrap
                      ${
                        activeLink === item.path
                          ? 'text-white bg-black shadow-md'
                          : 'text-gray-600 hover:text-black hover:bg-black/5'
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Action Items - Desktop */}
          <div className='hidden md:flex gap-3 flex-shrink-0 mr-2'>
            <Link
              to='/apply'
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap
                bg-black text-white hover:bg-black/90
                transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
            >
              Apply
            </Link>
            <Link
              to='/join'
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap
                bg-black/10 hover:bg-black/15
                transition-all duration-300 hover:scale-105
                ${scrolled ? 'shadow-sm' : ''}`}
            >
              Join
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-white z-50 md:hidden'>
          <div className='flex flex-col h-full'>
            <div className='flex justify-between items-center p-4 border-b'>
              <Link to='/' onClick={closeMenu}>
                <img
                  src='/mun1.png'
                  alt='MUN AUI Logo'
                  className='h-8 w-auto'
                />
              </Link>
              <button
                className='text-gray-600 focus:outline-none'
                onClick={closeMenu}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <nav className='flex-grow bg-white'>
              <ul className='flex flex-col p-4'>
                {navItems.map(item => (
                  <li key={item.name} className='mb-4'>
                    <button
                      onClick={() => {
                        item.action();
                        closeMenu();
                      }}
                      className={`block w-full px-4 py-2 rounded-xl transition-all duration-300
                        font-medium text-lg text-left
                        ${
                          activeLink === item.path
                            ? 'text-white bg-black'
                            : 'text-gray-600 hover:text-black hover:bg-black/5'
                        }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='bg-white p-4 border-t'>
              <Link
                to='/apply'
                onClick={() => {
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className='block w-full px-5 py-2.5 rounded-xl font-medium text-lg text-center
                  bg-black text-white hover:bg-black/90
                  transition-all duration-300 mb-4'
              >
                Apply
              </Link>
              <Link
                to='/join'
                onClick={() => {
                  closeMenu();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className='block w-full px-5 py-2.5 rounded-xl font-medium text-lg text-center
                  bg-black/10 hover:bg-black/15
                  transition-all duration-300'
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
