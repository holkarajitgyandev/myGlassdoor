
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Navbar from './Component/Navbar';

import Home from './Pages/Home';
import Community from './Pages/Community';
import Companies from './Pages/Companies';
import Salary from './Pages/Salary';
import forEmployers from './Pages/forEmployers';
import Jobs from './Pages/Jobs';

function App() {
  

  return (
    
      <div >
        <p>hello</p>
        <Router>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/community' element={<Community/>}/>
        <Route path='/companies' element={<Companies/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/salary' element={<Salary/>}/>
        <Route path='/foremployers' element={<forEmployers/>}/>
      </Routes> 
      </Router>
      
       
  
    </div>

      
      
        
    
  )
}

export default App
