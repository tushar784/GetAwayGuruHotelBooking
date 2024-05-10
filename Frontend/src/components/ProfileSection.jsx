import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { AuthContext } from '../Context/Auth_Context';

function ProfileSection() {
    const { user, logout } = useContext(AuthContext);
    const handleChange = (event) => {
        const { value } = event.target;
        const filteredValue = value.replace(/\D/g, '');
        event.target.value = filteredValue;
    };

    return (
        <>
            <Navbar />
            <div className="flex h-[36.5rem] font-poppins">
                <div className="w-[15rem] bg-[#90CCBA]">
                    <h2 className="text-2xl font-semibold text-white font-poppins mt-[5rem] ml-4">Profile</h2>
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

                <div className="w-[66rem] bg-gray-100">
                    <div className="flex border border-gray-500 h-[24rem] w-[63rem] rounded p-4 ml-4 mt-12">
                        <div className='w-[30rem] mt-[1rem]'>
                            <div className="mb-4 relative">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Name"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <div className="mb-4 relative">
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Contact number</label>
                                <input
                                    type="tel"
                                    id="number"
                                    name="number"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength="10"
                                    className="mt-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Number"
                                    onChange={handleChange}
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <div className="mb-4 relative">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Email"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <div className="mb-4 relative">
                                <label htmlFor="street" className="block text-sm font-medium text-gray-700">Delivery address</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    className="mt-1 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Address"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <button type="submit" className="bg-[#90CCBA] text-white px-4 py-2 rounded">Save changes</button>
                        </div>

                        <div className="ml-[10rem]">
                            <div className="relative">
                                <img
                                    className="object-cover w-full h-[17rem]"
                                    src="src/assets/img/profile.png"
                                    alt="Profile"
                                />
                                <div className="absolute inset-0 flex items-center justify-center mt-[19.5rem]">
                                    <button className="bg-[#90CCBA] font-semibold text-white px-4 py-2 rounded-full">Change photo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSection





















//logout functionality
// import React, { useContext } from 'react'; // Import React and useContext once

// import Navbar from './Navbar';
// import { AuthContext } from '../Context/Auth_Context';

// function ProfileSection() {
//     const { user, logout } = useContext(AuthContext);
//     const handleChange = (event) => {
//         const { value } = event.target;
//         const filteredValue = value.replace(/\D/g, ''); // Remove non-numeric characters
//         event.target.value = filteredValue;
//     };


//   return (
//     <>
//         <Navbar />
//     <div className="flex h-[36.5rem] font-poppins">


//         {/* left side */}
//         <div className="w-[15rem] bg-[#90CCBA] ">
//             <h2 className="text-2xl font-semibold text-white font-poppins mt-[5rem] ml-4">Profile</h2>
//             <p className='text-xl text-white font-poppins mt-[1rem] ml-4'>Order history</p>
//             {/* <p className='text-xl text-white font-poppins mt-[1rem] ml-4'>Log Out */}
//             <button
//                       onClick={logout}
//                       className="text-xl text-white font-poppins mt-[1rem] ml-4 text-gray-700 w-full px-6 py-2 text-left text-sm"
//                       role="menuitem"
//                       tabIndex="-1"
//                       id="menu-item-3"
//                     >
//                       Logout
//                     </button>
            
//         </div>


//         {/* Right side  */}
//     <div className="w-[66rem] bg-gray-100">
         
//      <div className="flex border border-gray-400 w-[63rem] rounded p-4 ml-4 mt-12">

//         <div className='w-[30rem]'>
//         {/* <h2 className="text-lg font-bold mb-4">Box with Form</h2> */}
//         <form >
//             {/* name */}
//             <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full name
//             </label>
//             <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your name"
//                 required
//             />
//             </div>

//             {/* contact */}
//             <div className="mb-4">
//             <label htmlFor="number" className="block text-sm font-medium text-gray-700">
//                 Contact Number
//             </label>
//             <input
//                 type="tel"
//                 id="number"
//                 name="number"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 maxLength="10"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your contact number"
//                 onChange={handleChange} // Add onChange event handler
//                 required
//             />
//             </div>
            
//             {/* email */}
//             <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//             </label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your email"
//                 required
//             />
//             </div>

//             {/* address */}

//             <div className="mb-4">
//             <label htmlFor="street" className="block text-sm font-medium text-gray-700">
//                 Street Address
//             </label>
//             <input
//                 type="text"
//                 id="street"
//                 name="street"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your street address"
//                 // onChange={handleChange}
//                 required
//             />
//             </div>

//             <button type="submit" className="bg-[#90CCBA] text-white px-4 py-2 rounded">
//             Save Changes
//             </button>
//           </form>
//         </div> 


//          {/* photo */}
//             {/* <div className='w-[4rem]'>
//                 <h1>hiii</h1>
//             </div> */}
//             <div className="ml-[10rem]">
//             <div className="relative">
//                 <img
//                 className="object-cover w-full h-[17rem]"
//                 src="src/assets/img/profile.png"
//                 alt="Profile"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center mt-[19.5rem]">
//                 <button className="bg-[#90CCBA] font-semibold text-white px-4 py-2 rounded-full">Change Photo</button>
//                 </div>
//             </div>
//           </div>
//         </div>   
//      </div>
//  </div>

// </>
//   )
// }

// export default ProfileSection
























//final
// import React from 'react'
// import Navbar from './Navbar'

// function ProfileSection() {
//     const handleChange = (event) => {
//         const { value } = event.target;
//         const filteredValue = value.replace(/\D/g, ''); // Remove non-numeric characters
//         event.target.value = filteredValue;
//       };

//   return (
//     <>
//         <Navbar />
//     <div className="flex h-[36.5rem] font-poppins">


//         {/* left side */}
//         <div className="w-[15rem] bg-[#90CCBA] ">
//             <h2 className="text-2xl font-semibold text-white font-poppins mt-[5rem] ml-4">Profile</h2>
//             <p className='text-xl text-white font-poppins mt-[1rem] ml-4'>Order history</p>
//             <p className='text-xl text-white font-poppins mt-[1rem] ml-4'>Log Out</p>
            
//         </div>


//         {/* Right side  */}
//     <div className="w-[66rem] bg-gray-100">
         
//      <div className="flex border border-gray-400 w-[63rem] rounded p-4 ml-4 mt-12">

//         <div className='w-[30rem]'>
//         {/* <h2 className="text-lg font-bold mb-4">Box with Form</h2> */}
//         <form >
//             {/* name */}
//             <div className="mb-4">
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full name
//             </label>
//             <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your name"
//                 required
//             />
//             </div>

//             {/* contact */}
//             <div className="mb-4">
//             <label htmlFor="number" className="block text-sm font-medium text-gray-700">
//                 Contact Number
//             </label>
//             <input
//                 type="tel"
//                 id="number"
//                 name="number"
//                 inputMode="numeric"
//                 pattern="[0-9]*"
//                 maxLength="10"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your contact number"
//                 onChange={handleChange} // Add onChange event handler
//                 required
//             />
//             </div>
            
//             {/* email */}
//             <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//             </label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your email"
//                 required
//             />
//             </div>

//             {/* address */}

//             <div className="mb-4">
//             <label htmlFor="street" className="block text-sm font-medium text-gray-700">
//                 Street Address
//             </label>
//             <input
//                 type="text"
//                 id="street"
//                 name="street"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//                 placeholder="Enter your street address"
//                 // onChange={handleChange}
//                 required
//             />
//             </div>

//             <button type="submit" className="bg-[#90CCBA] text-white px-4 py-2 rounded">
//             Save Changes
//             </button>
//           </form>
//         </div> 


//          {/* photo */}
//             {/* <div className='w-[4rem]'>
//                 <h1>hiii</h1>
//             </div> */}
//             <div className="ml-[10rem]">
//             <div className="relative">
//                 <img
//                 className="object-cover w-full h-[17rem]"
//                 src="src/assets/img/profile.png"
//                 alt="Profile"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center mt-[19.5rem]">
//                 <button className="bg-[#90CCBA] font-semibold text-white px-4 py-2 rounded-full">Change Photo</button>
//                 </div>
//             </div>
//             {/* <div className="p-4">
//                 <h2 className="text-lg font-bold mb-2">Profile Photo</h2>
//                 <p className="text-sm text-gray-600">Click the button to change your photo.</p>
//             </div> */}
//           </div>
//         </div>   
//      </div>
//  </div>

// </>
//   )
// }

// export default ProfileSection