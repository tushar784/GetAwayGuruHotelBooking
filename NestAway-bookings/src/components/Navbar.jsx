import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Context/Auth_Context";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [user,setUser]= useState("aditya");
  const {user} = useContext(AuthContext);
  console.log(user,"user");
 

  // Define functions for handling authentication and mobile menu toggling

  return (
    <>
      <div className="flex bg-white fixed z-50 w-full">
        <header className="container mx-auto py-4 px-2 flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <img src={logo} alt="" />
            </div>
            <nav className="hidden md:flex md:ml-[17rem] ">
              <div className="flex gap-12 ">
                <Link to="/">Home</Link>
                <Link to="" className="">
                  Customer Support
                </Link>
                <Link to="">About</Link>
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

          {/* Button for LG Screen */}
          {/* login */}
          <nav className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="font-bold py-2">Hello {user.email}</div>
            ) : (
              <Link className="font-semibold mr-4 ml-[18rem]" to="/login">
                Login
              </Link>
            )}
            {user ? (
              <></> // Remove duplicate user name display (handled above)
            ) : (
              <Link
                className="bg-[#90CCBA] text-white font-bold py-1 mt-[0.75rem] ml-[1rem] px-4 rounded h-10"
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
                Customer Support
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