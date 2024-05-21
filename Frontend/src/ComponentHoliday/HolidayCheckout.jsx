import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import { SiPhonepe } from "react-icons/si";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Auth_Context";

const  HolidayCheckout = () => {
  const { packageName } = useParams();
  const [roomType, setRoomType] = useState("");
  const [basePrice, setBasePrice] = useState(0); // Base price for a single room with up to 4 guests
  const [holiday, setHoliday] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const { user } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const [contactNumber, setContactNumber] = useState("");
  const [breakfast, setBreakfast] = useState(false); // State for breakfast option

  useEffect(() => {
    const fetchHolidayDetails = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/holidaypackages/${packageName}`);
        setHoliday(response.data);
        console.log("data",response.data);
      } catch (error) {
        console.error("Error fetching holiday details:", error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    setBasePrice(parseFloat(params.price));
    setPrice(parseFloat(params.price)); // Set the initial price
    setRooms(parseInt(params.rooms) || 1); // Set the initial number of rooms
    setGuests(parseInt(params.guests) || 1); // Set the initial number of guests
    fetchHolidayDetails();
  }, [packageName]);

  const calculateTotalPrice = (rooms, guests, breakfast) => {
    let totalPrice = basePrice * rooms;

    // Calculate the additional cost for extra guests (more than 4 per room)
    const extraGuestsPerRoom = Math.max(0, guests - rooms * 4);
    const additionalCost = extraGuestsPerRoom * (basePrice / 4); // Adjust the additional cost calculation as needed
    totalPrice += additionalCost;

    // Add breakfast cost if selected
    if (breakfast) {
      totalPrice += 500 * guests;
    }

    return totalPrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_BASE_URL;
      const response = await axios.post(`${url}/api/holidaypackages/booking`, {
        Packages_Name: holiday?.Package_Name,
        checkInDate,
        checkOutDate,
        numberOfGuests: guests,
        numberOfRooms: rooms,
        username: user.username,
        email: user.email,
        state: state,
        // room_Type: roomType,
        // pincode,
        price: price, // Use the calculated total price
      });

      console.log("Order created successfully:", response.data);
      setOrderSuccess(true); // Set orderSuccess to true on successful order creation
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleRoomsChange = (value) => {
    value = Math.max(value, 1);
    setRooms(value);
    setPrice(calculateTotalPrice(value, guests, breakfast));
  };

  const handleGuestsChange = (value) => {
    value = Math.max(value, 1);
    setGuests(value);
    setPrice(calculateTotalPrice(rooms, value, breakfast));
  };

  const handleBreakfastChange = (value) => {
    setBreakfast(value);
    setPrice(calculateTotalPrice(rooms, guests, value));
  };

  const statesList = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <>
      <Navbar />

      {/* Mobile View Summery Box */}
      <div className="font-poppins md:hidden">
        <div className="border border-gray-300 rounded-2xl pl-4 mb-4">
          <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
          <div className="flex">
            <img
              src={holiday?.Card_imgae}
              alt="Hotel"
              className="w-26 h-20 object-cover rounded "
            />
            <h1 className="px-4 text-lg font-bold">{holiday?.Package_Name}</h1>
          </div>
          <div className="px-2 py-2 text-mx font-semibold">
            {/* <div className="mb-2">Room : {roomType}</div> */}
            <div className="mb-2">Check in: {checkInDate}</div>
            <div className="mb-2">Check out: {checkOutDate}</div>
            <div className="mb-2">No. of rooms: {rooms}</div>
            <div className="mb-2">No. of guest: {guests}</div>
            <div className="mb-2">Breakfast: {breakfast ? "Yes" : "No"}</div>
            <div className="font-bold text-lg mb-2">Price: {price}</div>
          </div>
        </div>
      </div>

      {/* Customer details Form */}
      <h1 className="font-poppins ml-[7rem] text-xl font-semibold mt-10 mb-2">
        Customer Details
      </h1>
      <div className="font-poppins md:ml-[10rem] flex mt-[1rem]">
        <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
          <form className="flex flex-col">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label htmlFor="number" className="block text-base font-semibold mb-2">
                  Contact No: 
                </label>
                <input
                  type="tel"
                  id="number"
                  placeholder="Phone No"
                  pattern="[0-9]{10}"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4 lg:mb-0 flex-auto">
                <label htmlFor="state" className="block text-base font-semibold mb-2">
                  State
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                >
                  <option value="">Select State</option>
                  {statesList.map((stateName, index) => (
                    <option key={index} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Other Form Fields */}
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="checkInDate"
                  className="block text-base font-semibold mb-2"
                >
                  Check in date
                </label>
                <input
                  type="date"
                  id="checkInDate"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4 lg:mb-0 flex-auto">
                <label
                  htmlFor="checkOutDate"
                  className="block text-base font-semibold mb-2"
                >
                  Checkout date
                </label>
                <input
                  type="date"
                  id="checkOutDate"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
            </div>

            {/* room and guest */}

            <div className="flex flex-col lg:flex-row mb-4">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="room"
                  className="block text-base font-semibold mb-2"
                >
                  Rooms
                </label>
                <input
                  type="number"
                  id="room"
                  placeholder="Room"
                  value={rooms}
                  onChange={(e) => handleRoomsChange(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>

              <div className="mb-4 lg:mb-0 flex-auto">
                <label
                  htmlFor="guest"
                  className="block text-base font-semibold mb-2"
                >
                  Guest
                </label>
                <input
                  type="number"
                  id="guest"
                  placeholder="Guest"
                  value={guests}
                  onChange={(e) => handleGuestsChange(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
            </div>

            <div className="mb-[0.9rem] flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked="checked"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Desktop View For Summary Box */}
        <div className="md:ml-[4rem] mb-4 md:flex hidden w-[25rem] h-[25rem]">
          <div className="border border-gray-300 rounded-2xl pl-4">
            <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
            <div className="flex">
              <img
                src={holiday?.Card_imgae}
                alt="holiday"
                className="w-26 h-20 object-cover rounded "
              />
              <h1 className="px-4 text-lg font-bold">{holiday?.Package_Name}</h1>
            </div>
            <div className="px-2 py-2 text-mx font-semibold">
              <div className="mb-2">Room : {roomType}</div>
              <div className="mb-2">Check in: {checkInDate}</div>
              <div className="mb-2">Check out: {checkOutDate}</div>
              <div className="mb-2">No. of rooms: {rooms}</div>
              <div className="mb-2">No. of guest: {guests}</div>
              {/* <div className="mb-2">Breakfast: {breakfast ? "Yes" : "No"}</div> */}
              <div className="font-bold text-lg mb-2">Price: {price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayCheckout;