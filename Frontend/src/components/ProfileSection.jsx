import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { AuthContext } from '../Context/Auth_Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import dummyprofile from '../assets/img/dummyprofileimg.png'

function ProfileSection() {
    const { user, logout } = useContext(AuthContext);
    const [profilePic, setProfilePic] = useState('');
    const [editingField, setEditingField] = useState(null);
    const [formData, setFormData] = useState({
        username: user?.username,
        contactNumber: '',
        email: user?.email,  
    });

    useEffect(() => {
        const storedProfilePic = localStorage.getItem('profilePic');
        if (storedProfilePic) {
            setProfilePic(storedProfilePic);
        } else {
            setProfilePic({dummyprofile});
        }
    }, []);

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
            localStorage.setItem('profilePic', reader.result); // Store the profile picture in localStorage
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleEdit = (field) => {
        setEditingField(field);
    };

    const handleInputChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with updated data
        console.log(formData);
        // You can make an API call or update the user data here
        setEditingField(null); // Reset the editing field
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row h-auto md:h-[36.5rem] font-poppins ">
                <div className="sticky top-0 left-0 hidden md:block w-full md:w-[18rem] md:h-[12rem] rounded md:ml-[2rem] md:mt-[3rem] bg-[#90CCBA] overflow-y-auto">
                    <Link to="/profile">
                        <h2 className="text-xl font-semibold text-white font-poppins mt-[2rem] md:mt-[2rem] ml-4">
                            Profile
                        </h2>
                    </Link>
                    <Link to={`/bookinghistory`}>
                    <p className="text-xl text-white font-poppins mt-[1rem] ml-4">Order history</p>
                    </Link>

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
    
                <div className="w-[20rem] md:w-[66rem] md:h-auto h-[38rem] md:mt-0 md:order-2 md:mt-0 mt-[2rem]">
                    <div className="flex flex-col md:flex-row w-full md:border md:border-gray-500 md:mt-[3rem] md:w-[56rem] md:h-[23rem] rounded p-4 ml-4 ">
                        {/* Mobile view */}
                        <div className="md:hidden flex justify-center mt-[6rem]">
                            <div className="relative mb-4">
                                <img
                                    className="object-cover w-[7rem] h-[7rem] rounded-full "
                                    src={profilePic}
                                    alt="Profile"
                                />
                                <div className="absolute inset-0 flex items-center justify-center w-[7rem] mt-[9rem] ">
                                    <label htmlFor="photo-upload" className="bg-[#90CCBA] hover:bg-[#46c79f] text-xs text-white px-2 py-2 rounded cursor-pointer">
                                        Change photo
                                    </label>
                                    <input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                                </div>
                            </div>
                        </div>
    
                        {/* Form */}
                        <div className='w-full md:w-[30rem] md:mt-[1.5rem] mt-[4rem]'>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4 relative">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={user?.username}
                                        name="name"
                                        className="mt-1 w-full border-b-2 border-gray-300 md:mt-[0.5rem] bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                        placeholder="Enter Your Name"
                                        required
                                        readOnly={editingField !== 'username'}
                                        onChange={(e) => handleInputChange(e, 'username')}
                                    />
                                    {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={() => handleEdit('username')} />
                                    </span> */}
                                </div>
    
                                {/* <div className="mb-4 relative md:mt-[1.5rem]">
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
                                        value={formData.contactNumber}
                                        readOnly={editingField !== 'contactNumber'}
                                        required
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={() => handleEdit('contactNumber')} />
                                    </span>
                                </div> */}
    
                                <div className="mb-4 relative md:mt-[1.5rem]">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={user?.email}
                                        className="mt-1 w-full border-b-2 border-gray-300 md:mt-[0.5rem] bg-transparent focus:outline-none focus:border-[#90CCBA]"
                                        placeholder="Enter Your Email"
                                        readOnly={editingField !== 'email'}
                                        onChange={(e) => handleInputChange(e, 'email')}
                                        required
                                    />
                                    {/* <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <FontAwesomeIcon icon={faEdit} className="cursor-pointer" onClick={() => handleEdit('email')} />
                                    </span> */}
                                </div>
    
                                {/* <button type="submit" className="bg-[#90CCBA] hover:bg-[#46c79f] text-white md:px-4 md:py-2 md:p-0 px-2 py-2 rounded md:mt-[0.6rem] md:ml-0 ml-[5.6rem] md:text-[1rem] text-xs mobile-save-changes">Save changes</button> */}
                            </form>
                        </div>
    
                        {/* Desktop view */}
                        <div className="hidden md:block md:w-[17rem] ml-[5rem]">
                            <div className="relative">
                                <img
                                    className="object-cover w-[17rem] h-[17rem] rounded-full"
                                    src={profilePic}
                                    alt="Profile"
                                />
                                <div className="absolute inset-0 flex items-center justify-center mt-[19.5rem]">
                                    <label htmlFor="photo-upload" className="bg-[#90CCBA] hover:bg-[#46c79f]  text-white px-4 py-2 rounded cursor-pointer">
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
    );
}
export default ProfileSection;











