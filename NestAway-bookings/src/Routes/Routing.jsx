import { BrowserRouter, Routes,Route } from 'react-router-dom';  
import Home from '../Pages/Home'
import Signup from  "../components/Signup";
import Hotels from '../Pages/Hotels';
import { AuthProvider } from '../Context/Auth_Context';
import Login from '../components/Login'

const Routing = () => {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path= '/hotels' element={<Hotels />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
};

export default Routing;

