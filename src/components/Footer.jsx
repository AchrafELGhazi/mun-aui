import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333333;
  color: #ffffff;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #4CAF50;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterText>
            Email: <FooterLink href="mailto:info@munaui.org">info@munaui.org</FooterLink>
            <br />
            Phone: +212 5355-86000
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Location</FooterTitle>
          <FooterText>
            Al Akhawayn University
            <br />
            Avenue Hassan II
            <br />
            Ifrane 53000, Morocco
          </FooterText>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <FooterText>
            <FooterLink href="https://facebook.com/munaui" target="_blank" rel="noopener noreferrer">Facebook</FooterLink>
            <br />
            <FooterLink href="https://twitter.com/munaui" target="_blank" rel="noopener noreferrer">Twitter</FooterLink>
            <br />
            <FooterLink href="https://instagram.com/munaui" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>
          </FooterText>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

