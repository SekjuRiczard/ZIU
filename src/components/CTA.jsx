import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CTASection = styled.section`
  padding: 80px 20px 90px;
  background: radial-gradient(circle at top, #4b5563 0%, #111827 55%, #020617 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  margin: 0 auto 32px;
  max-width: 520px;
  color: #e5e7eb;
`;

const Hint = styled.p`
  margin-top: 18px;
  font-size: 0.9rem;
  color: #9ca3af;
`;

const CTA = () => {
  return (
    <CTASection>
      <Container>
        <Title>Zacznij już dzisiaj.</Title>
        <Subtitle>
          Dołącz do naszej społeczności, odbierz 10% zniżki na pierwszy zakup
          i otrzymuj gotowe pomysły na trening prosto na maila.
        </Subtitle>
        <Button text="Zapisz się do newslettera" />
        <Hint>Bez spamu. Tylko konkretne wskazówki i inspiracje treningowe.</Hint>
      </Container>
    </CTASection>
  );
};

export default CTA;
