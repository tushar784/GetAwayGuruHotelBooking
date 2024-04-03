import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Home from "./Pages/Home";
import Hotels from "./Pages/Hotels";
import { SearchProvider } from "../src/Search_Context/SearchContext";
function App() {
  return (
    <>
      <Router>
        <div>
          <SearchProvider>
            <Routes>
              <Route exact path="/" Component={Home} />
              <Route exact path="/login" Component={Login} />
              <Route exact path="/signup" Component={SignUp} />
              <Route exact path="/Hotels" Component={Hotels} />
            </Routes>
          </SearchProvider>
        </div>
      </Router>
    </>
  );
}

export default App;
