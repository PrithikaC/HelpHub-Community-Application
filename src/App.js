import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Common/Navbar';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    
   <> 
      <Router>
        
        <Routes>
          <Route path="/" element={<Navbar/>}/>
        </Routes>
        
      </Router>
      
    </>
    
  );
}

export default App;
