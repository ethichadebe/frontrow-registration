import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Rewards = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Recognition and Reward Programs</h1>
    <p>Ways to recognize and reward employees for wellness participation.</p>
  </div>
);

export default Rewards;