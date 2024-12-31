import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import EventsPreview from '../components/EventsPreview';
import BoardMembers from '../components/BoardMembers';
import AboutSection from '../components/AboutSection';

const Home = () => {
  const location = useLocation();

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

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <div id='events'>
        <EventsPreview />
      </div>
      <div id='board-members'>
        <BoardMembers />
      </div>
    </main>
  );
};

export default Home;
