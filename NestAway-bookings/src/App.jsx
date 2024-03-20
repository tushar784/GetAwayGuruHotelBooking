import Home from './components/Home';
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
      
      <Router>
      <div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login/>} />
        {/* <Route exact path='/' element={<HotelSearchBar/>} /> */}
      </Routes>
      </div>
    </Router>
    
    </>
  )
}

export default App
