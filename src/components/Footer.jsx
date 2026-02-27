import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="text-center"
      style={{
        padding: "40px 0 32px",
        backgroundColor: "#020617",
        color: "#e5e7eb",
        borderTop: "1px solid rgba(148, 163, 184, 0.25)",
      }}
    >
      <div className="container">
        <p style={{ marginBottom: 4 }}>
          &copy; {currentYear} ZIU_STORE. Wszystkie prawa zastrzeżone.
        </p>
        <p style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
          Projekt w ramach kursu &quot;Zaawansowany Interfejs Użytkownika&quot;.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
