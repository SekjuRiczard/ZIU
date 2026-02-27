import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="text-center"
      style={{
        padding: "40px 0",
        backgroundColor: "var(--primary)",
        color: "white",
      }}
    >
      <div className="container">
        <p>
          &copy; {currentYear} - Zaawansowany Interfejs Użytkownika. Wszelkie
          prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
