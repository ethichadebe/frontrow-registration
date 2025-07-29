import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Challenges = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Wellness Challenges</h1>
    <p>Activities to promote health and wellbeing in a fun and engaging way.</p>
  </div>
);

export default Challenges;