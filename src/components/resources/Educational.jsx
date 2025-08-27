import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomePage.css';

const Educational = () => {
  const navigate = useNavigate();
  return(
  <div className="profile-container">
    <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
    <h1>Educational</h1>
    <p>Information and links to educational wellness resources.</p>
  </div>
);
};
export default Educational;