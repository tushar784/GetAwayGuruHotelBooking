import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./components/Signup";
import Home from './Pages/Home'
import Hotels from "./Pages/Hotels";
import { AuthProvider } from "./Context/Auth_Context";

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Home />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path= '/hotels' element={<Hotels />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
