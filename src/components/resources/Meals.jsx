import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Meals = () => {

  const navigate = useNavigate();
  return(
  <div className="profile-container">
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    <h1>Healthy Meal Programs</h1>
    <p>Resources and guides for nutritious eating plans and meal ideas.</p>
  </div>
);
};

export default Meals;