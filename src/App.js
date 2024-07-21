import React from 'react';

import './App.css';
import Login from './components/Auth/Login/LoginUser';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import {Route, Routes } from 'react-router-dom';
import UpdateProfile from './components/Profile/UpdateProfile';
import Account from './components/Profile/Account';
import Signup from './components/Auth/Signup/SignupUser';
import LoginServ from './components/Auth/Login/LoginServ';
import SignupServ from './components/Auth/Signup/SignupServ';

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Navbar /> 
      <Routes>
        {user && <Route path='/userDashboard' element={<UserDashboard />} />}
        {user && <Route path='/updateProfile' element={<UpdateProfile />} />}
        <Route path="/loginUser" element={<Login />} />
        <Route path="/signupUser" element={<Signup />} />
        <Route path="/loginServ" element={<LoginServ/>} />
        <Route path="/signupServ" element={<SignupServ />} />
        <Route path="/" element={<Home />} />
        <Route path='/account' element={<Account/>}/>
      </Routes>
      </>
  );
}

export default App;
