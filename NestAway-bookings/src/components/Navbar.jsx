import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
// import { jwtDecode } from 'jwt-decode'; // Ensure this import is correct and necessary for your use case

function Navbar() {
  const [user ,setUser] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define functions for handling authentication and mobile menu toggling
  
  return (
    <div className="flex bg-white fixed z-10 w-full">
      <header className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl md:text-3xl font-bold"> {/* Adjusted text size for mobile */}
          NestAway
          </Link>
          <nav className="hidden md:flex md:ml-[17rem]">
            <div className="flex gap-12 ">
              <Link to="/">Home</Link>
              <Link to="">Customer Support</Link>
              <Link to="">About</Link>
            </div>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Button for LG Screen */}
        {/* login */}
        <nav className="hidden md:flex items-center gap-4">
          <Link className="font-semibold mr-4 ml-[18rem]" to="/login">Login</Link>
          {user && (
            <div>
              <h3 className="font-bold py-2">{user.name}</h3>
            </div>
          )}
          
        </nav>
        {/* sign up */}
        <nav className="hidden md:flex items-center gap-4">
          <Link className="bg-[#90CCBA] text-white font-bold py-1 mt-[0.75rem] ml-[1rem] px-4 rounded h-10" to="/SignUp">Sign Up</Link>
          {user && (
            <div>
              <h3 className="font-bold py-2">{user.name}</h3>
            </div>
          )}
      
        </nav>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Customer Support</Link>
            <Link to="" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>Login</Link>
            <Link to="/SignUp" className="block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>SignUp</Link>
           
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

// logic for login
const handleLoginClick = (history) => {
  history.push("/login");
};














// final
// import { Link } from "react-router-dom"

//     // logic for login
//         const handleLoginClick = (history) => {
//         history.push('/login');
//     };

//     // logic for signup
//         const signupp = (history) => {
//         history.push('/signup');
//     };
  

// function Navbar(){
//     return (
//         <>
       
//             {/* Navbar */}
//         <div className="flex bg-white fixed z-10 w-full ">
//             <ul className="flex space-x-8 justify-center font-semibold ">

//                 <div className="ml-2"><li><h1 className="font-bold text-xl p-4">NestAway</h1></li></div>
//                 <div className=" flex justify-evenly pl-[300px]">
//                 {/* <li className="p-4">Home</li> */}
//                 <li className="p-4"><Link to='/' >Home</Link></li>
//                 <li className="p-4">Customer Support</li>
//                 <li className="p-4">About</li></div>
//            </ul>

//              {/* Navbar Login button */}
//             <Link to="/login"><button className="font-semibold ml-80 mt-4" onClick={() => handleLoginClick()}> Login</button></Link>

//             <Link to="/signup"><button className="bg-[#90CCBA] text-white font-bold py-1 mt-[0.75rem] ml-[1rem] px-4 rounded h-10" onClick={() =>signupp()}>Sign up</button></Link>
//        </div>
       
       
//         </>
//       )
//     }


// export default Navbar









// function Navbar() {
//   return (
//     <>
//       {/* Navbar */}
//       <div className="flex bg-white fixed z-10 w-full ">
//         <ul className="flex space-x-8 justify-center font-semibold ">
//           <div className="ml-2">
//             <li>
//               <h1 className="font-bold text-xl p-4">NestAway</h1>
//             </li>
//           </div>
//           <div className=" flex justify-evenly pl-[300px]">
//             {/* <li className="p-4">Home</li> */}
//             <li className="p-4">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="p-4">Customer Support</li>
//             <li className="p-4">About</li>
//           </div>
//         </ul>

//         {/* Navbar Login button */}
//         <Link to="/login">
//           <button
//             className="font-semibold ml-80 mt-4"
//             onClick={() => handleLoginClick()}
//           >
//             {" "}
//             Login
//           </button>
//         </Link>

//         <Link to="/signup">
//           <button
//             className="bg-[#90CCBA] text-white font-bold py-1 mt-[0.75rem] ml-[1rem] px-4 rounded h-10"
//             onClick={() => signupp()}>
//             Sign up
//           </button>
//         </Link>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// gemini
// import { Link } from "react-router-dom";

// // Logic for login (assuming you have a separate login component)
// const handleLoginClick = (history) => {
//   history.push('/login');
// };

// // Logic for signup (assuming you have a separate signup component)
// const signupp = (history) => {
//   history.push('/signup');
// };

// function Navbar() {
//   return (
//     <nav className="bg-white fixed w-full flex justify-between p-4">
//       <div className="flex items-center">
//         <Link to="/">
//           <h1 className="font-bold text-xl">NestAway</h1>
//         </Link>
//       </div>

//       <ul className="hidden sm:flex space-x-8 font-semibold">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>Customer Support</li>
//         <li>About</li>
//       </ul>

//       <div className="flex items-center sm:hidden">
//         <Link to="/login">
//           <button className="font-semibold mr-4" onClick={() => handleLoginClick()}>
//             Login
//           </button>
//         </Link>
//         <Link to="/signup">
//           <button
//             className="bg-[#90CCBA] text-white font-bold py-1 px-4 rounded h-10"
//             onClick={() => signupp()}
//           >
//             Sign up
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
