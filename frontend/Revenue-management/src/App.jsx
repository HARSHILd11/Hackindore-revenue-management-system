import { useState,useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from "./assets/components/Nav_bar"
import { getToken } from "firebase/messaging";
import {  messaging } from "./firebase"
import UserDashboard from './assets/components/User-dashboard'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home';
import RegistrationForm from './assets/components/RegistrationForm';
import Calculator from './assets/components/Calculator';
import Signup from './assets/components/Signup';
import Signin from './assets/components/Signin';
import PaymentPage from './assets/components/PaymentPage'

function App() {
  async function requestPermission(){
    const permission= await Notification.requestPermission()
    if(permission==='granted'){
     //generate token

    const token=await getToken(messaging,{vapidKey:'BBguRiwWO3I6I8pOpaD9CuYncXeAkW1x0hUHTawypLoY_2KdhbqYf8ISwhcqvicGkXHPOMh_2vXWkO1N52reUjI'

});
    console.log(token)
    }
    else if(permission==='denied'){
     alert("you denied permission ");

    }
   }

  useEffect(()=>{
    //req user for notification permission 
   
    requestPermission();
  },[])
  return (
    
   <>
    <BrowserRouter>
      <Nav_bar></Nav_bar>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/signup" element={<RegistrationForm/>} />
      <Route path='/calculator' element={<Calculator></Calculator>}></Route>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path='/payments' element={<PaymentPage></PaymentPage>}></Route>
    </Routes>
    <ToastContainer theme='light'></ToastContainer>
  </BrowserRouter>
   </>
  );
}

export default App;
