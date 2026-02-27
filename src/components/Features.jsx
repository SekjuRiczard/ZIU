import React from "react";
import styled from "styled-components";

const FeaturesSection = styled.section`
  padding: 100px 20px;
  background-color: #E2E8CE;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #262626;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #404040;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 4px solid #FF7F11;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #262626;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #404040;
  line-height: 1.6;
  font-size: 1rem;
`;

const Features = () => {
  const features = [
    {
      icon: "💪",
      title: "Expert Trainers",
      description:
        "Work with certified personal trainers who create customized workout plans tailored to your goals and fitness level.",
    },
    {
      icon: "🏋️",
      title: "Modern Equipment",
      description:
        "Access state-of-the-art gym equipment and facilities designed to maximize your training efficiency and results.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Monitor your achievements with our advanced tracking system and see real-time progress toward your fitness goals.",
    },
    {
      icon: "🥗",
      title: "Nutrition Guidance",
      description:
        "Get personalized meal plans and nutrition advice from our experts to fuel your body for optimal performance.",
    },
    {
      icon: "👥",
      title: "Group Classes",
      description:
        "Join energizing group fitness classes including yoga, spin, HIIT, and more to stay motivated and have fun.",
    },
    {
      icon: "⏰",
      title: "Flexible Hours",
      description:
        "Train on your schedule with 24/7 access to our facilities, making it easy to fit workouts into your busy life.",
    },
  ];

  return (
    <FeaturesSection>
      <Container>
        <SectionTitle>Why Choose Our Gym</SectionTitle>
        <SectionSubtitle>
          Everything you need to achieve your fitness goals in one place
        </SectionSubtitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
