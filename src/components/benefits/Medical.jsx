import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Medical = () => {
  return (
    <div className="profile-container">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>Medical Benefits</h1>
      <p>Details about healthcare services, consultations, and medical support offered.</p>
    </div>
  );
};

export default Medical;