import './App.css';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import UserDashboard from './components/User/UserDashboard';

function App() {
  const user=localStorage.getItem("token")
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path='/' element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          {user && <Route path='/userDashboard' element={<UserDashboard/>}/>}
        </Routes>
      </Router>
    </>
  );
}

export default App;
