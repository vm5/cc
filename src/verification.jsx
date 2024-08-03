import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srns, setSrns] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleStudentVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if ((srns.length === 13 || srns.length === 14) && srns.startsWith("PES") && srns.includes("UG")) {
        onVerify();
      } else {
        alert('Please provide a valid SRN');
      }
    }, 2000); // Simulating a delay for verification
  };

  return (
    <PageContainer>
      <HeaderSection>
        <TextContainer>
          <TitleContainer>
            <MainTitle>Connect<HighlightedText>COMPASS</HighlightedText></MainTitle>
            <Subtitle>Bridging the gap between <Span>professionals</Span> and <Span>experienced mentors</Span> working across various organizations.</Subtitle>
          </TitleContainer>
          <DescriptionWrapper>
            <DescriptionBox>
              <Subtitle>What is connect<HighlightedText>COMPASS</HighlightedText>?</Subtitle>
              <Description>connect<HighlightedText>COMPASS</HighlightedText> is a platform that provides a seamless way for current job-seeking individuals to connect with former alumni, industry experts, and mentors to gain valuable insights and guidance for their career development. Whether you’re looking for advice on job interviews, career transitions, or industry trends, connect<HighlightedText>COMPASS</HighlightedText> offers a network of knowledgeable individuals ready to share their experiences and expertise. The platform ensures that users receive personalized support, helping them navigate their professional journey with confidence and clarity. Start your journey with connect<HighlightedText>COMPASS</HighlightedText> today!</Description>
            </DescriptionBox>
          </DescriptionWrapper>
        </TextContainer>
        <HeaderImage src="/networking.png" alt="Networking" />
      </HeaderSection>
      <FAQSection>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <Description>Get quick answers to your queries</Description>
        <FAQContainer>
          <FAQBox>
            <Question>How do I get started?</Question>
            <Answer>Enter your University SRN in the verification box and click 'Get Started' to proceed with verification.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Who can use connect<HighlightedText>COMPASS</HighlightedText>?</Question>
            <Answer>Current students and job-seeking individuals looking for mentorship and career guidance can use connect<HighlightedText>COMPASS</HighlightedText>.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>Is there a fee to use connect<HighlightedText>COMPASS</HighlightedText>?</Question>
            <Answer>No, connect<HighlightedText>COMPASS</HighlightedText> is a free platform for students and job-seekers.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How do I find a mentor?</Question>
            <Answer>After verifying your SRN, you can search for mentors based on your preferred organization with specific designations or specific career needs.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>What kind of guidance can I get?</Question>
            <Answer>You can receive guidance on job interviews, career transitions, industry trends, and more from experienced professionals.</Answer>
          </FAQBox>
          <FAQBox>
            <Question>How do I contact a mentor?</Question>
            <Answer>Once you find a mentor, you can contact them through the platform's messaging system or you can also video call the mentor to seek guidance if you wish.</Answer>
          </FAQBox>
        </FAQContainer>
      </FAQSection>
      <SilverContainer>
        <VerificationWrapper>
          <VerificationContainer>
            <SectionTitle>Student Verification</SectionTitle>
            <SectionDescription>Verify your status as a student by entering your University SRN and then proceed.</SectionDescription>
            <Input
              type="text"
              placeholder="Enter your SRN (Case-sensitive)"
              value={srns}
              onChange={(e) => setSrns(e.target.value.trim())}
              aria-label="SRN Input"
            />
            <Button onClick={handleStudentVerification} aria-label="Verify SRN">
              {isLoading ? 'Verifying...' : 'Get Started >'}
            </Button>
          </VerificationContainer>
        </VerificationWrapper>
      </SilverContainer>
      {isLoading && (
        <LoadingOverlay>
          <LoadingSpinner />
        </LoadingOverlay>
      )}
    </PageContainer>
  );
}

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: white;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  gap: 20px; /* Added gap between text and image */
  animation: ${fadeIn} 1s ease-out;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const MainTitle = styled.h1`
  color: #222;
  font-size: 3rem;
  font-family: 'Verdana';
  margin: 40px;
  font-weight: bold;
  animation: ${slideIn} 1s ease-out;
`;

const HighlightedText = styled.span`
  color: #6a1b9a;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  color: #555;
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
  margin-top: 10px;
  font-family: 'Verdana';
`;

const HeaderImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 20px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const DescriptionBox = styled.div`
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  animation: ${fadeIn} 1.5s ease-out;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  font-family: 'Verdana';
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const SilverContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5; /* Silver background */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const VerificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #222;
  font-weight: 600;
  margin-bottom: 10px;
  animation: ${slideIn} 1s ease-in-out;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #6a1b9a;
  }
`;

const Button = styled.button`
  background: #6a1b9a;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5a0a8d;
  }
`;

const FAQSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  animation: ${fadeIn} 1s ease-in;
`;

const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;
`;

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQBox = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.5s ease-in;
`;

const Question = styled.h3`
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 10px;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoadingSpinner = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #6a1b9a;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
const Span = styled.span`
 color : green;
`;
export default Verification;
