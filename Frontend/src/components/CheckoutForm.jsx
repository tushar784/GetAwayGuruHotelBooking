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
      {/* Mobile View Summary Box */}
      <div className="md:ml-[4rem] mb-4 md:flex md:hidden w-[20rem] h-[26em]  ">
        {/* Summary Box Content */}
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
      <h1 className="ml-[7rem] text-xl font-semibold mt-10 mb-2">Customer Details</h1>
      <div className="md:ml-[10rem] flex mt-[1rem]">
        <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Form Fields */}
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label htmlFor="number" className="block text-base font-semibold mb-2">
                  Contact No: 
                </label>
                <input
                  type="text"
                  id="number"
                  placeholder="Phone No"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
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
                  // value={quantity}
                  // onChange={(e) => setQuantity(parseInt(e.target.value))}
                
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

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>

      {/* Desktop View For Summary Box */}
      <div className="md:ml-[4rem] mb-4 md:flex hidden w-[25rem] h-[23rem]  ">
        {/* Summary Box Content */}
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
          </div>
      </div>
      </div>

    </>
  );
};

export default CheckoutForm;


















// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import { SiPhonepe } from "react-icons/si";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const CheckoutForm = () => {
//   const { hotelName } = useParams();
//   const [roomType, setRoomType] = useState("");
//   const [price, setPrice] = useState(0);
//   const [hotel, setHotel] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [state, setState] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [rooms, setRooms] = useState(1);
//   const [guests, setGuests] = useState(1);

//   useEffect(() => {
//     const fetchHotelDetails = async () => {
//       try {
//         const url = import.meta.env.VITE_BASE_URL;
//         const response = await axios.get(`${url}/api/hotels/${hotelName}`);
//         setHotel(response.data);
//       } catch (error) {
//         console.error("Error fetching hotel details:", error);
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
//       <Navbar />

//                   {/* Mobile View Summery Box */}
//       <div className="md:ml-[4rem] mb-4 md:flex md:hidden w-[20rem] h-[26em]  ">
//           <div className="border border-gray-300 m-2 rounded-2xl p-2">
//             <h3 className="font-bold mb-4 text-xl mt-2">Summary</h3>
//             <div className="flex">
//               <img
//                 src={hotel?.Image_1}
//                 alt="Hotel"
//                 className="w-26 h-20 object-cover rounded "
//               />
//               <h1 className="px-4 text-xl font-bold">{hotel?.Hotel_Name}</h1>
//             </div>
//             <div className="px-2 py-2 text-mx font-semibold">
//               <div className="mb-2">Room : {roomType}</div>
//               <div className="mb-2">Check in: {checkInDate}</div>
//               <div className="mb-2">Check out: {checkOutDate}</div>
//               <div className="mb-2">no. of rooms: {rooms}</div>
//               <div className="mb-2">no. of guest: {guests}</div>
//               <div className="font-bold text-lg mb-2">Price: {price}</div>
//             </div>
//             <button
//               type="submit"
//               className="bg-[#90CCBA] text-white rounded-md px-4 py-2 w-[18rem]"
//             >
//               Pay now
//             </button>
//           </div>
//         </div>


