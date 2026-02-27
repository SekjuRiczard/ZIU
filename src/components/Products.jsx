import React from "react";
import styled from "styled-components";

const ProductsSection = styled.section`
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

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #FF7F11 0%, #F7931E 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
`;

const ProductContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  color: #262626;
  margin-bottom: 12px;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  font-size: 0.95rem;
  color: #404040;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const ActionButton = styled.button`
  background-color: #FF7F11;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  align-self: flex-start;

  &:hover {
    background-color: #E67E0A;
    transform: translateX(2px);
  }

  &:active {
    transform: translateX(0);
  }
`;

const Products = () => {
  const products = [
    {
      icon: "🥤",
      name: "Protein Shakes",
      description:
        "Premium quality protein shakes to support muscle growth and recovery after intense workouts.",
    },
    {
      icon: "🎒",
      name: "Gym Bags",
      description:
        "Durable and stylish gym bags designed to carry all your training essentials with ease.",
    },
    {
      icon: "⌚",
      name: "Fitness Trackers",
      description:
        "Advanced wearables to monitor your heart rate, calories, and workout performance in real-time.",
    },
    {
      icon: "🧘",
      name: "Yoga Mats",
      description:
        "High-grip yoga mats perfect for yoga classes, stretching, and floor exercises.",
    },
    {
      icon: "🏃",
      name: "Running Shoes",
      description:
        "Professionally designed running shoes providing comfort and support for all fitness levels.",
    },
    {
      icon: "💪",
      name: "Resistance Bands",
      description:
        "Versatile resistance bands for strength training, rehabilitation, and mobility work.",
    },
  ];

  return (
    <ProductsSection>
      <Container>
        <SectionTitle>Our Training Products</SectionTitle>
        <SectionSubtitle>
          Quality gear to enhance your fitness journey
        </SectionSubtitle>
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard key={index}>
              <ProductImage>{product.icon}</ProductImage>
              <ProductContent>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ActionButton>Learn More</ActionButton>
              </ProductContent>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </ProductsSection>
  );
};

export default Products;
