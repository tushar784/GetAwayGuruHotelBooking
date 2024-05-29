import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { SiPhonepe } from "react-icons/si";
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/Auth_Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventCheckout = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);
  const [numGuests, setNumGuests] = useState(1);
  const [contactNumber, setContactNumber] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [guests, setGuests] = useState(1);

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
        Event_Name: event?.Event_Name,
        numberOfGuests: guests,
        Event_Date: event?.Date,
        username: user.username,
        email: user.email,
        state: state,
        venue_addr: event?.Venue_addr,
        contact_number: contactNumber,
        amount: totalPrice, // Amount in paise (smallest currency unit)
        orderDate: currentOrderDate, // Include orderDate
    
      };
  
      // Create order in the backend
      const response = await axios.post(`${url}/api/events/booking`, orderData);
      console.log("ewwww", response.data);
      console.log("data", response.data.eventsBookingDetails);
      if (response.data.eventsBookingDetails) {
        const { amount,razorpayOrderId, key, email, username } = response.data.eventsBookingDetails;
        console.log("hiiewd");
        // Prepare Razorpay options
        const options = {
          key,
          amount,
          currency: 'INR',
          name: "GetAwayGuru Booking",
          description: 'Event Booking Payment',
          order_id: razorpayOrderId,
          handler: async function (response) {
            const body = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };
  
            // Validate payment
            const validateRes = await axios.post(`${url}/api/order/validateeventorder`, body);
  
            if (validateRes.data.msg === 'success') {
              toast.success('Payment successful');
              navigate(`/orderplaced/${orderId}`);
            } else {
              toast.error('Payment validation failed');
              navigate(`/checkout/${eventName}`);
            }
          },
          prefill: {
            name: username,
            email: email,
            contact: contactNumber,
          },
          notes: {
            address: `${event?.Event_Name}, ${state}`,
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

  return (
    <>
      <Navbar />
      <div className="flex ml-[12rem] mt-8">
        <div className="flex flex-col w-[30rem]">
          <div className="flex mb-4">
            <div className="flex flex-col w-full mr-4">
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
            <div className="flex flex-col w-full">
              <label htmlFor="contact" className="block text-base font-semibold mb-2">
                Contact Number
              </label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                id="contact"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                placeholder="Contact number"
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-[30rem] mr-4">
              <label htmlFor="state" className="block text-base font-semibold mb-2">
                State
              </label>
              <select
                id="state"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              >
                <option value="">Select State</option>
                {/* ... (existing state options) */}
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
                <option>Andaman and Nicobar Islands</option>
                <option>Chandigarh</option>
                <option>Dadra and Nagar Haveli and Daman and Diu</option>
                <option>Lakshadweep</option>
                <option>Delhi</option>
                <option>Puducherry</option>

              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="guest" className="block text-base font-semibold mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                id="guest"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                placeholder="Number of guests"
                value={numGuests}
                onChange={(e) => setGuests(Math.max(1, parseInt(e.target.value) || 0))}
                min="1"
              />
            </div>
          </div>
          <div className="mt-[0.9rem] ">
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

        <div className="md:ml-[4rem] md:flex w-[21rem] h-[27em]">
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
            <button className="bg-[#90CCBA] hover:bg-[#46c79f]  text-white font-bold py-2 px-4 rounded w-full" onClick={handleSubmit}>
              Pay now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCheckout;












// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useParams, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Context/Auth_Context';
// import Navbar from '../components/Navbar';
// import { SiPhonepe } from 'react-icons/si';
// // 
// const EventCheckout = () => {
//   const { eventName } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [events, setEvents] = useState(null);
//   const [price, setPrice] = useState(0);
//   const [guests, setGuests] = useState(1);
//   const [contactNumber, setContactNumber] = useState('');
//   const [state, setState] = useState('');
//   const { user } = useContext(AuthContext);
//   const urlParams = new URLSearchParams(window.location.search);

//   useEffect(() => {
//     const fetchEventsDetails = async () => {
//       try {
//         const url = import.meta.env.VITE_BASE_URL;
//         const response = await axios.get(`${url}/api/events/name/${eventName}`);
//         setEvents(response.data);
//         console.log("data", response.data);
//       } catch (error) {
//         console.error("Error fetching holiday details:", error);
//       }
//     };
//     const params = Object.fromEntries(urlParams.entries());
//     // setBasePrice(parseFloat(params.price));
//     setPrice(parseFloat(params.price)); // Set the initial price
//     setGuests(parseInt(params.guests) || 1); // Set the initial number of guests
//     fetchEventsDetails();
// },[eventName]);


//   // Retrieve data from URL parameters
// //   const eventDate = queryParams.get('eventDate');
// //   const venue = queryParams.get('venue');
// //   const guests = queryParams.get('guests');
// //   const price = queryParams.get('price');

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const url = import.meta.env.VITE_BASE_URL;
//       const currentOrderDate = new Date().toISOString();

//       // Additional order data to be sent to the backend
//       const orderData = {
//         Event_Name: eventName,
//         Event_Date: eventDate,
//         venue_addr: venue,
//         numberOfGuests: guests,
//         contact_number: contactNumber,
//         state: state,
//         amount: price,
//         username: user.username,
//         email: user.email,
//         orderDate: currentOrderDate,
//       };

//       // Send order data to the backend
//       const response = await axios.post(`${url}/api/events/booking`, orderData);

//       // Handle the response accordingly
//       if (response.data.eventsBookingDetails) {
//         const { amount, razorpayOrderId, email, username } = response.data.eventsBookingDetails;

//         // Razorpay payment options
//         const options = {
//           key: process.env.RAZORPAY_KEY_ID,
//           amount: amount * 100, // Amount in paisa
//           currency: 'INR',
//           name: eventName,
//           description: 'Event Booking Payment',
//           order_id: razorpayOrderId,
//           handler: async function (response) {
//             // Handle Razorpay response
//             console.log(response);
//             // Optionally handle success and update the UI or backend
//           },
//           prefill: {
//             name: username,
//             email: email,
//             contact: contactNumber,
//           },
//           notes: {
//             address: `${events?.eventName}, ${state}`,
//           },
//           theme: {
//             color: '#3399cc',
//           },
//         };

//         const rzp1 = new window.Razorpay(options);
//         rzp1.open();
//       }
//     } catch (error) {
//       console.error('Error in order creation or payment initiation:', error);
//       navigate('/events');
//     }
//   };

//   const statesList = [
//     'Andhra Pradesh',
//     'Arunachal Pradesh',
//     'Assam',
//     'Bihar',
//     'Chhattisgarh',
//     'Goa',
//     'Gujarat',
//     'Haryana',
//     'Himachal Pradesh',
//     'Jharkhand',
//     'Karnataka',
//     'Kerala',
//     'Madhya Pradesh',
//     'Maharashtra',
//     'Manipur',
//     'Meghalaya',
//     'Mizoram',
//     'Nagaland',
//     'Odisha',
//     'Punjab',
//     'Rajasthan',
//     'Sikkim',
//     'Tamil Nadu',
//     'Telangana',
//     'Tripura',
//     'Uttar Pradesh',
//     'Uttarakhand',
//     'West Bengal',
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="font-poppins md:ml-[10rem] flex mt-[1rem]">
//         <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="flex flex-col lg:flex-row mb-2">
//               <div className="mb-4 lg:mr-4 flex-auto">
//                 <label htmlFor="number" className="block text-base font-semibold mb-2">
//                   Contact No:
//                 </label>
//                 <input
//                   type="tel"
//                   id="number"
//                   placeholder="Phone No"
//                   value={contactNumber}
//                   onChange={(e) => setContactNumber(e.target.value)}
//                   className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                   required
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
//                   required
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

//             <div className="mb-[0.9rem] flex items-center justify-between">
//               <div className="flex items-center">
//                 <input
//                   type="radio"
//                   checked="checked"
//                   className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
//                 />
//                 <label htmlFor="default-checkbox" className="ml-2 flex items-center text-lg font-medium text-fuchsia-900">
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

//         <div className="md:ml-[4rem] mb-4 md:flex  w-[28rem] h-[20rem]">
//           <div className="border border-gray-300 rounded-2xl pl-4">
//             <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
//             <div className="flex">
//               <img
//                 src={events.Card_Img}
//                 alt=""
//                 className="w-26 h-20 object-cover rounded"
//               />
//               <h1 className="px-4 text-lg font-bold">{events.Event_Name}</h1>
//             </div>
//             <div className="px-2 py-2 text-mx font-semibold">
//               <div className="mb-2">Event Date: {events.Date}</div>
//               <div className="mb-2">Venue: {events.Venue_addr}</div>
//               <div className="mb-2">No. of Guests: {guests}</div>
//               <div className="font-bold text-lg mb-2">Price: {events.Price}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EventCheckout;








