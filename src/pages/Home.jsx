import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Products from "../components/Products";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Products />
      <CTA />
    </div>
  );
};

export default Home;
