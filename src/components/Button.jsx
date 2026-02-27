import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn-primary" onClick={onClick}>
      {text || "Kliknij mnie"}
    </button>
  );
};

export default Button;
