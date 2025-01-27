import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // const [scrolled, setScrolled] = useState(false);

  const scrollToSection = sectionId => {

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='min-h-screen relative flex items-center overflow-hidden px-4 py-8 sm:mt-20 md:mt-24 lg:mt-0'>
      <div className='container mx-auto max-w-7xl relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
          {/* Left Content */}
          <div
            className='w-full lg:w-3/5 text-center lg:text-left' // Added text-center for mobile, left-aligned for desktop
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-5xl sm:text-4xl md:text-5xl text-[#1a5632] font-bold mb-2'>
              Welcome to,
            </h1>

            <div className='text-xl sm:text-2xl md:text-3xl text-gray-800 font-medium mb-4 sm:mb-6 typewriter-text'>
              <Typewriter
                options={{
                  strings: ['Al Akhawayn University Model United Nations'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                  pauseFor: 2000,
                  cursorClassName: 'text-green-700',
                }}
              />
            </div>

            <p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-2xl'>
              Founded in 2012, <strong>AUIMUN</strong> (Al Akhawayn University
              Model United Nations) is proud to be the first MUN in Morocco and
              a trailblazer in fostering diplomatic excellence. Over the years,
              it has grown into one of the largest and most prestigious MUN
              conferences in the country, bringing together passionate delegates
              to debate global issues, develop leadership skills, and build
              lasting connections. Join us in shaping the leaders of tomorrow!
            </p>

            <div className='flex flex-row gap-2 justify-center lg:justify-start'>
              <button
                onClick={() => scrollToSection('about')}
                className='px-4 sm:px-6 py-3 sm:py-3 rounded-full font-semibold text-white 
      text-base sm:text-lg bg-gradient-to-r from-green-600 to-green-700 
      hover:from-green-700 hover:to-green-800 transition-all duration-300 
      transform hover:scale-105 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Mission
              </button>

              <Link
                to='/auimun-12th-edition'
                onClick={() => window.scrollTo(0, 0)}
                className='px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-green-700 
      text-base sm:text-lg border-2 border-green-700 hover:bg-green-50 
      transition-all duration-300 transform hover:scale-105 text-center'
              >
                AUIMUN 12th edition conference
              </Link>
            </div>
          </div>

          <div
            className='w-full lg:w-2/5 mt-8 lg:mt-0 px-4 sm:px-8 lg:px-0'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto'>
              <img
                src='/11.jpg'
                alt='MUN Conference'
                className='w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
