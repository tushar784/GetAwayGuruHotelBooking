import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Signup from "../components/Signup";
import Hotels from '../Pages/Hotels';
import { AuthProvider } from '../Context/Auth_Context';
import Login from '../components/Login';
import HotelInfoPage from '../Pages/HotelInfoPage';
import CheckoutForm from '../components/CheckoutForm';
import HolidayHome from '../Pages/HolidayHome';
import ProfileSection from '../components/ProfileSection';
import ContactUs from '../components/ContactUs';
import Holidays from '../Pages/Holidays';
import HolidayInfoPage from '../Pages/HolidayInfoPage';
import HolidayImgSection from '../ComponentHoliday/HolidayImgSection';
import HolidayCheckout from '../ComponentHoliday/HolidayCheckout';
import HolidayOrderHistory from '../ComponentHoliday/HolidayOrderHistory';
import Events from '../Pages/Events';


const Routing = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Hotel Routes */}
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/hotels/location/:selectedLocation' element={<Hotels />} />
            <Route path="/hotels/:hotelName" element={<HotelInfoPage />} />
            <Route path="/checkout/:hotelName" element={<CheckoutForm />} />
            {/* <Route path="/hotelOrderHistory" element={<HotelOrderHistory />} /> */}

      
            {/* For Holiday Route */}
            <Route exact path='/holidaypackages' element={<HolidayHome />} />
            <Route exact path='/holidaypackages/location/:selectedLocation' element={<Holidays />} />
            <Route exact path='/holidaypackages/:packageName' element={<HolidayInfoPage /> }/>
            <Route exact path='/holidaypackages/checkout/:packageName' element={<HolidayCheckout/>} />
            <Route exact path='/packagebooking/history/:email' element={<HolidayOrderHistory/>} />

            <Route exact path='/events' element={<Events />} />
            

            {/* For Events Route */}
            <Route path="/events/location/:selectedLocation" element={<Events />} />



            <Route exact path='/profile' element={<ProfileSection />} />
            <Route exact path='/contact' element={<ContactUs />} />


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Routing;