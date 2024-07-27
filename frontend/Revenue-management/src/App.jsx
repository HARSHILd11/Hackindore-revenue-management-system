import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from "./assets/components/Nav_bar"

import UserDashboard from './assets/components/User-dashboard'; 

import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Home from './assets/components/Home';
import RegistrationForm from './assets/components/RegistrationForm';

function App() {
  return (
    
   <>
      <Nav_bar></Nav_bar>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/signup" element={<RegistrationForm/>} />
    </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
