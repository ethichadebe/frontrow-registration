import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/home" className="navbar-logo">Wellness Portal</Link>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/resources/educational">Resources</Link>
        <Link to="/">Register</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;