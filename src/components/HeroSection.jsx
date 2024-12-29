import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setWindowWidth(window.innerWidth);
      }
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();

    const getParticleCount = () => {
      if (windowWidth < 640) return 150; // For small screens
      if (windowWidth < 1024) return 250; // For medium screens
      return 300; // For large screens
    };

    const createParticles = () => {
      particles = [];
      const particleCount = getParticleCount();
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    createParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(104, 104, 100, 0.1)';
        ctx.fill();
      });

      const maxDistance =
        windowWidth < 640 ? 120 : windowWidth < 1024 ? 220 : 220;

      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(0, 0, 0, ${
              0.06 * (1 - distance / maxDistance)
            })`;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [windowWidth]);

  return (
    <section className='min-h-screen relative flex items-center overflow-hidden px-4 py-8 sm:mt-20 md:mt-24 lg:mt-0'>
      <canvas
        ref={canvasRef}
        className='fixed top-0 left-0 w-full h-full z-0'
      />

      <div className='container mx-auto max-w-7xl relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
          {/* Left Content */}
          <motion.div
            className='w-full lg:w-3/5'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className='text-3xl sm:text-4xl md:text-5xl text-[#1a5632] font-bold mb-2'>
              Welcome to,
            </motion.h1>

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

            <motion.p className='text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl'>
              At <strong>AUMMUN</strong>, we foster a deep understanding of
              global issues and diplomacy. As a student-led organization, we
              provide enriching experiences simulating United Nations
              operations, enabling participants to engage in international
              discussions, debates, and decision-making.
            </motion.p>

            <motion.button
              className='px-4 sm:px-4 py-2 sm:py-2 rounded-xl font-semibold text-white text-base sm:text-lg
                bg-gradient-to-r from-[#1a5632] to-[#43aa6c] hover:from-[#43aa6c] hover:to-[#1a5632]
                transition-all duration-300 hover:scale-105 hover:shadow-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our mission
            </motion.button>

            <motion.div className='mt-4 sm:mt-6 text-green-700 cursor-pointer hover:underline text-sm sm:text-base'>
              → Register for our next event
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className='w-full lg:w-2/5 mt-8 lg:mt-0'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='rounded-2xl overflow-hidden shadow-xl'>
              <img
                src='/1.JPG'
                alt='MUN Conference'
                className='w-full h-auto object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .typewriter-text strong {
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
