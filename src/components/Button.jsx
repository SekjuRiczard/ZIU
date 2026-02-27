import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #61dafb;
  color: #282c34;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.2s,
    background-color 0.2s;

  &:hover {
    background-color: #21a1f1;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{text || "Kliknij mnie"}</StyledButton>
  );
};

export default Button;
