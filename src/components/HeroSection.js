// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Welcare Chemicals</h1>
        <p>Advancing agriculture for a balanced world</p>
        <button className="cta-button">Learn More</button>
      </div>
    </section>
  );
}

export default HeroSection;
