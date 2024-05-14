import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { AuthContext } from '../Context/Auth_Context';

function ProfileSection({ updateProfilePic }) {
    const { user, logout } = useContext(AuthContext);
    const [profilePic, setProfilePic] = useState('src/assets/img/profile.png');

    const handleChange = (event) => {
        const { value } = event.target;
        const filteredValue = value.replace(/\D/g, '');
        event.target.value = filteredValue;
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfilePic(reader.result);
            updateProfilePic(reader.result); // Update the profile picture in Navbar
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row h-auto md:h-[36.5rem] font-poppins ">
            <div className="hidden md:block w-full md:w-[15rem] bg-[#90CCBA] md:order-1">
                <h2 className="text-2xl font-semibold text-white font-poppins mt-[2rem] md:mt-[5rem] ml-4">Profile</h2>
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


                <div className="w-full md:w-[66rem] md:h-auto h-[33.2rem] md:mt-0 bg-gray-100 md:order-2 " >
                    <div className="flex flex-col md:flex-row w-full md:border md:border-gray-500 md:mt-[3rem] md:w-[63rem] md:h-[23rem] rounded p-4 ml-4 ">
                        {/* Mobile view */}
                        <div className="md:hidden flex justify-center mt-8">
                            <div className="relative mb-4">
                                <img
                                    className="object-cover w-[7rem] h-[7rem] rounded-full "
                                    src={profilePic}
                                    alt="Profile"
                                />
                                <div className="absolute inset-0 flex items-center justify-center w-[7rem] mt-[9rem] ">
                                    <label htmlFor="photo-upload" className="bg-[#90CCBA] text-xs text-white px-2 py-2 rounded cursor-pointer">
                                        Change photo
                                    </label>
                                    <input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className='w-full md:w-[30rem] md:mt-[1.5rem] mt-[4rem]'>
                            <div className="mb-4 relative">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 w-full border-b-2 border-gray-300 md:mt-[0.5rem] bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Name"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <div className="mb-4 relative md:mt-[1.5rem]">
                                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Contact number</label>
                                <input
                                    type="tel"
                                    id="number"
                                    name="number"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength="10"
                                    className="mt-1 w-full border-b-2 md:mt-[0.5rem] border-gray-300 bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Number"
                                    onChange={handleChange}
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <div className="mb-4 relative md:mt-[1.5rem]">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 w-full border-b-2 border-gray-300 md:mt-[0.5rem] bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                    placeholder="Enter Your Email"
                                    required
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
                            </div>

                            <button type="submit" className="bg-[#90CCBA] text-white md:px-4 md:py-2 md:p-0 px-2 py-2 rounded md:mt-[0.6rem] md:ml-0 ml-[5.6rem] md:text-[1rem] text-xs mobile-save-changes">Save changes</button>
                        </div>

                        {/* Desktop view */}
                        <div className="hidden md:block md:w-[17rem] ml-[10rem]">
                            <div className="relative">
                                <img
                                    className="object-cover w-[17rem] h-[17rem] rounded-full"
                                    src={profilePic}
                                    alt="Profile"
                                />
                                <div className="absolute inset-0 flex items-center justify-center mt-[19.5rem]">
                                    <label htmlFor="photo-upload" className="bg-[#90CCBA] text-white px-4 py-2 rounded cursor-pointer">
                                        Change photo
                                    </label>
                                    <input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileSection;