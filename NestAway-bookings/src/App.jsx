// import Login from "./components/Login";
import Login from "./Pages/Login";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/Signup";
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";
import { SearchProvider } from "../src/Search_Context/SearchContext";
import Routing from "./Pages/Routing";
function App() {
  return (
    <>
      <Routing />
    </>
      
  );
}

export default App;
