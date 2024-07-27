import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import UserDashboard from './assets/components/User-dashboard'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './assets/components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
