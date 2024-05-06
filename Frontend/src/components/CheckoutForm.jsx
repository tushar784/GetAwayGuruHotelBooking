import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SiPhonepe } from "react-icons/si";
import axios from "axios";
import { useParams } from "react-router-dom";

const CheckoutForm = () => {
  const { hotelName } = useParams();
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState(0);
  const [hotel, setHotel] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/hotels/${hotelName}`);
        setHotel(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    setRoomType(params.roomType);
    setPrice(parseFloat(params.price));

    fetchHotelDetails();
  }, [hotelName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar />

                  {/* Mobile View Summery Box */}
      <div className="md:ml-[4rem] mb-4 md:flex md:hidden w-[20rem] h-[26em]  ">
          <div className="border border-gray-300 m-2 rounded-2xl p-2">
            <h3 className="font-bold mb-4 text-xl mt-2">Summary</h3>
            <div className="flex">
              <img
                src={hotel?.Image_1}
                alt="Hotel"
                className="w-26 h-20 object-cover rounded "
              />
              <h1 className="px-4 text-xl font-bold">{hotel?.Hotel_Name}</h1>
            </div>
            <div className="px-2 py-2 text-mx font-semibold">
              <div className="mb-2">Room : {roomType}</div>
              <div className="mb-2">Check in: {checkInDate}</div>
              <div className="mb-2">Check out: {checkOutDate}</div>
              <div className="mb-2">no. of rooms: {rooms}</div>
              <div className="mb-2">no. of guest: {guests}</div>
              <div className="font-bold text-lg mb-2">Price: {price}</div>
            </div>
            <button
              type="submit"
              className="bg-[#90CCBA] text-white rounded-md px-4 py-2 w-[18rem]"
            >
              Pay now
            </button>
          </div>
        </div>


        {/* Shipping Form */}
      <h1 className="ml-[7rem] text-xl font-semibold mt-10 mb-2">
        Customer Details
      </h1>  
      <div className="md:ml-[10rem] flex mt-[1rem]">
        <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col lg:flex-row ">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="name"
                  className="block text-base font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4 flex-auto mb-4 lg:mb-0 flex-auto">
                <label
                  htmlFor="email"
                  className="block text-base font-semibold lg:mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-base font-semibold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>

            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="pincode"
                  className="block text-base font-semibold mb-2"
                >
                  Pincode
                </label>
                <input
                  type="text"
                  id="pincode"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4 lg:mb-0 flex-auto">
                <label
                  htmlFor="state"
                  className="block text-base font-semibold mb-2"
                >
                  State
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                >
                  <option value="">eg. Maharashtra</option>
                  {/* Add more state options here */}
                </select>
              </div>
            </div>
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
            <div className="flex flex-col lg:flex-row mb-4">
              {/* <div className="mb-4 lg:mr-4 flex-auto">
            <label htmlFor="room" className="block text-base font-semibold mb-2">
              Rooms
            </label>
            <input
              type="number"
              id="room"
              placeholder="Room"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div> */}

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
                  onChange={(e) => {
                    // Check if the entered value is negative
                    const value = parseInt(e.target.value);
                    if (value >= 0) {
                      // If not negative, update the state
                      setRooms(value);
                    } else {
                      // If negative, set the value to zero
                      setRooms(0);
                    }
                  }}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>

              {/*           
          <div className="mb-4 lg:mb-0 flex-auto">
            <label htmlFor="guest" className="block text-base font-semibold mb-2">
              Guest
            </label>
            <input
              type="number"
              id="guest"
              placeholder="Guest"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
          </div> */}

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
                  onChange={(e) => {
                    // Check if the entered value is negative
                    const value = parseInt(e.target.value);
                    if (value >= 0) {
                      // If not negative, update the state
                      setGuests(value);
                    } else {
                      // If negative, set the value to zero
                      setGuests(0);
                    }
                  }}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
            </div>
            {/* <div className="flex items-center mb-4">
          <input
            type="radio"
            checked="checked"
            className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <label htmlFor="default-checkbox" className="ml-2 flex items-center text-lg font-medium text-fuchsia-900">
            <span className="ml-1">Phone Pe</span>
          </label>
        </div> */}

            <div className="mb-[0.9rem] flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked="checked"
                  className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
                  onChange={(e) => setEmail(e.target.value)}
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

            <button
              type="submit"
              className="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/*Desktop View For summary box */}

        <div className="md:ml-[4rem] mb-4 md:flex hidden w-[25rem] h-[26em]  ">
          <div className="border border-gray-300 rounded-2xl pl-4">
            <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
            <div className="flex">
              <img
                src={hotel?.Image_1}
                alt="Hotel"
                className="w-26 h-20 object-cover rounded "
              />
              <h1 className="px-4 text-lg font-bold">{hotel?.Hotel_Name}</h1>
            </div>
            <div className="px-2 py-2 text-mx font-semibold">
              <div className="mb-2">Room : {roomType}</div>
              <div className="mb-2">Check in: {checkInDate}</div>
              <div className="mb-2">Check out: {checkOutDate}</div>
              <div className="mb-2">No. of rooms: {rooms}</div>
              <div className="mb-2">No. of guest: {guests}</div>
              <div className="font-bold text-lg mb-2">Price: {price}</div>
            </div>
            <button
              type="submit"
              className="bg-[#90CCBA] text-white rounded-md px-4 py-2 w-[23rem]"
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;





















// import React, { useEffect, useState } from 'react';
// import Navbar from './Navbar';
// import { SiPhonepe } from 'react-icons/si';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { FaArrowDown as ArrowDownIcon, FaArrowUp as ArrowUpIcon } from 'react-icons/fa';

// const CheckoutForm = () => {
//   const { hotelName } = useParams();
//   const [roomType, setRoomType] = useState('');
//   const [price, setPrice] = useState(0);
//   const [hotel, setHotel] = useState(null)
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [state, setState] = useState('');
//   const [room, setroom] = useState('');
//   const [guest, setguest] = useState('');
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [rooms, setRooms] = useState(1);
//   const [guests, setGuests] = useState(1);

//   useEffect(() => {
//     const fetchHotelDetails = async () => {
//       try {
//         const url = import.meta.env.VITE_BASE_URL;
//         const response = await axios.get(`${url}/api/hotels/${hotelName}`);
//         setHotel(response.data);
//       } catch (error) {
//         console.error('Error fetching hotel details:', error);
//       }
//     };

//     const urlParams = new URLSearchParams(window.location.search);
//     const params = Object.fromEntries(urlParams.entries());
//     setRoomType(params.roomType);
//     setPrice(parseFloat(params.price));

//     fetchHotelDetails();
//   }, [hotelName]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <>
//     <Navbar />
//      <h1 className='ml-[7rem] text-xl font-semibold mt-10 mb-2'>Shipping Address</h1>
//     <div className="md:ml-[10rem] flex mt-[1rem]">

//     <div className='flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22'>
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <div className='flex flex-col lg:flex-row '>
//           <div className="mb-4 lg:mr-4 flex-auto">
//             <label htmlFor="name" className="block text-base font-semibold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//           <div className="mb-4 flex-auto mb-4 lg:mb-0 flex-auto">
//             <label htmlFor="email" className="block text-base font-semibold lg:mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-base font-semibold mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//           />
//         </div>

//         <div className="flex flex-col lg:flex-row mb-2">
//           <div className="mb-4 lg:mr-4 flex-auto">
//             <label htmlFor="pincode" className="block text-base font-semibold mb-2">
//               Pincode
//             </label>
//             <input
//               type="text"
//               id="pincode"
//               placeholder="Pincode"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//           <div className="mb-4 lg:mb-0 flex-auto">
//             <label htmlFor="state" className="block text-base font-semibold mb-2">
//               State
//             </label>
//             <select
//               id="state"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             >
//               <option value="">eg. Maharashtra</option>
//               {/* Add more state options here */}
//             </select>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row mb-2">
//           <div className="mb-4 lg:mr-4 flex-auto">
//             <label htmlFor="checkInDate" className="block text-base font-semibold mb-2">
//               Check in date
//             </label>
//             <input
//               type="date"
//               id="checkInDate"
//               value={checkInDate}
//               onChange={(e) => setCheckInDate(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//           <div className="mb-4 lg:mb-0 flex-auto">
//             <label htmlFor="checkOutDate" className="block text-base font-semibold mb-2">
//               Checkout date
//             </label>
//             <input
//               type="date"
//               id="checkOutDate"
//               value={checkOutDate}
//               onChange={(e) => setCheckOutDate(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row mb-4">

//           {/* <div className="mb-4 lg:mr-4 flex-auto">
//             <label htmlFor="room" className="block text-base font-semibold mb-2">
//               Rooms
//             </label>
//             <input
//               type="number"
//               id="room"
//               placeholder="Room"
//               value={rooms}
//               onChange={(e) => setRooms(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div> */}

//         <div className="mb-4 lg:mr-4 flex-auto">
//           <label htmlFor="room" className="block text-base font-semibold mb-2">
//             Rooms
//           </label>
//           <input
//             type="number"
//             id="room"
//             placeholder="Room"
//             value={rooms}
//             onChange={(e) => {
//               // Check if the entered value is negative
//               const value = parseInt(e.target.value);
//               if (value >= 0) {
//                 // If not negative, update the state
//                 setRooms(value);
//               } else {
//                 // If negative, set the value to zero
//                 setRooms(0);
//               }
//             }}
//             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//           />
//         </div>

// {/*
//           <div className="mb-4 lg:mb-0 flex-auto">
//             <label htmlFor="guest" className="block text-base font-semibold mb-2">
//               Guest
//             </label>
//             <input
//               type="number"
//               id="guest"
//               placeholder="Guest"
//               value={guests}
//               onChange={(e) => setGuests(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div> */}

//           <div className="mb-4 lg:mb-0 flex-auto">
//             <label htmlFor="guest" className="block text-base font-semibold mb-2">
//               Guest
//             </label>
//             <input
//               type="number"
//               id="guest"
//               placeholder="Guest"
//               value={guests}
//               onChange={(e) => {
//                 // Check if the entered value is negative
//                 const value = parseInt(e.target.value);
//                 if (value >= 0) {
//                   // If not negative, update the state
//                   setGuests(value);
//                 } else {
//                   // If negative, set the value to zero
//                   setGuests(0);
//                 }
//               }}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>

//         </div>
//         {/* <div className="flex items-center mb-4">
//           <input
//             type="radio"
//             checked="checked"
//             className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label htmlFor="default-checkbox" className="ml-2 flex items-center text-lg font-medium text-fuchsia-900">
//             <span className="ml-1">Phone Pe</span>
//           </label>
//         </div> */}

//       <div className="mb-[0.9rem] flex items-center justify-between">
//           <div className="flex items-center">
//             <input
//               type="radio"
//               checked="checked"
//               className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300" onChange={(e) => setEmail(e.target.value)}
//             />
//             <label htmlFor="default-checkbox" className="ml-2 flex items-center text-lg font-medium text-fuchsia-900">
//               <SiPhonepe className="text-2xl" />
//               <span className="ml-1">Phone Pe</span>
//             </label>
//           </div>
//         </div>

//         <button type="submit" className="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded">
//           Submit
//         </button>
//       </form>
//     </div>

//                     {/* summary box */}

//         <div className="md:ml-[4rem] mb-4 md:flex hidden w-[22rem] h-[26em]  ">

//           <div className="border border-gray-300 rounded-2xl p-2">
//           <h3 className="font-bold mb-4 text-xl mt-2">Summary</h3>
//           <div className="flex">
//           <img
//                 src={hotel?.Image_1}
//                 alt="Hotel"
//                 className="w-26 h-20 object-cover rounded "
//               />
//               <h1 className='px-4 text-xl font-bold'>{hotel?.Hotel_Name}</h1>
//             </div>
//             <div className='px-2 py-2 text-mx font-semibold'>
//                 <div className="mb-2">Room : {roomType}</div>
//                 <div className="mb-2">Check in:  {checkInDate}</div>
//                 <div className="mb-2">Check out:  {checkOutDate}</div>
//                 <div className="mb-2">no. of rooms: {rooms}</div>
//                 <div className="mb-2">no. of guest: {guests}</div>
//                 <div className="font-bold text-lg mb-2">Price: {price}</div>
//             </div>
//             <button
//               type="submit"
//               className="bg-[#90CCBA] text-white rounded-md px-4 py-2 w-full">
//               Pay now
//             </button>
//           </div>
//         </div>

//     </div>

//     </>

//   );
// };

//  export default CheckoutForm;

// import React, { useState } from 'react';

// const CheckoutForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [state, setState] = useState('');
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <div className="max-w-md mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block font-bold mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             placeholder="eg. Tushar Surve"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block font-bold mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="eg. tushar@gmail.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="address" className="block font-bold mb-2">
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             placeholder="eg. 123 Main Street, Anytown, USA"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//           />
//         </div>
//         <div className="flex mb-4">
//           <div className="mr-4">
//             <label htmlFor="pincode" className="block font-bold mb-2">
//               Pincode
//             </label>
//             <input
//               type="text"
//               id="pincode"
//               placeholder="eg. 400001"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//           <div>
//             <label htmlFor="state" className="block font-bold mb-2">
//               State
//             </label>
//             <select
//               id="state"
//               value={state}
//               onChange={(e) => setState(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             >
//               <option value="">eg. Maharashtra</option>
//               {/* Add more state options here */}
//             </select>
//           </div>
//         </div>
//         <div className="flex mb-4">
//           <div className="mr-4">
//             <label htmlFor="checkInDate" className="block font-bold mb-2">
//               Check in date
//             </label>
//             <input
//               type="date"
//               id="checkInDate"
//               value={checkInDate}
//               onChange={(e) => setCheckInDate(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//           <div>
//             <label htmlFor="checkOutDate" className="block font-bold mb-2">
//               Checkout date
//             </label>
//             <input
//               type="date"
//               id="checkOutDate"
//               value={checkOutDate}
//               onChange={(e) => setCheckOutDate(e.target.value)}
//               className="border border-gray-300 rounded-md px-4 py-2 w-full"
//             />
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block font-bold mb-2">Rooms &amp; guests</label>
//           <div className="border border-gray-300 rounded-md px-4 py-2">
//             1 Room &amp; 2 Guests
//           </div>
//         </div>

//         <div className="mb-4">
//           <label className="block font-bold mb-2">Summary</label>
//           <div className="border border-gray-300 rounded-md px-4 py-2">
//             <div>Ibis New Delhi Aerocity - An AccorHotels Brand</div>
//             <div>Standard room</div>
//             <div>GST</div>
//             <div>check in and checkout</div>
//             <div>no. of guest</div>
//             <div>breakfast included or not</div>
//             <div className="font-bold">Total</div>
//           </div>
//         </div>
//         <div className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             id="gstCheckbox"
//             className="mr-2"
//           />
//           <label htmlFor="gstCheckbox">checkbox if gst no. is there not</label>
//         </div>
//         <button
//           type="submit"
//           className="bg-green-500 text-white rounded-md px-4 py-2 w-full"
//         >
//           Pay now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckoutForm;
