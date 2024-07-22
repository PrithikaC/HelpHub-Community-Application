import React from 'react';

import './App.css';
import Login from './components/Auth/Login/LoginUser';
import Home from './components/Home/Home';
import UserDashboard from './components/Dashboard/UserDashboard';
import {Route, Routes } from 'react-router-dom';
import UserUpdateProfile from './components/Profile/UserUpdateProfile';
import UserAccount from './components/Profile/UserAccount';
import Signup from './components/Auth/Signup/SignupUser';
import LoginServ from './components/Auth/Login/LoginServ';
import SignupServ from './components/Auth/Signup/SignupServ';
import ServiceProviderDashboard from './components/Dashboard/ServiceProviderDashboard';
import ServiceProviderAccount from './components/Profile/ServiceProviderAccount';
import ServUpdateProfile from './components/Profile/ServUpdateProfile';
import ServiceProviderAddEmployee from './components/Profile/ServiceProviderAddEmployee';

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupUser" element={<Signup />} />
        <Route path="/signupServ" element={<SignupServ />} />
        <Route path="/loginUser" element={<Login />} />
        <Route path="/loginServ" element={<LoginServ/>} />
        {user && <Route path='/userDashboard' element={<UserDashboard />} />}
        <Route path='/userAccount' element={<UserAccount/>}/>
        <Route path='/userUpdateProfile' element={<UserUpdateProfile />} />
        <Route path="/serviceProviderDashboard" element={<ServiceProviderDashboard/>}/>
        <Route path="/serviceProviderAccount" element={<ServiceProviderAccount/>}/>
        <Route path="/servUpdateProfile" element={<ServUpdateProfile/>}/>
        <Route path="/addEmployee" element={<ServiceProviderAddEmployee/>}/>
        
        
      </Routes>
      </>
  );
}

export default App;
