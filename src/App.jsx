import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopiaConsent from './components/PopiaConsent';
import CreateProfile from './components/CreateProfile';

// App Component: Handles page navigation using React Router
function App() {
  return (
    <Router>
      <Routes>
        {/* First Page: POPIA Consent Form */}
        <Route path="/" element={<PopiaConsent />} />

        {/* Second Page: Create Profile Form */}
        <Route path="/register" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
