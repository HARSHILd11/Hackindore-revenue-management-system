import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from "./assets/components/Nav_bar"

import UserDashboard from './assets/components/User-dashboard'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import Signup from './assets/components/Signup';

function App() {
  return (
    
   <>
    <BrowserRouter>
      <Nav_bar></Nav_bar>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    <ToastContainer theme='light'></ToastContainer>
  </BrowserRouter>
   </>
  );
}

export default App;
