import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Nutrition = () => {
  const navigate = useNavigate();
  return(
  <div className="profile-container">
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    <h1>Personalised Nutrition Plans</h1>
    <p>Tailored diet plans and consultations based on individual needs.</p>
  </div>
);
};

export default Nutrition;