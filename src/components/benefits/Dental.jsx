import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Dental = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>Dental Benefits</h1>
      <p>Coverage and resources for dental care, including checkups, cleanings, and more.</p>
    </div>
  );
};

export default Dental;
