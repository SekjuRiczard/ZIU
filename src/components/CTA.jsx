import React from "react";
import styled from "styled-components";
import Button from "./Button";

const CTAWrapper = styled.section`
  padding: 80px 20px;
  background-color: #262626;
  color: white;
  text-align: center;
`;

const CTA = () => {
  return (
    <CTAWrapper>
      <h2>Zacznij już dzisiaj!</h2>
      <p style={{ margin: "20px 0 40px", color: "#E2E8CE" }}>
        Dołącz do naszej społeczności i odbierz 10% zniżki na pierwszy zakup.
      </p>
      <Button text="Zapisz się do newslettera" />
    </CTAWrapper>
  );
};

export default CTA;
