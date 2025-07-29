import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Visual = () => {
  return (
    <div className="profile-container">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>Visual Benefits</h1>
      <p>Support for eye care, including optometrist visits, eyewear, and screenings.</p>
    </div>
  );
};

export default Visual;
