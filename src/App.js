import React from 'react';

import './App.css';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import UserDashboard from './components/User/UserDashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Navbar />
      <Routes>
        {user && <Route path='/userDashboard' element={<UserDashboard />} />}
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;