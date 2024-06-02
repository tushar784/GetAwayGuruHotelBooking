import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const HotelCard = ({ hotel }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const amenities = typeof hotel.Amenities === "string" ? hotel.Amenities.split(" , ") : [hotel.Amenities];

  const handleToggleExpand = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div className="bg-white w-[17rem] md:w-[22rem] md:ml-[1rem] shadow font-poppins rounded-lg overflow-hidden mb-4 mt-2 transition-all duration-300 md:h-[33rem] flex flex-col justify-between">
      <div>
        <div className="h-auto mt-2 ml-2 rounded-lg w-full mr-2">
          <img
            src={hotel?.Card_Image}
            alt={hotel?.Hotel_Name}
            className="object-cover w-[15rem] h-[12rem] md:h-[14rem] md:w-[20rem] md:pt-2 rounded m-2"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-black">{hotel.Hotel_Name}</h2>
          <div className="flex items-center mb-2">
            <ImLocation2 className="text-xl mt-[4px] mr-2" />
            <p className="text-black">{hotel.Location}</p>
          </div>
          <div className="flex items-center mb-2">
            <p className="mt-[6px] mr-2">{hotel.Staring_Rating}/5</p>
            {[...Array(hotel.Staring_Rating)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <FaStar
                    size={12}
                    className={`text-yellow-500 cursor-pointer mt-[5px] ${
                      currentRating <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <ul className="text-black flex flex-col mb-4 text-sm list-disc pl-5 transition-all duration-300">
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
          {amenities.length > 3 && (
            <button onClick={handleToggleExpand} className="text-[#90CCBA] hover:text-[#46c79f] text-sm">
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>
      <div className="p-4 flex justify-between items-center">
        <p className="text-black text-lg font-bold">₹ {hotel.Price}</p>
        <Link to={`/hotels/${hotel.Hotel_Name}`}>
          <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;









// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/im";

// const HotelCard = ({ hotel }) => {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   const [expanded, setExpanded] = useState(false);
//   const amenities = typeof hotel.Amenities === "string" ? hotel.Amenities.split(" , ") : [hotel.Amenities];

//   const handleToggleExpand = (e) => {
//     e.preventDefault();
//     setExpanded(!expanded);
//   };

//   return (
//     <div
//       className={"bg-white w-[17rem] md:w-[22rem] md:ml-[1rem] shadow font-poppins rounded-lg overflow-hidden mb-4 mt-2 transition-all duration-300 "}
//     >
//       <div className="h-auto mt-2 ml-2 rounded-lg w-full mr-2">
//         <img
//           src={hotel?.Card_Image}
//           alt={hotel?.Hotel_Name}
//           className="object-cover w-[15rem] h-[12rem] md:h-[14rem] md:w-[20rem] md:pt-2 rounded m-2"
//         />
//       </div>
//       <div className="p-4 flex flex-col w-full">
//         <h2 className="text-lg font-semibold mb-2 text-black">{hotel.Hotel_Name}</h2>
//         <div className="flex items-center mb-2">
//           <ImLocation2 className="text-xl mt-[4px] mr-2" />
//           <p className="text-black">{hotel.Location}</p>
//         </div>
//         <div className="flex items-center mb-2">
//           <p className="mt-[6px] mr-2">{hotel.Staring_Rating}/5</p>
//           {[...Array(hotel.Staring_Rating)].map((_, index) => {
//             const currentRating = index + 1;
//             return (
//               <label key={index}>
//                 <FaStar
//                   size={12}
//                   className={`text-yellow-500 cursor-pointer mt-[5px] ${
//                     currentRating <= (hover || rating) ? "text-yellow-500" : "text-gray-400"
//                   }`}
//                   onMouseEnter={() => setHover(currentRating)}
//                   onMouseLeave={() => setHover(null)}
//                 />
//               </label>
//             );
//           })}
//         </div>
//         <ul className="text-black flex flex-col mb-4 text-sm list-disc pl-5 transition-all duration-300">
//           {amenities.map((amenity, index) => (
//             <li key={index}>{amenity}</li>
//           ))}
//         </ul>
//         {amenities.length > 3 && (
//           <button onClick={handleToggleExpand} className="text-[#90CCBA] hover:text-[#46c79f] text-sm">
//             {expanded ? "Show less" : "Show more"}
//           </button>
//         )}
//         <div className="flex justify-between items-center mt-2">
//           <p className="text-black text-lg font-bold">₹ {hotel.Price}</p>
//           <Link to={`/hotels/${hotel.Hotel_Name}`}>
//             <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded ">
//               Book Now
//             </button>
//           </Link>
//         </div>
//       </div>

      
//     </div>
//   );
// };

// export default HotelCard;


