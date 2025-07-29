import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/HomePage.css';

const Teambuilding = () => (
  <div className="profile-container">
    <Link to="/" className="back-button">← Back to Home</Link>
    <h1>Team-Building Activities</h1>
    <p>Ideas and programs that promote team cohesion through wellness.</p>
  </div>
);

export default Teambuilding;