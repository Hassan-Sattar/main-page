// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';
 // Adjust the path based on your project structure
import { FaSearch } from 'react-icons/fa'; // Adding an icon library

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Welcare Logo" className="logo-img" />
      </div>
      <nav className="nav-section">
        <ul className="nav-links">
          <li><a href="#who-we-are">WHO WE ARE</a></li>
          <li><a href="#our-impact">OUR IMPACT</a></li>
          <li><a href="#products-services">PRODUCTS & SERVICES</a></li>
          <li><a href="#agronomy">AGRONOMY</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
        <FaSearch className="search-icon" />
      </nav>
    </header>
  );
}

export default Header;
