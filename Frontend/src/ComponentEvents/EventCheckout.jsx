import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { SiPhonepe } from "react-icons/si";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/Auth_Context';
import axios from 'axios';

const EventCheckout = () => {
  const { user } = useContext(AuthContext);
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);
  const [numGuests, setNumGuests] = useState(1);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/events/name/${eventName}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventName]);

  const totalPrice = event ? (event.Price * numGuests + 89) : null; // Add booking fees of ₹89

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row md:ml-[12rem] mt-8 mx-[1rem]">
        <div className="flex flex-col w-full md:w-[30rem] mb-8 md:mb-0">
          <div className="flex flex-col md:flex-row mb-4">
            <div className="flex flex-col w-full md:w-1/2 md:mr-4 mb-4 md:mb-0">
              <label htmlFor="email" className="block text-base font-semibold mb-2">
                Email
              </label>
              <input
                value={user.email}
                type="email"
                id="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="contact" className="block text-base font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="text"
                id="contact"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                placeholder="Contact number"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row mb-4">
            <div className="w-full md:w-[15em] md:mr-4 mb-4 md:mb-0">
              <label htmlFor="state" className="block text-base font-semibold mb-2">
                State
              </label>
              <select
                id="state"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="">Select State</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CT">Chhattisgarh</option>
                <option value="GA">Goa</option>
                <option value="GJ">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="UT">Uttarakhand</option>
                <option value="WB">West Bengal</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="CH">Chandigarh</option>
                <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                <option value="LD">Lakshadweep</option>
                <option value="DL">Delhi</option>
                <option value="PY">Puducherry</option>
                </select>
            </div>
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="guest" className="block text-base font-semibold mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                id="guest"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                placeholder="Number of guests"
                value={numGuests}
                onChange={(e) => setNumGuests(Math.max(1, parseInt(e.target.value) || 0))}
                min="1"
              />
            </div>
          </div>
          <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded w-full">
            Pay now
          </button>
          <div className="mt-[0.9rem]">
            <div className="flex items-center">
              <input
                type="radio"
                defaultChecked={true}
                className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 flex items-center text-lg font-medium text-fuchsia-900"
              >
                <SiPhonepe className="text-2xl" />
                <span className="ml-1">Phone Pe</span>
              </label>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[21rem] md:ml-[4rem] order-first md:order-last">
          <div className="border border-gray-300 rounded-2xl p-4">
            <h3 className="font-bold mb-4 text-2xl">Order Summary</h3>
            <div className="flex mb-4">
              <img
                src={event?.Main_Img}
                alt={event?.Event_Name}
                className="w-26 h-20 object-cover rounded"
              />
              <div className="px-4">
                <h1 className="text-lg font-bold">{event?.Event_Name}</h1>
              </div>
            </div>
            <div className="px-2 py-2 text-sm font-semibold">
              <div className="mb-2">Venue: {event?.Venue_addr}</div>
              <div className="mb-2">Date: {event?.Date}</div>
              <div className="mb-2">Booking Fees: ₹89</div>
              <div className="mb-2">Ticket: {event ? `₹${event.Price} x ${numGuests} guests = ₹${event.Price * numGuests}` : 'Loading...'}</div>
              <div className="mb-2">No. of Guests: {numGuests}</div>

              <div className="font-bold text-lg mb-2">Total: ₹{totalPrice !== null ? totalPrice : 'Loading...'}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCheckout;

