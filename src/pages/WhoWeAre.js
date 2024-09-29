// src/pages/WhoWeAre.js
import React from 'react';
import './WhoWeAre.css'; // Custom styles for this page

function WhoWeAre() {
  return (
    <div>
      
      <section className="intro-section">
        <div className="container">
          <h1>Who We Are</h1>
          <p>
            At Welcare, we are committed to enhancing the agricultural industry by
            providing innovative solutions that drive sustainable growth. Our focus
            on quality, efficiency, and long-term crop health ensures that we are
            always at the forefront of the agricultural community.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower farmers with cutting-edge solutions that not
            only enhance crop yield but also promote environmentally sustainable
            practices.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <ul>
            <li>Innovation</li>
            <li>Quality</li>
            <li>Sustainability</li>
            <li>Partnership</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default WhoWeAre;
