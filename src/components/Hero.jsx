import React from "react";
import styled from "styled-components";
import Button from "./Button";

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  text-align: center;
  padding: 60px 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920");
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 24px;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #e0e0e0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Transform Your Body, Transform Your Life</HeroTitle>
        <HeroSubtitle>
          Join thousands of members who have achieved their fitness goals with
          our expert trainers, state-of-the-art equipment, and personalized
          training programs.
        </HeroSubtitle>
        <ButtonGroup>
          <Button text="Start Your Journey" />
          <Button text="View Programs" />
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
