import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Challenges = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>Wellness Challenges</h1>
      <p>Activities to promote health and wellbeing in a fun and engaging way.</p>
    </div>
  );
};

export default Challenges;
