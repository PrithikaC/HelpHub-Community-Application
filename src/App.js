import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginUser from './components/Auth/Login/LoginUser';
import SignupUser from './components/Auth/Signup/SignupUser';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import UserDashboard from './components/Dashboard/UserDashboard';
import SignupServ from './components/Auth/Signup/SignupServ';
import LoginServ from './components/Auth/Login/LoginServ';
import UpdateProfile from './components/Profile/UpdateProfile';
import Account from './components/Profile/Account';


function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <Navbar /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signupUser" element={<SignupUser />} />
          <Route path="/signupServ"element={<SignupServ/>}/>
          <Route path="/loginUser" element={<LoginUser />} />
          <Route path="/loginServ" element={<LoginServ/>}/>
           {user && <Route path='/userDashboard' element={<UserDashboard />} />}
           {user && <Route path='/updateProfile' element={<UpdateProfile />} />}
          <Route path='/account' element={<Account />} />

      </Routes>
    </>
  );
}

export default App;
