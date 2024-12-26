import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffffff 0%, #e6f7ff 100%);
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateY(${({ inView }) => (inView ? '0' : '50px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 1rem;
  text-align: center;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #666666;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  background-color: #4CAF50;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <HeroContainer ref={ref} inView={inView}>
      <HeroTitle>Model United Nations at Al Akhawayn University</HeroTitle>
      <HeroSubtitle>
        Empowering students to become global leaders through diplomacy and international cooperation
      </HeroSubtitle>
      <CTAButton>Join MUN AUI</CTAButton>
    </HeroContainer>
  );
};

export default HeroSection;

