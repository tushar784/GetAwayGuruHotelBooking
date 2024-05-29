import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { SiPhonepe } from "react-icons/si";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams,useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth_Context";

const CheckoutForm = () => {
  const { hotelName } = useParams();
  const navigate = useNavigate()
  const [roomType, setRoomType] = useState("");
  const [basePrice, setBasePrice] = useState(0); // Base price for a single room with up to 4 guests
  const [hotel, setHotel] = useState(null);
  const [state, setState] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [orderDate, setOrderDate] = useState("");
  const { user } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const [contactNumber, setContactNumber] = useState("");
  const [breakfast, setBreakfast] = useState(false); // State for breakfast option

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
    setBasePrice(parseFloat(params.price));
    setPrice(parseFloat(params.price)); // Set the initial price
    setRooms(parseInt(params.rooms) || 1); // Set the initial number of rooms
    setGuests(parseInt(params.guests) || 1); // Set the initial number of guests
    fetchHotelDetails();
  }, [hotelName]);

  const calculateTotalPrice = (rooms, guests, breakfast) => {
    let totalPrice = basePrice * rooms;

    // Calculate the additional cost for extra guests (more than 4 per room)
    // const extraGuestsPerRoom = Math.max(0, guests - rooms * 4);
    // const additionalCost = extraGuestsPerRoom * (basePrice / 4); // Adjust the additional cost calculation as needed
    // totalPrice += additionalCost;

    // Add breakfast cost if selected
    if (breakfast) {
      totalPrice += 500 * guests;
    }

    return totalPrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form inputs
    // if (!validateForm()) {
    //   return;
    // }
  
    try {
      const url = import.meta.env.VITE_BASE_URL;

      // Capture current date as orderDate
      const currentOrderDate = new Date().toISOString();

    setOrderDate(currentOrderDate);
      // Prepare the order data
      const orderData = {
        Hotel_Name: hotel?.Hotel_Name,
        checkInDate,
        checkOutDate,
        numberOfGuests: guests,
        numberOfRooms: rooms,
        username: user.username,
        email: user.email,
        state: state,
        room_Type: roomType,
        contact_number: contactNumber,
        breakfast: breakfast, // Include the breakfast option
        amount: price, // Amount in paise (smallest currency unit)
        orderDate: currentOrderDate, // Include orderDate
    
      };
  
      // Create order in the backend
      const response = await axios.post(`${url}/api/hotels/booking`, orderData);
      console.log("ewwww", response.data);
      console.log("data", response.data.hotelBookingDetails);
      if (response.data.hotelBookingDetails) {
        const { amount,razorpayOrderId, key, email, username } = response.data.hotelBookingDetails;
        console.log("hiiewd");
        // Prepare Razorpay options
        const options = {
          key,
          amount,
          currency: 'INR',
          name: "GetAwayGuru Booking",
          description: 'Hotel Booking Payment',
          order_id: razorpayOrderId,
          handler: async function (response) {
            const body = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };
  
            // Validate payment
            const validateRes = await axios.post(`${url}/api/order/validate`, body);
  
            if (validateRes.data.msg === 'success') {
              toast.success('Payment successful');
              navigate(`/thankyou/${response.razorpay_order_id}`);
            } else {
              toast.error('Payment validation failed');
              navigate(`/checkout/${hotelName}`);
            }
          },
          prefill: {
            name: username,
            email: email,
            contact: contactNumber,
          },
          notes: {
            address: `${hotel?.Hotel_Name}, ${state}`,
          },
          theme: {
            color: '#3399cc',
          },
        };
  
        // Initialize Razorpay payment
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      console.error("Error in order creation or payment initiation:", error);
      navigate('/checkout');
    }
  };
  

  const handleRoomsChange = (value) => {
    value = Math.max(value, 1);
    setRooms(value);
    setPrice(calculateTotalPrice(value, guests, breakfast));
  };

  const handleGuestsChange = (value) => {
    // Calculate the maximum number of guests based on the current number of rooms
    const maxGuests = rooms * 3; // Assuming a maximum of 3 guests per room

    // Check if the value exceeds the maximum number of guests
    if (value > maxGuests) {
      // If it exceeds, set the value to the maximum number of guests
      value = maxGuests;
    }

    // Update the state with the new number of guests
    setGuests(value);

    // Recalculate the total price based on the updated number of guests
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
      <div className="font-poppins md:hidden m-4">
        <div className="border border-gray-300 rounded-2xl pl-4 mb-4">
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
          <form onSubmit={handleSubmit} className="flex flex-col">
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

            {/* Breakfast Option */}
            <div className="mb-[0.9rem] flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="withBreakfast"
                  checked={breakfast}
                  onChange={() => handleBreakfastChange(true)}
                  className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
                />
                <label
                  htmlFor="withBreakfast"
                  className="ml-2 flex items-center text-lg font-medium text-fuchsia-900"
                >
                  With Breakfast (+500 Rs per guest)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="withoutBreakfast"
                  checked={!breakfast}
                  onChange={() => handleBreakfastChange(false)}
                  className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
                />
                <label
                  htmlFor="withoutBreakfast"
                  className="ml-2 flex items-center text-lg font-medium text-fuchsia-900"
                >
                  Without Breakfast
                </label>
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
              className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded"
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
              <div className="mb-2">Breakfast: {breakfast ? "Yes" : "No"}</div>
              <div className="font-bold text-lg mb-2">Price: {price}</div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CheckoutForm;























// //final
// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import { SiPhonepe } from "react-icons/si";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { AuthContext } from "../Context/Auth_Context";

// const CheckoutForm = () => {
//   const { hotelName } = useParams();
//   const [roomType, setRoomType] = useState("");
//   const [basePrice, setBasePrice] = useState(0); // Base price for a single room with up to 4 guests
//   const [hotel, setHotel] = useState(null);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [state, setState] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [rooms, setRooms] = useState(1);
//   const [guests, setGuests] = useState(1);
//   const { user } = useContext(AuthContext);
//   const [price, setPrice] = useState(0);
//   const [contact_number, setContact_number] = useState("")

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
//     setBasePrice(parseFloat(params.price));
//     setPrice(parseFloat(params.price)); // Set the initial price
//     setRooms(parseInt(params.rooms) || 1); // Set the initial number of rooms
//     setGuests(parseInt(params.guests) || 1); // Set the initial number of guests
//     fetchHotelDetails();
//   }, [hotelName]);

//   const calculateTotalPrice = (rooms, guests) => {
//     let totalPrice = basePrice * rooms;
  
//     // Calculate the additional cost for extra guests (more than 4 per room)
//     const extraGuestsPerRoom = Math.max(0, guests - rooms * 4);
//     const additionalCost = extraGuestsPerRoom * (basePrice / 4); // Adjust the additional cost calculation as needed
  
//     totalPrice += additionalCost;
  
//     return totalPrice;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     try {
//       const url = import.meta.env.VITE_BASE_URL;
//       const response = await axios.post(`${url}/api/booking/createorder`, {
//         Hotel_Name: hotel?.Hotel_Name,
//         checkInDate,
//         checkOutDate,
//         numberOfGuests: guests,
//         numberOfRooms: rooms,
//         username: user.username,
//         email: user.email,
//         state: state,
//         room_Type: roomType,
//         pincode,
//         price: price, // Use the calculated total price
//       });

//       console.log("Order created successfully:", response.data);
//       setOrderSuccess(true); // Set orderSuccess to true on successful order creation
//     } catch (error) {
//       console.error("Error creating order:", error);
//     }
//   };

//   const handleRoomsChange = (value) => {
//     // Prevent setting rooms to a value less than 1
//     value = Math.max(value, 1);
//     setRooms(value);
//     setPrice(calculateTotalPrice(value, guests));
//   };
  
//   const handleGuestsChange = (value) => {
//     // Prevent setting guests to a value less than 1
//     value = Math.max(value, 1);
//     setGuests(value);
//     setPrice(calculateTotalPrice(rooms, value));
//   };
  
//   const statesList = [
//     "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
//     "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
//     "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
//     "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
//     "Uttar Pradesh", "Uttarakhand", "West Bengal"
//   ];

//   return (
//     <>
//       <Navbar />

//       {/* Mobile View Summery Box */}
//       <div className="font-poppins md:hidden">
//         <div className="border border-gray-300 rounded-2xl pl-4 mb-4">
//           <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
//           <div className="flex">
//             <img
//               src={hotel?.Image_1}
//               alt="Hotel"
//               className="w-26 h-20 object-cover rounded "
//             />
//             <h1 className="px-4 text-lg font-bold">{hotel?.Hotel_Name}</h1>
//           </div>
//           <div className="px-2 py-2 text-mx font-semibold">
//             <div className="mb-2">Room : {roomType}</div>
//             <div className="mb-2">Check in: {checkInDate}</div>
//             <div className="mb-2">Check out: {checkOutDate}</div>
//             <div className="mb-2">No. of rooms: {rooms}</div>
//             <div className="mb-2">No. of guest: {guests}</div>
//             <div className="font-bold text-lg mb-2">Price: {price}</div>
//           </div> 
//         </div>
//         </div>
     

//       {/* Customer details Form */}
//       <h1 className="font-poppins ml-[7rem] text-xl font-semibold mt-10 mb-2">
//         Customer Details
//       </h1>
//       <div className="font-poppins md:ml-[10rem] flex mt-[1rem]">
//         <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
//           <form onSubmit={handleSubmit} className="flex flex-col">
//             <div className="flex flex-col lg:flex-row mb-2">
//               <div className="mb-4 lg:mr-4 flex-auto">
//                 <label htmlFor="number" className="block text-base font-semibold mb-2">
//                   Contact No: 
//                 </label>
//                 <input
//                   type="tel"
//                   id="number"
//                   placeholder="Phone No"
//                   pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//                   value={contact_number}
//                   onChange={(e) => setContact_number(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 />
//               </div>
//               <div className="mb-4 lg:mb-0 flex-auto">
//                 <label htmlFor="state" className="block text-base font-semibold mb-2">
//                   State
//                 </label>
//                 <select
//                   id="state"
//                   value={state}
//                   onChange={(e) => setState(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 >
//                   <option value="">Select State</option>
//                   {statesList.map((stateName, index) => (
//                     <option key={index} value={stateName}>
//                       {stateName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             {/* Other Form Fields */}
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

//             {/* room and guest */}

//             <div className="flex flex-col lg:flex-row mb-4">
//               <div className="mb-4 lg:mr-4 flex-auto">
//                 <label
//                   htmlFor="room"
//                   className="block text-base font-semibold mb-2"
//                 >
//                   Rooms
//                 </label>
//                 <input
//                   type="number"
//                   id="room"
//                   placeholder="Room"
//                   // value={quantity}
//                   // onChange={(e) => setQuantity(parseInt(e.target.value))}
                
//                   value={rooms}
//                   onChange={(e) => handleRoomsChange(parseInt(e.target.value))}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                   />
                
//               </div>

//               <div className="mb-4 lg:mb-0 flex-auto">
//                 <label
//                   htmlFor="guest"
//                   className="block text-base font-semibold mb-2"
//                 >
//                   Guest
//                 </label>
//                 <input
//                   type="number"
//                   id="guest"
//                   placeholder="Guest"
//                   value={guests}
//                   onChange={(e) => handleGuestsChange(parseInt(e.target.value))}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                 />
//               </div>
//             </div>

//             <div className="mb-[0.9rem] flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   checked="checked"
//                   className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
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

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//       {/* Desktop View For Summary Box */}
//       <div className="md:ml-[4rem] mb-4 md:flex hidden w-[25rem] h-[23rem]  ">
//         {/* Summary Box Content */}
//         <div className="border border-gray-300 rounded-2xl pl-4">
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
//               {/* <div className="font-bold text-lg mb-2">Price: {calculateTotalPrice()}</div> */}
//             </div>
//           </div>
//       </div>
//       </div>

//     </>
//   );
// };

// export default CheckoutForm;

