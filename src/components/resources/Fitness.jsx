import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Fitness = () => {
  const navigate = useNavigate();
  return(
  <div className="profile-container">
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    <h1>Digital Fitness Subscription</h1>
    <p>Online fitness services and workout subscriptions to stay active.</p>
  </div>
);
};
export default Fitness;