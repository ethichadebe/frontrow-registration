import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Psychosocial = () => {
  return (
    <div className="profile-container">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>Psychosocial Benefits</h1>
      <p>Information and support for mental health, counseling, and emotional well-being.</p>
    </div>
  );
};

export default Psychosocial;