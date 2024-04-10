import HotelCard from "./HotelCard";

const HotelList = ({ hotels }) => {
  if (!hotels) {
    return <div>No hotels found.</div>;
  }

  return (
    <div className="container mx-auto pl-[6rem] font-poppins pr-[4rem] pt-[2rem]  ">
    <h1 className="text-xl font-semibold  mb-4">Showing properties in navi mumbai</h1>
  <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
    {hotels.map((hotel) => (
      <HotelCard key={hotel.Hotel_id} hotel={hotel} />
    ))}
  </div>
</div>
  );
};

export default HotelList;











//final
// import hotels from "../HotelList/hotellist.json";
// import HotelSearchBar from "../components/HotelSearchBar";
// import Navbar from "../components/Navbar";
// function HotelList() {
//   if (!hotels) {
//     return <div>No hotels data available</div>;
//   }

//   return (
    
//     <>
//     {/* <div> */}
//     <div className="">
//       <Navbar />
//     </div>
//     <div className="">
//       <HotelSearchBar />
//       </div>
//       <div className="ml-[25rem] mt-[2rem]">
//         <h1 className="mb-[1rem] font-semibold text-xl mt-[10rem]">
//           Showing properties in Navi Mumbai
//         </h1>
//         {hotels.map((hotel) => (
//           <div
//             key={hotel.Hotel_id}
//             className="bg-white shadow-lg rounded-xl flex overflow-hidden mb-4 mr-[3rem]"
//           >
//             <img
//               src={hotel.Image}
//               alt={hotel.Hotel_Name}
//               className="w-[35%] h-48 object-cover item-center rounded-lg m-[1rem]"
//             />
//             <div className="py-4 flex flex-col justify-between ">
//               <div>
//                 <h2 className="text-xl font-semibold mb-2">
//                   {hotel.Hotel_Name}
//                 </h2>
//                 <p className="text-gray-600 mb-2 font-semibold">
//                   {hotel.Location}
//                 </p>
//                 <p className="text-gray-600 mb-2">
//                   {hotel.Staring_Rating} Stars
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <div>
//                   <div className="font-semibold mr-[2rem] text-[#90CCBA]">
//                     {/* <p>Amenities:</p> */}
//                     <ul className="list-disc ml-4">
//                       {hotel.Amenities.split(", ").map((amenity, index) => (
//                         <li key={index}>{amenity}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="ml-[8rem]">
//                   <p className="text-black text-xl mb-2 font-extrabold">
//                     ₹{hotel.Price}
//                   </p>
//                   <button
//                     className="text-white font-medium w-[7rem] h-10 rounded"
//                     style={{ backgroundColor: "#90CCBA" }}
//                   >
//                     Book now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
        
//       </div>
//       </>
//   );
// }

// export default HotelList;
































// import hotels from "../HotelList/hotellist.json";
// import HotelSearchBar from "../components/HotelSearchBar";
// import Navbar from "../components/Navbar";
// function HotelList() {
//   if (!hotels) {
//     return <div>No hotels data available</div>;
//   }

//   return (
    
//     <>
//     {/* <div> */}
//     <div className="mt-[-10rem] mb-[10rem]">
//       <Navbar />
//     </div>
//     <div className="">
//       <HotelSearchBar />
//       </div>
//       <div className="ml-[25rem] mt-[2rem]">
//         <h1 className="mb-[1rem] font-semibold text-xl mt-[10rem]">
//           Showing properties in Navi Mumbai
//         </h1>
//         {hotels.map((hotel) => (
//           <div
//             key={hotel.Hotel_id}
//             className="bg-white shadow-lg rounded-xl flex overflow-hidden mb-4 mr-[3rem]"
//           >
//             <img
//               src={hotel.Image}
//               alt={hotel.Hotel_Name}
//               className="w-[35%] h-48 object-cover item-center rounded-lg m-[1rem]"
//             />
//             <div className="py-4 flex flex-col justify-between ">
//               <div>
//                 <h2 className="text-xl font-semibold mb-2">
//                   {hotel.Hotel_Name}
//                 </h2>
//                 <p className="text-gray-600 mb-2 font-semibold">
//                   {hotel.Location}
//                 </p>
//                 <p className="text-gray-600 mb-2">
//                   {hotel.Staring_Rating} Stars
//                 </p>
//               </div>
//               <div className="flex items-center">
//                 <div>
//                   <div className="font-semibold mr-[2rem] text-[#90CCBA]">
//                     {/* <p>Amenities:</p> */}
//                     <ul className="list-disc ml-4">
//                       {hotel.Amenities.split(", ").map((amenity, index) => (
//                         <li key={index}>{amenity}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="ml-[8rem]">
//                   <p className="text-black text-xl mb-2 font-extrabold">
//                     ₹{hotel.Price}
//                   </p>
//                   <button
//                     className="text-white font-medium w-[7rem] h-10 rounded"
//                     style={{ backgroundColor: "#90CCBA" }}
//                   >
//                     Book now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
        
//       </div>
//       </>
//   );
// }

// export default HotelList;