//         {/* Shipping Form */}
//       <h1 className="ml-[7rem] text-xl font-semibold mt-10 mb-2">
//         Customer Details
//       </h1>  
//       <div className="md:ml-[10rem] flex mt-[1rem]">
//         <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
//           <form onSubmit={handleSubmit} className="flex flex-col">
//             <div className="flex flex-col lg:flex-row mb-2">
//               <div className="mb-4 lg:mr-4 flex-auto">
//                 <label
//                   htmlFor="number"
//                   className="block text-base font-semibold mb-2"
//                 >
//                   Contact No: 
//                 </label>
//                 <input
//                   type="text"
//                   id="number"
//                   placeholder="Phone No"
//                   value={pincode}
//                   onChange={(e) => setPincode(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 />
//               </div>
//               <div className="mb-4 lg:mb-0 flex-auto">
//                 <label
//                   htmlFor="state"
//                   className="block text-base font-semibold mb-2"
//                 >
//                   State
//                 </label>
//                 <select
//                   id="state"
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 >
//                   <option value="">eg. Maharashtra</option>
//                   {/* Add more state options here */}
//                 </select>
//               </div>
//             </div>
//             <div className="flex flex-col lg:flex-row mb-2">
//               <div className="mb-4 lg:mr-4 flex-auto">
//                 <label
//                   htmlFor="checkInDate"
//                   className="block text-base font-semibold mb-2"
//                 >
//                   Check in date
//                 </label>
//                 <input
//                   type="date"
//                   id="checkInDate"
//                   value={checkInDate}
//                   onChange={(e) => setCheckInDate(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 />
//               </div>
//               <div className="mb-4 lg:mb-0 flex-auto">
//                 <label
//                   htmlFor="checkOutDate"
//                   className="block text-base font-semibold mb-2"
//                 >
//                   Checkout date
//                 </label>
//                 <input
//                   type="date"
//                   id="checkOutDate"
//                   value={checkOutDate}
//                   onChange={(e) => setCheckOutDate(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 />
//               </div>
//             </div>
            // <div className="flex flex-col lg:flex-row mb-4">
            //   <div className="mb-4 lg:mr-4 flex-auto">
            //     <label
            //       htmlFor="room"
            //       className="block text-base font-semibold mb-2"
            //     >
            //       Rooms
            //     </label>
            //     <input
            //       type="number"
            //       id="room"
            //       placeholder="Room"
            //       value={rooms}
            //       onChange={(e) => {
            //         // Check if the entered value is negative
            //         const value = parseInt(e.target.value);
            //         if (value >= 0) {
            //           // If not negative, update the state
            //           setRooms(value);
            //         } else {
            //           // If negative, set the value to zero
            //           setRooms(0);
            //         }
            //       }}
            //       className="border border-gray-300 rounded-md px-4 py-2 w-full"
            //     />
            //   </div>

            //   <div className="mb-4 lg:mb-0 flex-auto">
            //     <label
            //       htmlFor="guest"
            //       className="block text-base font-semibold mb-2"
            //     >
            //       Guest
            //     </label>
            //     <input
            //       type="number"
            //       id="guest"
            //       placeholder="Guest"
            //       value={guests}
            //       onChange={(e) => {
            //         // Check if the entered value is negative
            //         const value = parseInt(e.target.value);
            //         if (value >= 0) {
            //           // If not negative, update the state
            //           setGuests(value);
            //         } else {
            //           // If negative, set the value to zero
            //           setGuests(0);
            //         }
            //       }}
            //       className="border border-gray-300 rounded-md px-4 py-2 w-full"
            //     />
            //   </div>
            // </div>
          
//             <div className="mb-[0.9rem] flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   checked="checked"
//                   className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label
//                   htmlFor="default-checkbox"
//                   className="ml-2 flex items-center text-lg font-medium text-fuchsia-900"
//                 >
//                   <SiPhonepe className="text-2xl" />
//                   <span className="ml-1">Phone Pe</span>
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/*Desktop View For summary box */}

//         <div className="md:ml-[4rem] mb-4 md:flex hidden w-[25rem] h-[23rem]  ">
//           <div className="border border-gray-300 rounded-2xl pl-4">
//             <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
//             <div className="flex">
//               <img
//                 src={hotel?.Image_1}
//                 alt="Hotel"
//                 className="w-26 h-20 object-cover rounded "
//               />
//               <h1 className="px-4 text-lg font-bold">{hotel?.Hotel_Name}</h1>
//             </div>
//             <div className="px-2 py-2 text-mx font-semibold">
//               <div className="mb-2">Room : {roomType}</div>
//               <div className="mb-2">Check in: {checkInDate}</div>
//               <div className="mb-2">Check out: {checkOutDate}</div>
//               <div className="mb-2">No. of rooms: {rooms}</div>
//               <div className="mb-2">No. of guest: {guests}</div>
//               <div className="font-bold text-lg mb-2">Price: {price}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CheckoutForm;
