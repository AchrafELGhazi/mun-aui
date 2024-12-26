import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const EventsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f9f9f9;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateY(${({ inView }) => (inView ? '0' : '50px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const EventsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 2rem;
  text-align: center;
`;

const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const EventCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const EventContent = styled.div`
  padding: 1.5rem;
`;

const EventName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1rem;
`;

const ViewMoreButton = styled(Link)`
  display: inline-block;
  background-color: #4CAF50;
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const EventsPreview = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const events = [
    {
      id: 1,
      name: 'Annual Conference',
      description: 'Our flagship event bringing together delegates from around the world.',
      image: '/event1.jpg',
    },
    {
      id: 2,
      name: 'Workshop Series',
      description: 'Skill-building workshops on diplomacy, public speaking, and negotiation.',
      image: '/event2.jpg',
    },
    {
      id: 3,
      name: 'Mock Debates',
      description: 'Practice sessions to hone your debating skills on current global issues.',
      image: '/event3.jpg',
    },
    {
      id: 4,
      name: 'Guest Speaker Series',
      description: 'Insightful talks by diplomats, policymakers, and international experts.',
      image: '/event4.jpg',
    },
  ];

  return (
    <EventsContainer ref={ref} inView={inView}>
      <EventsTitle>Our Events</EventsTitle>
      <EventsGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <EventImage src={event.image} alt={event.name} />
            <EventContent>
              <EventName>{event.name}</EventName>
              <EventDescription>{event.description}</EventDescription>
              <ViewMoreButton to="/events">View More</ViewMoreButton>
            </EventContent>
          </EventCard>
        ))}
      </EventsGrid>
    </EventsContainer>
  );
};

export default EventsPreview;

