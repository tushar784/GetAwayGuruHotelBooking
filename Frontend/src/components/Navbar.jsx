import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Context/Auth_Context";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const[loading,setLoading]=useState(false);

  // const [user,setUser]= useState("aditya");
  const {user,logout} = useContext(AuthContext);
  console.log(user,"user");
  

  return (
    <>
      <div className="flex bg-white fixed z-50 w-full">
        <header className="container mx-auto py-4 px-2 flex items-center justify-between">
          <div className="flex items-center">
            <div >       
              <img src={logo} alt="" />

            </div>
            <nav className="hidden md:flex md:ml-[13rem] pb-[1rem] ">
              <div className="flex gap-12 ">
                <Link to="/">Home</Link>
                <Link to="" className="">
                  Holiday Packages
                </Link>
                <Link to="">Events</Link>
              </div>
            </nav> 
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="font-bold py-2 mr-[1rem]">Hello {user.username}
                {/* <button
                 className="font-semibold ml-[3rem] bg-gray-200 " to="/" onClick={logout}>
                Logout
              </button> */}
             
              <button type="button" className="text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ml-6" to="/" onClick={logout}>
              Logout
              </button>
              </div> 
            ) : (
              <Link 
              className="bg-white ml-[1rem] text-black hover:bg-gray-100 hover:text-black font-bold border border-gray-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" to="/login">
        
                Login
              </Link>
              
            )}
            {user ? (
              <></> // Remove duplicate user name display (handled above)
            ) : (
              <Link
              className="bg-[#90CCBA] mr-[1rem] ml-[1rem] text-white hover:bg-gray-100 hover:text-black font-bold border border-gray-300  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                // className="bg-[#90CCBA] text-white font-bold py-1 mt-[0.75rem] ml-[1rem] px-4 rounded h-10"
                to="/SignUp"
              >
                SignUp
              </Link>
            )}
          </nav>
        </header>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to=""
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
               Holiday Package
              </Link>
              <Link
                to=""
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
               Events & Concerts
              </Link>
              <Link
                to=""
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/SignUp"
                className="block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                SignUp
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;