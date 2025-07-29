import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Educational = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Educational</h1>
    <p>Information and links to educational wellness resources.</p>
  </div>
);

export default Educational;