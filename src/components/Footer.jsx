// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
// } from 'react-icons/fa';

// const FooterContainer = styled.footer`
//   background-color: #ffffff;
//   color: #333333;
//   padding: 4rem 2rem;
//   margin-top: auto;
//   box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
// `;

// const FooterContent = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 2rem;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// const FooterSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const FooterTitle = styled.h3`
//   font-size: 1.4rem;
//   font-weight: 600;
//   margin-bottom: 1.5rem;
//   color: #4caf50;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: -0.5rem;
//     width: 2rem;
//     height: 2px;
//     background-color: #4caf50;
//   }
// `;

// const FooterText = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   margin-bottom: 0.5rem;
//   display: flex;
//   align-items: center;
// `;

// const hoverAnimation = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-3px); }
//   100% { transform: translateY(0); }
// `;

// const FooterLink = styled.a`
//   color: #333333;
//   text-decoration: none;
//   transition: color 0.3s ease-in-out;
//   display: flex;
//   align-items: center;
//   margin-bottom: 0.5rem;

//   &:hover {
//     color: #4caf50;
//     animation: ${hoverAnimation} 0.3s ease-in-out;
//   }
// `;

// const IconWrapper = styled.span`
//   margin-right: 0.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 24px;
//   height: 24px;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 1rem;
// `;

// const SocialIconLink = styled.a`
//   color: #333333;
//   font-size: 1.5rem;
//   transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

//   &:hover {
//     color: #4caf50;
//     transform: scale(1.1);
//   }
// `;

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         <FooterSection>
//           <FooterTitle>About MUN AUI</FooterTitle>
//           <FooterText>
//             Model United Nations at Al Akhawayn University is dedicated to
//             fostering global awareness, critical thinking, and leadership among
//             students through engaging simulations of the United Nations.
//           </FooterText>
//         </FooterSection>
//         <FooterSection>
//           <FooterTitle>Contact Us</FooterTitle>
//           <FooterLink href='mailto:modelun@aui.ma'>
//             <IconWrapper>
//               <FaEnvelope />
//             </IconWrapper>
//             modelun@aui.ma
//           </FooterLink>
//           <FooterLink href='tel:+212535586000'>
//             <IconWrapper>
//               <FaPhone />
//             </IconWrapper>
//             +212 5355-86000
//           </FooterLink>
//         </FooterSection>
//         <FooterSection>
//           <FooterTitle>Location</FooterTitle>
//           <FooterText>
//             <IconWrapper>
//               <FaMapMarkerAlt />
//             </IconWrapper>
//             Al Akhawayn University
//             <br />
//             Avenue Hassan II
//             <br />
//             Ifrane 53000, Morocco
//           </FooterText>
//         </FooterSection>
//         <FooterSection>
//           <FooterTitle>Connect With Us</FooterTitle>
//           <SocialIcons>
//             <SocialIconLink
//               href='https://facebook.com/munaui'
//               target='_blank'
//               rel='noopener noreferrer'
//               aria-label='Facebook'
//             >
//               <FaFacebookF />
//             </SocialIconLink>
//             <SocialIconLink
//               href='https://twitter.com/munaui'
//               target='_blank'
//               rel='noopener noreferrer'
//               aria-label='Twitter'
//             >
//               <FaTwitter />
//             </SocialIconLink>
//             <SocialIconLink
//               href='https://instagram.com/munaui'
//               target='_blank'
//               rel='noopener noreferrer'
//               aria-label='Instagram'
//             >
//               <FaInstagram />
//             </SocialIconLink>
//           </SocialIcons>
//         </FooterSection>
//       </FooterContent>
//     </FooterContainer>
//   );
// };

// export default Footer;
import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(240, 255, 240, 0.9) 100%
  );
  backdrop-filter: blur(10px);
  color: #333333;
  padding: 4rem 2rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #4caf50, transparent);
    animation: ${gradientAnimation} 3s ease infinite;
    background-size: 200% 200%;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FooterTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #4caf50;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 2rem;
    height: 2px;
    background-color: #4caf50;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const FooterLink = styled.a`
  color: #333333;
  text-decoration: none;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;

  &:hover {
    color: #4caf50;
    background-color: rgba(76, 175, 80, 0.1);
    transform: translateX(5px);
  }
`;

const IconWrapper = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIconLink = styled.a`
  color: #333333;
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #4caf50;
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
    animation: ${pulseAnimation} 0.5s ease-in-out;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About MUN AUI</FooterTitle>
          <FooterText>
            Model United Nations at Al Akhawayn University fosters global
            awareness, critical thinking, and leadership through engaging UN
            simulations.
          </FooterText>
         
        </FooterSection>
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href='/about'>About Us</FooterLink>
          <FooterLink href='/events'>Events</FooterLink>
          <FooterLink href='/apply'>Apply</FooterLink>
          <FooterLink href='/resources'>Resources</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterLink href='mailto:modelun@aui.ma'>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            modelun@aui.ma
          </FooterLink>
          <FooterLink href='tel:+212535586000'>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            +212 5355-86000
          </FooterLink>
          <FooterLink
            href='https://goo.gl/maps/AUIcampus'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            Al Akhawayn University, Ifrane
          </FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Connect With Us</FooterTitle>
          <SocialIcons>
            <SocialIconLink
              href='https://facebook.com/munaui'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <FaFacebookF />
            </SocialIconLink>
            <SocialIconLink
              href='https://twitter.com/munaui'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href='https://instagram.com/munaui'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

