import Login from './components/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home';
import Hotels from './HotelList/Hotels';
// import HotelCard from './HotelList/HotelCard';
// import Navbar from './components/Navbar'
function App() {
  
  return (
    <>
    <Router>
   <div>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/signup' Component={SignUp}/>
      <Route exact path='/Hotels' Component={Hotels}/>
    </Routes>
   </div>
      </Router>
    </>
  )
}

export default App


