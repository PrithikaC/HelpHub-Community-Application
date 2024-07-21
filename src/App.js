import React from 'react';

import './App.css';
import Login from './components/Auth/Login/LoginUser';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import {Route, Routes } from 'react-router-dom';
import UpdateProfile from './components/Profile/UserUpdateProfile';
import Account from './components/Profile/UserAccount';
import Signup from './components/Auth/Signup/SignupUser';
import LoginServ from './components/Auth/Login/LoginServ';
import SignupServ from './components/Auth/Signup/SignupServ';
import ServiceProviderDashboard from './components/Dashboard/ServiceProviderDashboard';

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupUser" element={<Signup />} />
        <Route path="/signupServ" element={<SignupServ />} />
        <Route path="/loginUser" element={<Login />} />
        <Route path="/loginServ" element={<LoginServ/>} />
        {user && <Route path='/userDashboard' element={<UserDashboard />} />}
        <Route path="/serviceProviderDashboard" element={<ServiceProviderDashboard/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/updateProfile' element={<UpdateProfile />} />

        
        
      </Routes>
      </>
  );
}

export default App;
