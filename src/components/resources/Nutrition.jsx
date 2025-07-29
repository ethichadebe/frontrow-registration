import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Nutrition = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Personalised Nutrition Plans</h1>
    <p>Tailored diet plans and consultations based on individual needs.</p>
  </div>
);

export default Nutrition;