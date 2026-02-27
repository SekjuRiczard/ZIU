import React from "react";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  padding: 100px 20px;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #1a1a1a;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const TestimonialCard = styled.div`
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  margin-bottom: 25px;
  font-style: italic;

  &::before {
    content: """;
    font-size: 2rem;
    color: #ff6b35;
    margin-right: 5px;
  }

  &::after {
    content: """;
    font-size: 2rem;
    color: #ff6b35;
    margin-left: 5px;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
`;

const AuthorDetails = styled.div``;

const AuthorName = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: #1a1a1a;
  font-weight: 600;
`;

const AuthorRole = styled.p`
  margin: 5px 0 0 0;
  font-size: 0.9rem;
  color: #666;
`;

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This gym completely transformed my life. The trainers are amazing and the community is so supportive. I've lost 30 pounds and gained so much confidence!",
      author: "Sarah Johnson",
      role: "Member for 1 year",
      initial: "S",
    },
    {
      quote:
        "Best decision I ever made. The facilities are top-notch and the personal training sessions have helped me achieve goals I never thought possible.",
      author: "Michael Chen",
      role: "Member for 2 years",
      initial: "M",
    },
    {
      quote:
        "I love the variety of classes and the flexible hours. As a busy professional, being able to work out at any time has been a game-changer for my fitness routine.",
      author: "Emily Rodriguez",
      role: "Member for 6 months",
      initial: "E",
    },
  ];

  return (
    <TestimonialsSection>
      <Container>
        <SectionTitle>What Our Members Say</SectionTitle>
        <SectionSubtitle>
          Real stories from real people who transformed their lives
        </SectionSubtitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Quote>{testimonial.quote}</Quote>
              <AuthorInfo>
                <Avatar>{testimonial.initial}</Avatar>
                <AuthorDetails>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorDetails>
              </AuthorInfo>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
