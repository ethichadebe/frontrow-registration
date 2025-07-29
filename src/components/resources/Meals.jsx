import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Meals = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Healthy Meal Programs</h1>
    <p>Resources and guides for nutritious eating plans and meal ideas.</p>
  </div>
);

export default Meals;