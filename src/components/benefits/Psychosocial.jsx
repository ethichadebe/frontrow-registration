import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Psychosocial = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>Psychosocial Benefits</h1>
      <p>Information and support for mental health, counseling, and emotional well-being.</p>
    </div>
  );
};

export default Psychosocial;