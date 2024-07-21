import React from 'react';

import './App.css';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import {Route, Routes } from 'react-router-dom';
import UpdateProfile from './Profile/UpdateProfile';
import Account from './Profile/Account';

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Navbar /> 
      <Routes>
        {user && <Route path='/userDashboard' element={<UserDashboard />} />}
        {user && <Route path='/updateProfile' element={<UpdateProfile />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path='/account' element={<Account/>}/>
      </Routes>
      </>
  );
}

export default App;
