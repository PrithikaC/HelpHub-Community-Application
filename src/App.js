import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginUser from './components/Auth/Login/LoginUser';
import SignupUser from './components/Auth/Signup/SignupUser';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import UpdateProfile from './Profile/UpdateProfile';
import Account from './Profile/Account';
import SignupServ from './components/Auth/Signup/SignupServ';
import LoginServ from './components/Auth/Login/LoginServ';

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Navbar /> 
      <Routes>
        {user && <Route path='/userDashboard' element={<UserDashboard />} />}
        {user && <Route path='/update-profile' element={<UpdateProfile />} />}
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/signupUser" element={<SignupUser />} />
        <Route path="/signupServ"element={<SignupServ/>}/>
        <Route path="/loginServ" element={<LoginServ/>}/>
        <Route path="/" element={<Home />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
