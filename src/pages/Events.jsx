import React from 'react';
import styled from 'styled-components';

const EventsContainer = styled.div`
  padding: 6rem 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const EventsTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 2rem;
  text-align: center;
`;

const Events = () => {
  return (
    <EventsContainer>
      <EventsTitle>Our Events</EventsTitle>
      {/* Add more detailed event information here */}
    </EventsContainer>
  );
};

export default Events;

