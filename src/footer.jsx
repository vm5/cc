import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for fade-in and slide-in animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

// Apply animations to the FooterContainer
const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background: black;
  border-top: 1px solid #ccc;
  position: relative;
  bottom: 0;
  width: 100%;
  font-weight: bold;
  font-family: 'Verdana';
  color: white; /* White text for contrast */
  font-size: 16px;
  animation: ${fadeIn} 1s ease-in-out; /* Apply fadeIn animation */

  @media (max-width: 768px) {
    font-size: 14px; /* Decrease font size for tablets and small screens */
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Further decrease font size for mobile screens */
    padding: 10px;
  }

  span {
    color: purple; 
  }

  p {
    color: grey; 
  }
`;

// Apply the sliding animation to the additionalContent
const AdditionalContent = styled.div`
  margin-top: 20px;
  font-weight: normal;
  font-family: 'Verdana';
  font-size: 18px;
  overflow: hidden; 

  @media (max-width: 768px) {
    font-size: 12px; /* Reduce font size for tablets */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* Further reduce font size for mobile screens */
  }
`;

const Link = styled.a`
  margin: 0 10px;
  text-decoration: none;
  font-weight: normal;
  color: lightblue; // Light blue for visibility
  font-family: 'Verdana';
  padding: 5px; // Reduced padding for smaller screens
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center; // Align items center
  
  &:hover {
    color: yellow; // Change color to yellow on hover
  }

  img {
    width: 20px; // Size of icons
    height: auto;
    margin-right: 8px; // Space between icon and text
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <img src="/websitelogo (3).png" alt="connectCOMPASS Logo" style={styles.logo} />
      <p>&copy; {new Date().getFullYear()} connect<span>COMPASS</span>. All rights reserved</p>
      <AdditionalContent>
        <Link href="https://contributorsconnectpes.netlify.app/">
          <img src="/contributors-removebg-preview.png" alt="Contributors" />
          Contributors
        </Link>
        <Link href="https://termsconnectpes.netlify.app/">
          <img src="/termsofuse-removebg-preview.png" alt="Terms of Service" />
          Terms of Service
        </Link>
        <Link href="https://contactuspes.netlify.app/">
          <img src="/contactus-removebg-preview.png" alt="Contact Us" />
          Contact Us
        </Link>
        <p>connect<span>COMPASS</span>: Your go-to platform for establishing professional connections. Get the answers you need and stay informed with the latest insights!</p>
      </AdditionalContent>
    </FooterContainer>
  );
};

const styles = {
  logo: {
    width: '120px', // Adjusted width for better fit
    height: 'auto',
    marginBottom: '10px',
  },
};

export default Footer;
