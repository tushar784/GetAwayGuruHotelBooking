import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HotelSearchBar from "../components/HotelSearchBar.jsx";
import RoomCard from "../components/RoomCard.jsx";
import ImgLoad from "../components/ImgLoad.jsx";
import Map from "../components/Map.jsx";
import Policies from "../components/Policies.jsx";
import axios from "axios";
import { useEffect,useParams } from "react";


const HotelInfoPage = () => {
  const { hotelName } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/hotels?Hotel_Name=${hotelName}`)
      .then(response => response.json())
      .then(data => setHotelDetails(data))
      .catch(error => console.error('Error fetching hotel details:', error));
  }, [hotelName]);

  return (
    <>
      <div className="sticky top-2 bg-white w-full h-[13rem] shadow-lg z-50">
        <Navbar />
        <div className="sticky top-[-1rem] ml-[15rem] bg-white z-30">
          <HotelSearchBar />
        </div>
      </div>

      <div className=" ml-[1rem]">
     <ImgLoad />       
        <Map />
      <RoomCard />
      <Policies />
      </div>
      <Footer />
    </>
  );
};

export default HotelInfoPage;
























// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import { FaStar } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/im";
// import { IoShareSocialSharp } from "react-icons/io5";
// import { TbSwimming } from "react-icons/tb";
// import { CgGym } from "react-icons/cg";
// import { FaWifi } from "react-icons/fa";
// import { MdOutlineDinnerDining } from "react-icons/md";
// import { MdRoomService } from "react-icons/md";
// import { MdOutlineSportsBar } from "react-icons/md";
// import Roomdata from "../components/RoomCard.jsx";
// import Footer from "../components/Footer.jsx";
// import HotelSearchBar from "../components/HotelSearchBar.jsx";



// const Specific = () => {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);

//   return (
//     <>
//    <div className="sticky bg-white-200 shadow-lg h-[12rem] ">
//       <Navbar  />
//       <div className="ml-[9em] ">
//       <HotelSearchBar  />
//       </div>
//     </div>
//       <div className=" ml-[10rem]">
//       <div className="flex  bg-white-200 ml-[7rem] bg-white-300	 w-[75rem]  ">
//         <div className="mt-[1.5rem]  w-[30rem]">
//           <img className=" rounded mb-1 h-[27rem]"
//             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=1000&h=800&s=1"
//             alt=""
//           />
//         </div>
        
//         <div className="flex-direaction-column mt-[2rem] ml-[20px] border-1  w-[339px]">
//           <img
//             className=" rounded w-[20rem] h-[212px]"
//             src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/49845683.jpg?k=2e9c1cf108decd41a54d0803f175c39ea70a02ad88ff753b9e806f64e62e9b65&o=&hp=1"
//             alt=""
//           />
//           <img
//             className=" rounded w-[20rem] h-[192px] mt-4"
//             src="https://hotelwithbathtub.com/wp-content/uploads/hotel-courtyard-by-marriott-navi-mumbai-with-bathtub.jpeg"
//             alt=""
//           />
//         </div>
//         <div className="flex-direaction-column mt-[2rem]  w-[19rem]">
//           <img
//             className=" rounded  w-[20rem] h-[13.5rem] "
//             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/09/fd/d3/deleue-room.jpg?w=1200&h=-1&s=1"
//             alt=""
//           />
//           <div className="relative mt-3 rounded">
//             <img className=" rounded w-[20rem] h-[193px]"
//               src="https://content.r9cdn.net/rimg/himg/01/25/f7/expediav2-76334-640386-685927.jpg"
//               alt=""
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p className="text-white text-2xl">12+ Photos</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="items-center w-[70rem] h-full ml-[110px]">
//         <h1 className="text-black text-2xl font-bold mr-2">
//           Townhouse 446 Vista Suites
//         </h1>
//         <div className="flex">
//           {[...Array(4)].map((_, index) => {
//             const currentRating = index + 1;
//             return (
//               <label key={index}>
//                 <FaStar
//                   size={12}
//                   className={`text-yellow-500 cursor-pointer mt-4 ml-1 ${
//                     currentRating <= (hover || rating)
//                       ? "text-yellow-500"
//                       : "text-gray-400"
//                   }`}
//                   onMouseEnter={() => setHover(currentRating)}
//                   onMouseLeave={() => setHover(null)}
//                 />
//               </label>
//             );
//           })}
//           <p className="mt-[10px] ml-[5px]">4/5 ratings</p>

//           <ImLocation2 className="text-1xl mt-[15px] ml-[20px]" />
//           <p className="mt-[10px] ml-[5px]">
//             Address: Sector-12,Vashi, Navi Mumbai
//           </p>
//           <IoShareSocialSharp className="text-1xl mt-[15px] ml-[20px]" />
//           <p className=" cursor-pointer mt-[10px] ml-[5px]">share</p>
//         </div>
//       </div>
//       <br />
//       <div className="flex  w-[72rem] ml-[110px]">
//         <div className="overflow-hidden relative">
//           <h1 className=" font-bold text-[20px]">Map Location</h1>

//           <iframe
//             className="shadow-lg rounded border mr-9 ml-0 mt-4 inset-0"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.03782873933!2d72.993920043353!3d19.07431074377146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13ad9f6a3e1%3A0xa4084755c61d654a!2sTownhouse%20446%20Vista%20Suites!5e0!3m2!1sen!2sin!4v1712043393073!5m2!1sen!2sin"
//             width="700"
//             height="320"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

//         <div className="border  shadow-lg h-[19rem] p-5 mt-14 w-[25rem]">
//           <h1 className="card-title text-2xl font-semibold">
//             Standard Room Queen size <br />
//             bed
//           </h1>
//           <h2 className="mt-3 text-red-700 text-[20px]">Non-refundable</h2>
//           <p className="text-lg font-bold mt-4 text-[45px]">₹5,669</p>
//           <p className="mt-5">per night of 1 room</p>
//           <br />
//           <button
//             className="text-white font-bold w-80 h-10  mb-4 mt-0 rounded"
//             style={{ backgroundColor: "#90CCBA" }}
//           >
//             Sign up
//           </button>
//         </div>
//       </div>

//       <div className=" mt-3 ml-[116px] ">
//         <h1 className=" font-bold text-[25px]">Amenities</h1>

//         <div className=" flex ml-[8rem] w-[60rem]  gap-[5rem] mt-7">
//           <div className="">
//             <TbSwimming className="text-4xl bg-gray-200 ml-2 h-12 w-12 rounded-full" />
//             <h1 className="mt-2 ">Swimming</h1>
//             <p className="mt-1 ml-3 text-6">pool</p>
//           </div>
//           <div className=" ">
//             <CgGym className="text-xl bg-gray-200 h-12 w-12 rounded-full" />
//             <h1 className="mt-1 ml-2 text-6">Gym</h1>
//             <p className="mt-1 ml-1 text-6">access</p>
//           </div>
//           <div>
//             <FaWifi className="text-4xl bg-gray-200 h-12 w-12 rounded-full" />
//             <h1 className="mt-1 ml-3 text-6">wifi</h1>
//           </div>
//           <div>
//             <MdOutlineDinnerDining className="text-4xl bg-gray-200 h-12 w-12 rounded-full" />
//             <h1 className="mt-1 ml-2 text-6">Buffet</h1>
//             <p className="mt-1  text-6">breakfast</p>
//           </div>
//           <div>
//             <MdRoomService className="text-4xl bg-gray-200 ml-3 h-12 w-12 rounded-full" />
//             <h1 className="mt-1 ml-5 text-6">24h</h1>
//             <p className="mt-1  text-6">Room service</p>
//           </div>
//           <div>
//             <MdOutlineSportsBar className="text-4xl bg-gray-200 h-12 w-12 rounded-full" />
//             <h1 className="mt-1 ml-4 text-6">bar</h1>
//           </div>
//         </div>
//       </div>

//       <div className=" ml-[120px]  mt-9 ">
//         <h1 className="text-[20px] font-bold ">Select Your Room</h1>
//         <select
//           className="bg-white-200 w-[180px] mt-3 h-7 text-black rounded  border border-black"
//           name="room"
//           id="room"
//         >
//           <option value="standard">Standard Room</option>
//           <option value="deluxe">Deluxe Room</option>
//         </select>
//       </div>

//       <Roomdata />
//       <div className=" ml-[110px] mb-10 h-[20rem]  w-[71rem]">
//         <h1 className="font-bold text-3xl ml-2">Hotel policies</h1>
//         <div className="flex p-2">
//           <h1 className="text-black text-2xl mt-4 font-semibold mr-4">Check-in</h1>
//           <p className="text-black mt-4 ml-[350px]">From 12:00pm</p>
//         </div>
//         <div className="border-b border-gray-400"></div>
//         <div className="flex p-2">
//           <h1 className="text-black text-2xl mt-4 font-semibold mr-4">Check-Out</h1>
//           <p className="text-black ml-[330px] mt-4 ml-4">Till 11:00am</p>
//         </div>
//         <div className="border-b border-gray-400"></div>
//         <div className="flex p-2">
//           <h1 className="text-black text-[22px] mt-4 font-semibold mr-4">
//             Children And extra beds
//           </h1>
//           <p className="text-black ml-[230px] mt-4 ml-4">
//             Extra beds are dependents on the room you choose. Please check the individual
//             room capacity for more details
//           </p>
//         </div>
//         <div className="border-b border-gray-400"></div>
//         <div className="flex p-2">
//           <h1 className="text-black text-2xl mt-4 font-semibold mr-4">
//             Property information{" "}
//           </h1>
//           <p className="text-black ml-[210px] mt-4 ml-4">Total rooms 40 rooms</p>
//         </div>
//       </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Specific;