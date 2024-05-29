import React, { useState, useEffect, useContext } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { AuthContext } from "../Context/Auth_Context";

function HolidayOrderHistory() {
  const [bookings, setBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPackageBookings = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const packageBookingResponse = await axios.get(`${url}/api/packagebooking/history/${user.email}`);
        console.log('Package Bookings:', packageBookingResponse.data);
        setBookings(packageBookingResponse.data);
      } catch (error) {
        console.error('Error fetching package bookings:', error);
      }
    };

    fetchPackageBookings();
  }, [user.email]);

  useEffect(() => {
    const fetchHotelBookings = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const hotelBookingResponse = await axios.get(`${url}/api/hotelbooking/history/${user.email}`);
        console.log('Hotel Bookings:', hotelBookingResponse.data);
        setHotelBookings(hotelBookingResponse.data);
      } catch (error) {
        console.error('Error fetching hotel bookings:', error);
      }
    };

    fetchHotelBookings();
  }, [user.email]);

  const toggleDropdown = (index, type) => {
    const updatedBookings = [...(type === 'package' ? bookings : hotelBookings)];
    updatedBookings[index].isOpen = !updatedBookings[index].isOpen;
    type === 'package' ? setBookings(updatedBookings) : setHotelBookings(updatedBookings);
  };

  const logout = () => {
    // Handle logout logic here
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="sticky top-0 left-0 hidden md:block w-full md:w-[18rem] md:h-[12rem] rounded md:ml-[2rem] md:mt-[3rem] bg-[#90CCBA] overflow-y-auto">

          <Link to="/profile">
          <h2 className="text-xl font-semibold text-white font-poppins mt-[2rem] md:mt-[2rem] ml-4">
            Profile
          </h2>
          </Link>
          <p className="text-xl text-white font-poppins mt-[1rem] ml-4">Order history</p>
          <Link to="/" className="mb-12" style={{ color: '#90CCBA' }}>
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
          <h2 className="text-2xl font-bold mb-4">Your Package Bookings</h2>
          {bookings.length > 0 ? (
            bookings.map((booking, index) => (
              <div
                key={booking.order_id}
                className={`border p-2 rounded-lg overflow-hidden mb-4 ${booking.isOpen ? 'border-gray-400' : ''}`}
              >
                <div
                  className={`p-1 ${booking.isOpen ? 'border border-dashed border-2 border-gray-400' : ''}`}
                >
                  <div
                    className="flex items-center p-4 cursor-pointer bg-white"
                    onClick={() => toggleDropdown(index, 'package')}
                  >
                    <div className="text-gray-500">
                      <p>Order no: {booking.order_id}</p>
                      <div className="font-semibold text-lg text-black">
                        <h3 className="text-lg">{booking.Packages_Name}</h3>
                        <p>₹{booking.price}</p>
                      </div>
                    </div>
                    <div className="ml-auto">{booking.isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
                  </div>
                  {booking.isOpen && (
                    <div className="font-semibold p-4 flex justify-between ml-[6rem]">
                      <div>
                        <p>Check-in:</p>
                        <p>Check-out:</p>
                        <p>Guests:</p>
                        <p>Rooms:</p>
                      </div>
                      <div className="text-right mr-2">
                        <p>{booking.checkInDate}</p>
                        <p>{booking.checkOutDate}</p>
                        <p>{booking.numberOfGuests}</p>
                        <p>{booking.numberOfRooms}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No package bookings found.</p>
          )}

          <h2 className="text-2xl font-bold mb-4 mt-8">Your Hotel Bookings</h2>
          {hotelBookings.length > 0 ? (
            hotelBookings.map((booking, index) => (
              <div
                key={booking.order_id}
                className={`border p-2 rounded-lg overflow-hidden mb-4 ${booking.isOpen ? 'border-gray-400' : ''}`}
              >
                <div
                  className={`p-1 ${booking.isOpen ? 'border border-dashed border-2 border-gray-400' : ''}`}
                >
                  <div
                    className="flex items-center p-4 cursor-pointer bg-white"
                    onClick={() => toggleDropdown(index, 'hotel')}
                  >
                    <div className="text-gray-500">
                      <p>Order no: {booking.order_id}</p>
                      <div className="font-semibold text-lg text-black">
                        <h3 className="text-lg">{booking.Hotel_Name}</h3>
                        <h3 className="text-lg">{booking.room_Type}</h3>
                        <p>₹{booking.price}</p>
                      </div>
                    </div>
                    <div className="ml-auto">{booking.isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
                  </div>
                  {booking.isOpen && (
                    <div className="font-semibold p-4 flex justify-between ml-[6rem]">
                      <div>
                        <p>Check-in:</p>
                        <p>Check-out:</p>
                        <p>Guests:</p>
                        <p>Rooms:</p>
                      </div>
                      <div className="text-right mr-2">
                        <p>{booking.checkInDate}</p>
                        <p>{booking.checkOutDate}</p>
                        <p>{booking.numberOfGuests}</p>
                        <p>{booking.numberOfRooms}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No hotel bookings found.</p>
          )}

          {bookings.length === 0 && hotelBookings.length === 0 && (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HolidayOrderHistory;
















// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

// function HolidayOrderHistory() {
//   const [isOpen, setIsOpen] = useState(false);


  

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const logout = () => {
//     // Handle logout logic here
//   };

  

//   return (
//     <>
//       <Navbar />
//       <div className="flex h-screen">
//         <div className="hidden md:block w-full md:w-[15rem] bg-[#90CCBA]">
//           <h2 className="text-2xl font-semibold text-white font-poppins mt-[2rem] md:mt-[5rem] ml-4">Profile</h2>
//           <p className='text-xl text-white font-poppins mt-[1rem] ml-4'>Order history</p>
//           <Link to="/" className="mb-12" style={{ color: "#90CCBA" }}>
//             <button
//               onClick={logout}
//               className="text-xl text-white font-poppins mt-[1rem] ml-4"
//               role="menuitem"
//               tabIndex="-1"
//               id="menu-item-3"
//             >
//               Logout
//             </button>
//           </Link>
//         </div>
//         <div className="w-full md:w-3/4 p-8">
//           <h2 className="text-2xl mb-4">Your orders</h2>
//           <div className="border rounded-lg overflow-hidden mb-4">
//             <div className="flex items-center p-4 cursor-pointer bg-white" onClick={toggleDropdown}>
//               <img src="hotel-image.jpg" alt="Hotel" className="w-20 h-20 object-cover mr-4 rounded" />
              
//               <div className='text-gray-500'>
//                 <p>Order no: 2314-tgrt-h887-18ol</p>
//                 <div className='font-bold text-black'>
//                     <h3 className="text-lg">Ibis Hotel</h3>
//                     <p>₹6900</p>
//                 </div>     
//               </div>
//               <div className="ml-auto">
//                 {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </div>
//             </div>
//             {isOpen && (
//              <div className="font-bold p-4 flex justify-between ml-[6rem]">
//              <div>
//                <p>Check-in:</p>
//                <p>Check-out:</p>
//                <p>Guests:</p>
//                <p>Rooms:</p>
//              </div>
//              <div className="text-right mr-2">
//                <p>20th Sep 2024</p>
//                <p>25th Sep 2024</p>
//                <p>2</p>
//                <p>1</p>
//              </div>
//            </div>
           
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HolidayOrderHistory;
