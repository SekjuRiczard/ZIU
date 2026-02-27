import React from "react";
import styled from "styled-components";
import Button from "./Button";

const PricingSection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
`;

const PricingCard = styled.div`
  background: ${(props) => (props.featured ? "#ff6b35" : "#2d2d2d")};
  padding: 40px 30px;
  border-radius: 12px;
  text-align: center;
  position: relative;
  border: 2px solid ${(props) => (props.featured ? "#ff6b35" : "#3d3d3d")};
  transform: ${(props) => (props.featured ? "scale(1.05)" : "scale(1)")};
  transition: transform 0.3s ease;

  &:hover {
    transform: ${(props) =>
      props.featured ? "scale(1.08)" : "scale(1.03)"};
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #4caf50;
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;

  span {
    font-size: 1.2rem;
    color: #e0e0e0;
  }
`;

const PriceSubtext = styled.p`
  color: #e0e0e0;
  margin-bottom: 30px;
  font-size: 0.95rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.95rem;
  color: #e0e0e0;

  &::before {
    content: "✓";
    color: #4caf50;
    font-weight: bold;
    margin-right: 10px;
  }
`;

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free fitness assessment",
        "Mobile app access",
      ],
    },
    {
      name: "Pro",
      price: "$59",
      period: "per month",
      featured: true,
      badge: "Most Popular",
      features: [
        "All Basic features",
        "Unlimited group classes",
        "Personal trainer sessions (2/month)",
        "Nutrition consultation",
        "Progress tracking dashboard",
      ],
    },
    {
      name: "Elite",
      price: "$99",
      period: "per month",
      features: [
        "All Pro features",
        "Unlimited personal training",
        "Custom meal planning",
        "Priority class booking",
        "Guest passes (5/month)",
      ],
    },
  ];

  return (
    <PricingSection>
      <Container>
        <SectionTitle>Choose Your Plan</SectionTitle>
        <SectionSubtitle>
          Flexible membership options to fit your lifestyle and budget
        </SectionSubtitle>
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard key={index} featured={plan.featured}>
              {plan.badge && <Badge>{plan.badge}</Badge>}
              <PlanName>{plan.name}</PlanName>
              <Price>
                {plan.price}
                <span>/{plan.period}</span>
              </Price>
              <PriceSubtext>Billed monthly, cancel anytime</PriceSubtext>
              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <FeatureItem key={idx}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <Button text="Get Started" />
            </PricingCard>
          ))}
        </PricingGrid>
      </Container>
    </PricingSection>
  );
};

export default Pricing;
