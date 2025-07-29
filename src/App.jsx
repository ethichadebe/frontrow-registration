import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopiaConsent from './components/PopiaConsent';
import CreateProfile from './components/CreateProfile';
import HomePage from './components/HomePage';
import Psychosocial from './components/benefits/Psychosocial';
import Medical from './components/benefits/Medical';
import Dental from './components/benefits/Dental';
import Visual from './components/benefits/Visual';
import Educational from './components/resources/Educational';
import Challenges from './components/resources/Challenges';
import Rewards from './components/resources/Rewards';
import Meals from './components/resources/Meals';
import Fitness from './components/resources/Fitness';
import Nutrition from './components/resources/Nutrition';
import Teambuilding from './components/resources/Teambuilding';
import Navbar from './components/Navbar';


// App Component: Handles page navigation using React Router
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* First Page: POPIA Consent Form */}
        <Route path="/" element={<PopiaConsent />} />

        {/* Second Page: Create Profile Form */}
        <Route path="/register" element={<CreateProfile />} />

        {/*Third Page: Home page Form */}
        <Route path="/home" element={<HomePage />} />

        {/*Page: Benefit Guide Pages */}
        <Route path="/benefits/psychosocial" element={<Psychosocial />} />
        <Route path="/benefits/medical" element={<Medical />} />
        <Route path="/benefits/dental" element={<Dental />} />
        <Route path="/benefits/visual" element={<Visual />} />

        {/*Page: Wellness Resources Pages */}
        <Route path="/resources/educational" element={<Educational />} />
        <Route path="/resources/challenges" element={<Challenges />} />
        <Route path="/resources/rewards" element={<Rewards />} />
        <Route path="/resources/meals" element={<Meals />} />
        <Route path="/resources/fitness" element={<Fitness />} />
        <Route path="/resources/nutrition" element={<Nutrition />} />
        <Route path="/resources/teambuilding" element={<Teambuilding />} />

      </Routes>
    </Router>
  );
}

export default App;
