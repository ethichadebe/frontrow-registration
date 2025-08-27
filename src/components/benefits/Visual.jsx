import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Visual = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h1>Visual Benefits</h1>
      <p>Support for eye care, including optometrist visits, eyewear, and screenings.</p>
    </div>
  );
};

export default Visual;
