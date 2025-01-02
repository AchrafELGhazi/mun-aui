import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EventsPreview from '../components/EventsPreview';
import BoardMembers from '../components/BoardMembers';
import AboutSection from '../components/AboutSection';

const Home = () => {
  const location = useLocation();
  const canvasRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Check if we have a scrollTo state from navigation
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clean up the state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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
        windowWidth < 640 ? 110 : windowWidth < 1024 ? 200 : 200;

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
    <main className='relative'>
      <canvas
        ref={canvasRef}
        className='fixed inset-0 w-full h-full z-0 pointer-events-none'
      />
      <div className='relative z-10'>
        <HeroSection />
        <AboutSection />
        <div id='events'>
          <EventsPreview />
        </div>
        <div id='board-members'>
          <BoardMembers />
        </div>
      </div>
    </main>
  );
};

export default Home;
