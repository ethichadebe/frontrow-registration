import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Dental = () => {
  return (
    <div className="profile-container">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>Dental Benefits</h1>
      <p>Coverage and resources for dental care, including checkups, cleanings, and more.</p>
    </div>
  );
};

export default Dental;
