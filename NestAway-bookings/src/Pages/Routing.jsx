import { Routes,Route } from 'react-router-dom';  
import Home from './Home'
import Login from './Login';
import Signup from  "./Signup";
import HotelList from '../HotelList/HotelList';


const Routing = () => {
  return (
 <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/hotels' element={<HotelList />} />
        
  </Routes>
  )
};

export default Routing;


