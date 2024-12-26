import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #ffffff;
  opacity: ${({ inView }) => (inView ? 1 : 0)};
  transform: translateY(${({ inView }) => (inView ? '0' : '50px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const AboutContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333333;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #666666;
  line-height: 1.6;
`;

const AboutImage = styled.img`
  flex: 1;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <AboutContainer ref={ref} inView={inView}>
      <AboutContent>
        <AboutTitle>About AUI Model United Nations</AboutTitle>
        <AboutText>
          AUI MUN is a dynamic student-run organization dedicated to fostering global awareness,
          critical thinking, and leadership among students. Through engaging simulations of the
          United Nations, we provide participants with the opportunity to debate pressing
          international issues, develop diplomatic skills, and collaborate on innovative solutions.
        </AboutText>
      </AboutContent>
      <AboutImage src="/about-image.jpg" alt="MUN AUI participants in action" />
    </AboutContainer>
  );
};

export default AboutSection;

