import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const BoardContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateY(${({ inView }) => (inView ? '0' : '50px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const BoardTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 2rem;
  text-align: center;
`;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const MemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #4CAF50;
`;

const MemberName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0.5rem;
`;

const MemberPosition = styled.p`
  font-size: 1rem;
  color: #666666;
`;

const BoardMembers = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const members = [
    { name: 'Sarah Johnson', position: 'President', image: '/member1.jpg' },
    { name: 'Ahmed Hassan', position: 'Vice President', image: '/member2.jpg' },
    { name: 'Fatima El Amrani', position: 'Secretary General', image: '/member3.jpg' },
    { name: 'Youssef Benali', position: 'Treasurer', image: '/member4.jpg' },
  ];

  return (
    <BoardContainer ref={ref} inView={inView}>
      <BoardTitle>Our Board Members</BoardTitle>
      <BoardGrid>
        {members.map((member) => (
          <MemberCard key={member.name}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberPosition>{member.position}</MemberPosition>
          </MemberCard>
        ))}
      </BoardGrid>
    </BoardContainer>
  );
};

export default BoardMembers;

