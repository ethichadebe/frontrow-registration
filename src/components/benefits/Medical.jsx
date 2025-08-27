import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Medical = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>Medical Benefits</h1>
      <p>Details about healthcare services, consultations, and medical support offered.</p>
    </div>
  );
};

export default Medical;