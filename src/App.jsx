import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PopiaConsent from './components/PopiaConsent';
import CreateProfile from './components/CreateProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PopiaConsent />} />
        <Route path="/register" element={<CreateProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
