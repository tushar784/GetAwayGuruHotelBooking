import Login from './components/Login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import Home from './components/Home';
// import Navbar from './components/Navbar'
function App() {
  
  return (
    <>
    <Router>
   <div>
    <Routes>
      <Route exact path='/Home' Component={Home}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/signup' Component={SignUp}/>
    </Routes>
   </div>
      </Router>
    </>
  )
}

export default App


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         {/* <Route exact path="/" component={Login} /> */}
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
