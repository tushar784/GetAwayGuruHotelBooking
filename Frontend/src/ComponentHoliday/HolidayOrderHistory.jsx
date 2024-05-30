import React, { useState, useEffect, useContext } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { AuthContext } from "../Context/Auth_Context";

function HolidayOrderHistory() {
  const [bookings, setBookings] = useState([]);
  const [hotelBookings, setHotelBookings] = useState([]);
  const [eventBookings, setEventBookings] = useState([]);
  const [bookingType, setBookingType] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchBookings = async () => {
      if (user && user.email) {
        try {
          const url = import.meta.env.VITE_BASE_URL;

          const [packageBookingResponse, hotelBookingResponse, eventsBookingResponse] = await Promise.all([
            axios.get(`${url}/api/packagebooking/history/${user.email}`),
            axios.get(`${url}/api/hotelbooking/history/${user.email}`),
            axios.get(`${url}/api/events/history/${user.email}`)
          ]);

          setBookings(packageBookingResponse.data);
          setHotelBookings(hotelBookingResponse.data);
          setEventBookings(eventsBookingResponse.data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        } 
      }
    };

    fetchBookings();
  }, [user]);

  const toggleDropdown = (index, type) => {
    const updatedBookings = [...(type === 'package' ? bookings : type === 'hotel' ? hotelBookings : eventBookings)];
    updatedBookings[index].isOpen = !updatedBookings[index].isOpen;
    type === 'package' ? setBookings(updatedBookings) : type === 'hotel' ? setHotelBookings(updatedBookings) : setEventBookings(updatedBookings);
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
                <div className={`p-1 ${booking.isOpen ? 'border border-dashed border-2 border-gray-400' : ''}`}>
                  <div className="flex items-center p-4 cursor-pointer bg-white" onClick={() => toggleDropdown(index, 'package')}>
                    <div className="text-gray-500">
                      <p>Order no: {booking.razorpay_order_id}</p>
                      <p>Transaction id: {booking.razorpay_payment_id}</p>
                      <div className="font-semibold text-lg text-black">
                        <h3 className="text-lg">{booking.Packages_Name}</h3>
                        <p>₹{booking.amount}</p>
                      </div>
                    </div>
                    <div className="ml-auto">{booking.isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
                  </div>
                  {booking.isOpen && (
                    <div className="font-semibold p-4 flex justify-between">
                      <div>
                        <p>Booking date:</p>
                        <p>Departure date:</p>
                        <p>Guests:</p>
                        <p>Rooms:</p>
                      </div>
                      <div className="text-right mr-2">
                        <p>{booking.orderDate}</p>
                        <p>{booking.Departure_Date}</p>
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
                <div className={`p-1 ${booking.isOpen ? 'border border-dashed border-2 border-gray-400' : ''}`}>
                  <div className="flex items-center p-4 cursor-pointer bg-white" onClick={() => toggleDropdown(index, 'hotel')}>
                    <div className="text-gray-500">
                      <p>Order no: {booking.razorpay_order_id}</p>
                      <p>Transaction id: {booking.razorpay_payment_id}</p>
                      <div className="font-semibold text-lg text-black">
                        <h3 className="text-lg">{booking.Hotel_Name}</h3>
                        <h3 className="text-lg">{booking.room_Type}</h3>
                        <p>₹{booking.amount}</p>
                      </div>
                    </div>
                    <div className="ml-auto">{booking.isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
                  </div>
                  {booking.isOpen && (
                    <div className="font-semibold p-4 flex justify-between">
                      <div>
                        <p>Booking date:</p>
                        <p>Check-in:</p>
                        <p>Check-out:</p>
                        <p>Guests:</p>
                        <p>Rooms:</p>
                      </div>
                      <div className="text-right mr-2">
                        <p>{booking.orderDate}</p>
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

          <h2 className="text-2xl font-bold mb-4 mt-8">Your Event Bookings</h2>
          {eventBookings.length > 0 ? (
            eventBookings.map((booking, index) => (
              <div
                key={booking.order_id}
                className={`border p-2 rounded-lg overflow-hidden mb-4 ${booking.isOpen ? 'border-gray-400' : ''}`}
              >
                <div className={`p-1 ${booking.isOpen ? 'border border-dashed border-2 border-gray-400' : ''}`}>
                  <div className="flex items-center p-4 cursor-pointer bg-white" onClick={() => toggleDropdown(index, 'event')}>
                    <div className="text-gray-500">
                      <p>Order no: {booking.razorpay_order_id}</p>
                      <p>Transaction id: {booking.razorpay_payment_id}</p>
                      <div className="font-semibold text-lg text-black">
                        <h3 className="text-lg">{booking.Event_Name}</h3>
                        <p>₹{booking.amount}</p>
                      </div>
                    </div>
                    <div className="ml-auto">{booking.isOpen ? <FaChevronUp /> : <FaChevronDown />}</div>
                  </div>
                  {booking.isOpen && (
                    <div className="font-semibold p-4 flex justify-between">
                      <div>
                        <p>Booking date:</p>
                        <p>Event date:</p>
                        <p>Guests:</p>
                      </div>
                      <div className="text-right mr-2">
                        <p>{booking.orderDate}</p>
                        <p>{booking.Event_Date}</p>
                        <p>{booking.numberOfGuests}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No event bookings found.</p>
          )}

          {bookings.length === 0 && hotelBookings.length === 0 && eventBookings.length === 0 && (
            <p>No bookings found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HolidayOrderHistory;
