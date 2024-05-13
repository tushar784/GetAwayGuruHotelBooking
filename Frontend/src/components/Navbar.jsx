import { CgProfile } from "react-icons/cg";
import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import { AuthContext } from "../Context/Auth_Context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white text-gray-900 z-50 w-full">
      <header className="container mx-auto md:py-2 md:px-6 py-2 px-2 flex items-center justify-between ">
        <div className="flex items-center">
          <Link to='/'>
            <img src={logo} alt=""
            className="md:h-16 md:w-22 h-8" />
          </Link>
        
          <nav className="hidden md:flex md:ml-[18vw]">
            <div className="flex gap-10 font-semibold text-gray-900">
              <Link to="/" className="">
                Home
              </Link>
              <Link to="/holidaypackages" className="">
              Holiday Packages
              </Link>
              <Link to="" className="">
                Events
              </Link>
              <Link to="/contact" className="">
                Contact Us
              </Link>
             
            </div>
          </nav>
        </div>
        <div className="md:hidden text-gray-900">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
        <nav className="hidden md:flex items-center gap-4">
        {/* <Link
                  to="/cart"
                  className="font-bold py-2 rounded flex items-center"
                >
                  <FaCartPlus className="text-xl" />
                  <span className="text-lg ml-1">Cart</span>
                </Link> */}
          {user ? (
            <div className="relative inline-block text-left">
              <div className="flex items-center">
                
                {/* <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl ml-4">
                  {user.username.charAt(0)}
                </div> */}
                {/* <p className="py-2 px-4 font-bold text-lg ml-2">
                  {user.username}
                </p> */}
                
                <button
                    onClick={toggleDropdown}
                    className="focus:outline-none ml-2 mr-[1rem]"
                >
                    <CgProfile className="h-[2rem] w-[1.4rem]" style={{ width: '1.7rem', height: '1.7rem' }} />
                </button>

              </div>
              {dropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-[12rem] h-[4rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div>
                    <Link
                      to="/profile"
                      className="text-gray-700 px-6 py-2 text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      {/* Profile */}
                      {user?.username}
                    </Link>
                    <br />
                    <button
                      onClick={logout}
                      className="text-gray-700 w-full px-6 py-2 text-left text-sm"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-3"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" >
              <button
                className="flex items-center justify-center bg-[#90CCBA] text-white font-bold py-2 md:px-8 px-[6px] rounded transition-colors duration-300">                
               Login
              </button>
            </Link>
          )}
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-50 overflow-hidden transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div
          className={`absolute inset-0 bg-gray-900 opacity-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-50" : "opacity-0"
            }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
        <div
          className={`absolute left-0 w-3/4 max-w-xs h-screen bg-white shadow-lg transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="px-4 py-6 space-y-2">
            <Link to="/profile">
              <div className="flex items-center mb-4">
                <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-white font-semibold text-[8vw] pb-[1vw] mr-4">
                  {user?.username?.charAt(0)}
                </div>
                <p className="font-bold text-base">{user?.username}</p>
              </div>
            </Link>
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/holidaypackages"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Holiday Packages
            </Link>
            <Link
              to=""
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to=""
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Order History
            </Link>
          
            {/* <Link
              to="/cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cart
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link> */}
            
            {user ? (
              <button
                onClick={logout}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
              >
                Logout
              </button>
              //   </div>
              // </div>
            ) : (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

