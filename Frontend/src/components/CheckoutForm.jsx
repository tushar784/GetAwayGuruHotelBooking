
import React, { useState } from 'react';
import Navbar from './Navbar';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleSearch = async () => {
    try {
      if (selectedLocation) {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/hotels/location/${selectedLocation}`);
        setHotels(response.data); // Update the hotels state in the parent component
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };


  return (
    <>
    <Navbar />
     <h1 className='ml-[12rem] text-2xl font-semibold mt-10 mb-2'>Shipping Address</h1>
    <div className="ml-[12rem] flex mt-[1rem]">

   <div className='flex-initial w-[30rem] mr-[3rem] size-22'>
      <form onSubmit={handleSubmit}>

        <div className='flex gap-8'>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
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
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
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
          <label htmlFor="address" className="block font-bold mb-2">
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
        <div className="flex mb-4">
          <div className="mr-4 w-1/2">
            <label htmlFor="pincode" className="block font-bold mb-2">
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
          <div className="w-1/2">
            <label htmlFor="state" className="block font-bold mb-2">
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
        <div className="flex mb-4">
          <div className="mr-4 w-1/2">
            <label htmlFor="checkInDate" className="block font-bold mb-2">
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
          <div className="w-1/2">
            <label htmlFor="checkOutDate" className="block font-bold mb-2">
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
        <div className="mb-4">
          <label className="block font-bold mb-2">Rooms & guests</label>
          <div className="border border-gray-300 rounded-md px-4 py-2">
            1 Room & 2 Guests
          </div>
        </div>
    </form>
  

 </div>


                    {/* 2nd half */}


        <div className="mb-4 flex-initial w-[22rem]  ">
       
          <div className="border border-gray-300 rounded-md p-4">
          <h3 className="font-bold mb-2 text-xl">Summary</h3>
          <div className="flex">
          <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg"
                alt="Hotel"
                className="w-26 h-20 object-cover rounded "
              />
         
              <h1 className='px-2'>Ibis New Delhi Aerocity - An AccorHotels Brand</h1>
            </div>
            <div className='px-2 py-2'>
            <div className="mb-2">Standard room</div>
            <div className="mb-2">GST</div>
            <div className="mb-2">check in </div>
            <div className="mb-2">checkout</div>
            <div className="mb-2">no. of guest</div>
            <div className="mb-2">breakfast included or not</div>
            <div className="font-bold mb-4">Total</div>
            </div>
            <button
              type="submit"
              className="bg-[#90CCBA] text-white rounded-md px-4 py-2 w-full"
            >
              Pay now
            </button>
          </div>
        </div>
        <div className="mb-[2rem] flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="radio"
            checked="checked"
            className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
          />
          <label htmlFor="default-checkbox" className="ml-2 flex items-center text-lg font-medium text-fuchsia-900">
            <SiPhonepe className="text-2xl" />
            <span className="ml-1">Phone Pe</span>
          </label>
        </div>
      </div>
    </div>
    </>
  
  );
};

 export default CheckoutForm;
















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