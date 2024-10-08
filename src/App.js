// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your SignIn and SignUp components as well
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Admin from './components/Admin/Admin';
import Buyer from './components/Buyer/Buyer';
import LandingPage from './components/LandingPage';
import Homepage from './components/Homepage';
import FarmerHomepage from './components/Farmer/FarmerHomepage';

// Import other components as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* This will be your opening page */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/FarmerHomepage" element={<FarmerHomepage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/homepage" element={<Homepage />} />
        {/* Define other routes for Admin, Farmer, Buyer components here */}
      </Routes>
    </Router>
  );
}

export default App;
