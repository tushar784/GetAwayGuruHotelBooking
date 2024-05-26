import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function HotelOrderHistory() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    // Handle logout logic here
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="hidden md:block w-full md:w-[15rem] bg-[#90CCBA]">
          <h2 className="text-2xl font-semibold text-white font-poppins mt-[2rem] md:mt-[5rem] ml-4">Profile</h2>
          <p className='text-xl text-white font-poppins mt-[1rem] ml-4'>Order history</p>
          <Link to="/" className="mb-12" style={{ color: "#90CCBA" }}>
            <button
              onClick={logout}
              className="text-xl text-white font-poppins mt-[1rem] ml-4"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              Logout
            </button>
          </Link>
        </div>
        <div className="w-full md:w-3/4 p-8">
          <h2 className="text-2xl mb-4">Your orders</h2>
          <div className="border rounded-lg overflow-hidden mb-4">
            <div className="flex items-center p-4 cursor-pointer bg-white" onClick={toggleDropdown}>
              <img src="hotel-image.jpg" alt="Hotel" className="w-20 h-20 object-cover mr-4 rounded" />
              
              <div className='text-gray-500'>
                <p>Order no: 2314-tgrt-h887-18ol</p>
                <div className='font-bold text-black'>
                    <h3 className="text-lg">Ibis Hotel</h3>
                    <p>₹6900</p>
                </div>     
              </div>
              <div className="ml-auto">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {isOpen && (
             <div className="font-bold p-4 flex justify-between ml-[6rem]">
             <div>
               <p>Check-in:</p>
               <p>Check-out:</p>
               <p>Guests:</p>
               <p>Rooms:</p>
             </div>
             <div className="text-right mr-2">
               <p>20th Sep 2024</p>
               <p>25th Sep 2024</p>
               <p>2</p>
               <p>1</p>
             </div>
           </div>
           
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelOrderHistory;
