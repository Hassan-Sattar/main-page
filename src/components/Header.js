// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* Wrap the logo in a Link to take you to the home page */}
        <Link to="/">
          <img src={logo} alt="Welcare Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="nav-section">
        <ul className="nav-links">
          <li><Link to="/who-we-are">WHO WE ARE</Link></li>
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
