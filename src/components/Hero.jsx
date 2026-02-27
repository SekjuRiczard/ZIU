import React from "react";
import Button from "./Button";

const Hero = () => (
  <section
    className="section-padding text-center"
    style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
  >
    <div className="container">
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Nowa Jakość Treningu
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        Odkryj produkty, które pomogą Ci osiągnąć cele.
      </p>
      <Button text="Sprawdź ofertę" />
    </div>
  </section>
);

export default Hero;
