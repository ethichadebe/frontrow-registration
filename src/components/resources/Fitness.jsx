import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Fitness = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Digital Fitness Subscription</h1>
    <p>Online fitness services and workout subscriptions to stay active.</p>
  </div>
);

export default Fitness;