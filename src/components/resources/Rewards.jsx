import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Rewards = () => {

  const navigate = useNavigate();
  return(
  <div className="profile-container">
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    <h1>Recognition and Reward Programs</h1>
    <p>Ways to recognize and reward employees for wellness participation.</p>
  </div>
);
};

export default Rewards;