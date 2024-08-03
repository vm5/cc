import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 1;
  }
`;

// Styled components
const SlidingDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  background-color: red; /* background color for the sliding text container */

`;

const SlidingText = styled.span`
  display: inline-block;
  animation: ${slideRightToLeft} 15s linear infinite;
  color: white;
  font-size: 16px;
  white-space: nowrap;
  font-family: 'Verdana';
`;

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: black;
  border-bottom: 2px solid #3399ff;
  font-size: 2rem;
  font-family: 'Coneria';
  color: #003366;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: ${fadeIn} 2.5s ease-in-out;
  text-align: center; /* Centered text for better alignment */

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px;
    width: 100%;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledLogo = styled.img`
  width: 150px; 
  height: auto;
  margin: 45px;
`;

const SlidingHeading = styled.h1`
  animation: ${slideDown} 3s ease-out;
  font-family: 'Verdana';
  color: grey;
  margin-bottom: 20px; /* Corrected margin value */
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  span {
    color: purple;
  }
`;

const NavLinks = styled.div`
  margin-top: 10px;
  font-family: 'Helvetica';
  display: flex;
  gap: 20px; /* Increased spacing between links */

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: normal;
    color: lightblue;
    font-size: 18px; /* Increased font size for better visibility */
    transition: color 0.3s;
    padding: 10px; /* Added padding for better click area and spacing */

    &:hover {
      color: #ff6f00;
    }

    img {
      width: 30px; /* Increased size of icons */
      height: auto;
      margin-right: 12px; /* Space between icon and text */
    }
  }
`;

const Header = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    
  };

  return (
    <HeaderContainer>
      <SlidingDiv>
        <SlidingText>The portal is now functional for 2024-25</SlidingText>
      </SlidingDiv>
      <HeaderContent>
        <LogoContainer>
          <StyledLogo src="/websitelogo (3).png" alt="connectCOMPASS Logo" />
        </LogoContainer>
        <SlidingHeading>
          Welcome to connect<span>COMPASS</span>
        </SlidingHeading>
        <NavLinks>
          <a href="/">
            <img src="/home-removebg-preview (1).png" alt="Home" />
            Home
          </a>
          <a href="#bottom" onClick={scrollToBottom}>
            <img src="/contributors-removebg-preview.png" alt="Contributors" />
            Contributors
          </a>
          <a href="#bottom" onClick={scrollToBottom}>
            <img src="/termsofuse-removebg-preview.png" alt="Terms of Service" />
            Terms of Service
          </a>
          <a href="#bottom" onClick={scrollToBottom}>
            <img src="/contactus-removebg-preview.png" alt="Contact Us" />
            Contact Us
          </a>
        </NavLinks>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
