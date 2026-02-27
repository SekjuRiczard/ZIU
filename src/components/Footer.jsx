import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        marginTop: "auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
        borderTop: "1px solid #e7e7e7",
      }}
    >
      <p>
        &copy; {currentYear} - Zaawansowany Interfejs Użytkownika. Wszelkie
        prawa zastrzeżone.
      </p>
    </footer>
  );
};

export default Footer;
