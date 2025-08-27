import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaDumbbell, FaMedal, FaAppleAlt, FaVideo, FaLeaf, FaUsers } from 'react-icons/fa';
import '../styles/HomePage.css';
import PopiaConsent from './PopiaConsent'; // Assuming this is the first page component
const Home = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/yourNumberHere', '_blank');
  };

  return (
    <div className="profile-container">
      <h1>Welcome to Your Wellness Portal</h1>

      <div className="section-grid">
        <section>
          <h2>Benefit Guide</h2>
          <div className="card-grid">
            <Link to="/benefits/psychosocial">
              <button>Psychosocial</button>
            </Link>
            <Link to="/benefits/medical">
              <button>Medical</button>
            </Link>
            <Link to="/benefits/dental">
              <button>Dental</button>
            </Link>
            <Link to="/benefits/visual">
              <button>Visual</button>
            </Link>
          </div>
        </section>

        <section>
          <h2>Client Report</h2>
          <button onClick={() => alert('Generating report...')}>Generate Report</button>
        </section>

        <section>
          <h2>Wellness Resources</h2>
          <ul>
            <li><Link to="/resources/educational"><FaBook /> Educational</Link></li>
            <li><Link to="/resources/challenges"><FaDumbbell /> Wellness Challenges</Link></li>
            <li><Link to="/resources/rewards"><FaMedal /> Recognition and Reward Programs</Link></li>
            <li><Link to="/resources/meals"><FaAppleAlt /> Healthy Meal Programs</Link></li>
            <li><Link to="/resources/fitness"><FaVideo /> Digital Fitness Subscription</Link></li>
            <li><Link to="/resources/nutrition"><FaLeaf /> Personalised Nutrition Plans</Link></li>
            <li><Link to="/resources/teambuilding"><FaUsers /> Team-Building Activities</Link></li>
          </ul>
        </section>

        <section>
          <h2>FAQs</h2>
          <button onClick={() => alert('Redirecting to FAQs...')}>View FAQs</button>
        </section>

        <section>
          <h2>Feedback / Ratings</h2>
          <button onClick={() => alert('Redirecting to feedback form...')}>Submit Feedback</button>
        </section>

        <section>
          <h2>Health Awareness Calendar</h2>
          <button onClick={() => alert('Opening health calendar...')}>View Calendar</button>
        </section>

        <section>
          <h2>Appointment Request</h2>
          <Link to="/book-appointment">
          <button>Book Appointment</button>
          </Link>
        </section>

        <section>
          <button onClick={openWhatsApp} style={{ backgroundColor: '#25D366' }}>
            📱 Contact Us on WhatsApp
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
