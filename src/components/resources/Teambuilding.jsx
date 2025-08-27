import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Teambuilding = () => {
  
  const navigate = useNavigate();
  return(
  <div className="profile-container">
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    <h1>Team-Building Activities</h1>
    <p>Ideas and programs that promote team cohesion through wellness.</p>
  </div>
);
};

export default Teambuilding;