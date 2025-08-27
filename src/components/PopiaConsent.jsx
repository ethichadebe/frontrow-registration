import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PopiaConsent.css';

const PopiaConsent = () => {
  const [consent, setConsent] = useState(false); // Stores whether user has consented
  const navigate = useNavigate(); // Navigation hook from React Router

  // Handles submission of the consent form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (consent) {
      navigate('/register'); // Redirect to Create Profile page after consent
    }
  };

  return (
    <div className="popia-container">
      <h1>POPIA Consent Form</h1>

      {/* Informational Text about POPIA */}
      <div className="popia-text">
        <p>
          In accordance with South Africa's Protection of Personal Information Act (POPIA), we require your consent
          to collect and process your personal information. By consenting, you agree that Frontrow Medics can use
          your data solely for the purposes stated on our website.
        </p>
      </div>

      {/* Consent Checkbox and Proceed Button */}
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          /> I consent to the collection and processing of my personal information.
        </label>

        {/* Proceed Button is disabled until user gives consent */}
        <button type="submit" disabled={!consent} className="proceed-btn">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default PopiaConsent;