// import React, { useContext, useState } from 'react';
// import { Link } from "react-router-dom";
// import Navbar from './Navbar';
// import { AuthContext } from '../Context/Auth_Context';

// function ProfileSection({ updateProfilePic }) {
//     const { user, logout } = useContext(AuthContext);
//     const [profilePic, setProfilePic] = useState('src/assets/img/profile.png');

//     const handleChange = (event) => {
//         const { value } = event.target;
//         const filteredValue = value.replace(/\D/g, '');
//         event.target.value = filteredValue;
//     };

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         const reader = new FileReader();

//         reader.onloadend = () => {
//             setProfilePic(reader.result);
//             updateProfilePic(reader.result); // Update the profile picture in Navbar
//         };

//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };


//     return (
//         <>
//             <Navbar />
//             <div className="flex flex-col md:flex-row h-auto md:h-[36.5rem] font-poppins ">
//             <div className="sticky top-0 left-0 hidden md:block w-full md:w-[18rem] md:h-[12rem] rounded md:ml-[2rem] md:mt-[3rem] bg-[#90CCBA] overflow-y-auto">

// <Link to="/profile">
// <h2 className="text-xl font-semibold text-white font-poppins mt-[2rem] md:mt-[2rem] ml-4">
//   Profile
// </h2>
// </Link>
// <p className="text-xl text-white font-poppins mt-[1rem] ml-4">Order history</p>
// <Link to="/" className="mb-12" style={{ color: '#90CCBA' }}>
//   <button
//     onClick={logout}
//     className="text-xl text-white font-poppins mt-[1rem] ml-4"
//     role="menuitem"
//     tabIndex="-1"
//     id="menu-item-3"
//   >
//     Logout
//   </button>
// </Link>
// </div>


//                 <div className="w-[20rem] md:w-[66rem] md:h-auto h-[38rem] md:mt-0 md:order-2 md:mt-0 mt-[2rem]" >
//                     <div className="flex flex-col md:flex-row w-full md:border md:border-gray-500 md:mt-[3rem] md:w-[56rem] md:h-[23rem] rounded p-4 ml-4 ">
//                         {/* Mobile view */}
//                         <div className="md:hidden flex justify-center mt-[6rem]">
//                             <div className="relative mb-4">
//                                 <img
//                                     className="object-cover w-[7rem] h-[7rem] rounded-full "
//                                     src={profilePic}
//                                     alt="Profile"
//                                 />
//                                 <div className="absolute inset-0 flex items-center justify-center w-[7rem] mt-[9rem] ">
//                                     <label htmlFor="photo-upload" className="bg-[#90CCBA] text-xs text-white px-2 py-2 rounded cursor-pointer">
//                                         Change photo
//                                     </label>
//                                     <input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Form */}
//                         <div className='w-full md:w-[30rem] md:mt-[1.5rem] mt-[4rem]'>
//                             <div className="mb-4 relative">
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     value={user.username}
//                                     name="name"
//                                     className="mt-1 w-full border-b-2 border-gray-300 md:mt-[0.5rem] bg-transparent focus:outline-none focus:border-[#90CCBA]"
//                                     placeholder="Enter Your Name"
//                                     required
//                                 />
//                                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
//                             </div>

//                             <div className="mb-4 relative md:mt-[1.5rem]">
//                                 <label htmlFor="number" className="block text-sm font-medium text-gray-700">Contact number</label>
//                                 <input
//                                     type="tel"
//                                     id="number"
//                                     name="number"
//                                     inputMode="numeric"
//                                     pattern="[0-9]*"
//                                     maxLength="10"
//                                     className="mt-1 w-full border-b-2 md:mt-[0.5rem] border-gray-300 bg-transparent focus:outline-none focus:border-[#90CCBA]"
//                                     placeholder="Enter Your Number"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
//                             </div>

//                             <div className="mb-4 relative md:mt-[1.5rem]">
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={user.email}
//                                     className="mt-1 w-full border-b-2 border-gray-300 md:mt-[0.5rem] bg-transparent focus:outline-none focus:border-[#90CCBA]"
//                                     placeholder="Enter Your Email"
//                                     required
//                                 />
//                                 <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">&#9998;</span>
//                             </div>

//                             <button type="submit" className="bg-[#90CCBA] text-white md:px-4 md:py-2 md:p-0 px-2 py-2 rounded md:mt-[0.6rem] md:ml-0 ml-[5.6rem] md:text-[1rem] text-xs mobile-save-changes">Save changes</button>
//                         </div>

//                         {/* Desktop view */}
//                         <div className="hidden md:block md:w-[17rem] ml-[5rem]">
//                             <div className="relative">
//                                 <img
//                                     className="object-cover w-[17rem] h-[17rem] rounded-full"
//                                     src={profilePic}
//                                     alt="Profile"
//                                 />
//                                 <div className="absolute inset-0 flex items-center justify-center mt-[19.5rem]">
//                                     <label htmlFor="photo-upload" className="bg-[#90CCBA] text-white px-4 py-2 rounded cursor-pointer">
//                                         Change photo
//                                     </label>
//                                     <input id="photo-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProfileSection;