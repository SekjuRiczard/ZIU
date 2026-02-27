import React from "react";
import Button from "./Button";

const Products = () => {
  const items = [
    { name: "Szejker Pro", price: "49 PLN", icon: "🥤" },
    { name: "Mata Premium", price: "129 PLN", icon: "🧘" },
    { name: "Zestaw Gum", price: "79 PLN", icon: "💪" },
  ];

  return (
    <section
      className="section-padding"
      style={{ backgroundColor: "var(--bg-light)" }}
    >
      <div className="container">
        <h2 className="text-center" style={{ marginBottom: "50px" }}>
          Nasze Produkty
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {items.map((item, i) => (
            <div key={i} className="card text-center">
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>
                {item.icon}
              </div>
              <h3>{item.name}</h3>
              <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {item.price}
              </p>
              <Button text="Kup teraz" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
