import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsPreview from '../components/EventsPreview';
import BoardMembers from '../components/BoardMembers';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutSection />
      <EventsPreview />
      <BoardMembers />
    </HomeContainer>
  );
};

export default Home;

