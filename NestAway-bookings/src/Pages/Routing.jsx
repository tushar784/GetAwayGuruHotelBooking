import { Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Signup from  "./Signup"
import HotelList from './HotelList';
import About from './About';

const Routing = () => {
  return (
 <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path= '/hotellist' element={<HotelList />} />
        <Route exact path= '/about' element={<About/>} />

        {/* <Route exact path='/hotellist' element = {<hotellist/>}/> */}
        {/* <Route exact path='/' element={<HotelSearchBar/>} /> */}
        
  </Routes>
  )
};

export default Routing;


