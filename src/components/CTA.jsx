import React, { useState } from "react";
import styled from "styled-components";

const CTASection = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, #FF7F11 0%, #F7931E 100%);
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 700;
`;

const CTASubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  line-height: 1.6;
  opacity: 0.95;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  color: #262626;
  transition: box-shadow 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  background-color: #262626;
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    background-color 0.2s;

  &:hover {
    background-color: #3d3d3d;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SuccessMessage = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 1.1rem;
`;

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <CTASection>
      <Container>
        <CTATitle>Ready to Start Your Fitness Journey?</CTATitle>
        <CTASubtitle>
          Sign up today and get your first week free. No commitment required.
        </CTASubtitle>
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">Claim Your Free Week</SubmitButton>
          </Form>
        ) : (
          <SuccessMessage>
            Thank you for signing up! We&apos;ll contact you shortly to schedule your
            free session.
          </SuccessMessage>
        )}
      </Container>
    </CTASection>
  );
};

export default CTA;
