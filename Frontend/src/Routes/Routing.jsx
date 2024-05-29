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
import HolidayPackagesInfo from '../ComponentHoliday/HolidayPackagesInfo';
import ThankyouPage from '../Pages/ThankyouPage';

const Routing = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/hotels/location/:selectedLocation' element={<Hotels />} />
            <Route path="/hotels/:hotelName" element={<HotelInfoPage />} />
            <Route path="/checkout/:hotelName" element={<CheckoutForm />} />
            <Route exact path="/contactpage" element={<ContactUs />} /> {/* Use ContactPage instead of Contact */}
            <Route exact path="/holidaypackagesinfo" element={<HolidayPackagesInfo />} /> 
            <Route path="/thankyoupage" element={<ThankyouPage />} /> 



            {/* For Holiday Route */}
            <Route exact path='/holidaypackages' element={<HolidayHome />} />
            <Route exact path='/profile' element={<ProfileSection />} />
            <Route exact path='/contact' element={<ContactUs />} />


          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default Routing;