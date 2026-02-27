import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ProductsSection = styled.section`
  padding: 96px 20px 100px;
  background-color: #e2e8ce;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleArea = styled.div`
  h2 {
    font-size: 2.2rem;
    margin: 0 0 8px;
    color: #262626;
  }

  p {
    margin: 0;
    color: #404040;
    max-width: 420px;
  }
`;

const Badge = styled.span`
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #555;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 26px;
`;

const ProductCard = styled.article`
  position: relative;
  background: #ffffff;
  border-radius: 18px;
  padding: 26px 22px 24px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(48, 54, 79, 0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle at top, rgba(255, 127, 17, 0.15), transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-6px);
    transition: transform 0.25s ease;
  }
`;

const IconWrap = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 18px;
  background: #f6efe3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ProductTitle = styled.h3`
  margin: 8px 0 4px;
  font-size: 1.25rem;
  color: #262626;
`;

const ProductMeta = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #5f5f5f;
`;

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #30364f;

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 400;
    color: #6b7280;
  }
`;

const Products = () => {
  const items = [
    {
      name: "Szejker Pro",
      price: "49 PLN",
      icon: "🥤",
      meta: "Idealny do koktajli białkowych i napojów izotonicznych.",
    },
    {
      name: "Mata Premium",
      price: "129 PLN",
      icon: "🧘",
      meta: "Gruba, antypoślizgowa mata do jogi i treningu mobility.",
    },
    {
      name: "Zestaw Gum",
      price: "79 PLN",
      icon: "💪",
      meta: "Komplet gum oporowych do treningu w domu i na siłowni.",
    },
  ];

  return (
    <ProductsSection>
      <Container>
        <SectionHeader>
          <TitleArea>
            <Badge>Sklep</Badge>
            <h2>Nasze produkty</h2>
            <p>
              Starannie wybrane akcesoria, które uzupełnią Twój trening i
              pozwolą utrzymać motywację na dłużej.
            </p>
          </TitleArea>
        </SectionHeader>

        <ProductsGrid>
          {items.map((item, i) => (
            <ProductCard key={i}>
              <IconWrap>{item.icon}</IconWrap>
              <div>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductMeta>{item.meta}</ProductMeta>
              </div>
              <PriceRow>
                <Price>
                  {item.price}
                  <span>brutto</span>
                </Price>
                <Button text="Kup teraz" />
              </PriceRow>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </ProductsSection>
  );
};

export default Products;
