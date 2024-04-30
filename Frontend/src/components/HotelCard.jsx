import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <div className="bg-white h-[14rem] w-[95%] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="h-auto md:h-48 overflow-hidden mt-4 ml-2 rounded-lg">
          <img
            src={hotel?.Card_Image}
            alt={hotel?.Hotel_Name}
            className="object-cover w-[18rem] h-[11rem] rounded m-2"
          />
        </div>
        <div className="p-4 w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-2 text-black">
            {hotel.Hotel_Name}
          </h2>
          <div>
            <p className="text-black mb-2">{hotel.Location}</p>
            <div className="flex items-center mb-2">
              <div className="flex justify-normal gap-2">
                <p className="mt-[10px]">{hotel.Staring_Rating}/5</p>
                {[...Array(hotel.Staring_Rating)].map((_, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <FaStar
                        size={12}
                        className={`text-yellow-500 cursor-pointer mt-4 ${
                          currentRating <= (hover || rating)
                            ? "text-yellow-500"
                            : "text-gray-400"
                        }`}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
            <ul className="text-black flex flex-col mb-[-2rem]">
              {typeof hotel.Amenities === "string" ? (
                hotel.Amenities.split("  ").map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))
              ) : (
                hotel.Amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))
              )}
            </ul>
            

{/* <ul className="text-black flex flex-col mb-[-2rem] pl-4 text-sm">
  {typeof hotel.Amenities === "string" ? (
    hotel.Amenities.split(", ").map((amenity, index) => (
      <li key={index}>{amenity}
        <span className="ml-2">&#8226;</span> {amenity}
      </li>
    ))
  ) : (
    hotel.Amenities.map((amenity, index) => (
      <li key={index}>{amenity}
        <span className="ml-2">&#8226;</span> {amenity}
      </li>
    ))
  )}
</ul> */}




          </div>
        </div>
        <div className="mt-12 ml-[2rem]">
          <p className="text-black font-extrabold mb-4">₹ {hotel.Price}</p>
          <Link to={`/hotels/${hotel.Hotel_Name}`}>
            <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HotelCard;











// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/im";
// import { IoShareSocialSharp } from "react-icons/io5";
// const HotelCard = ({hotel}) => {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   return (
//     <>
//         <div className="bg-white h-[14rem] w-[95%] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row">
//           <div className="h-auto md:h-48 overflow-hidden mt-4 ml-2 rounded-lg">
//           {/* <h1>{hotel.Hotel_Name}</h1> */}
//             <img
//               src={hotel?.Card_Image}
//               alt={hotel?.Hotel_Name}
//               className="object-cover w-[18rem] h-[11rem] rounded m-2"
//             />
//           </div>
//           <div className="p-4 w-full md:w-1/3">
//             <h2 className="text-xl font-semibold mb-2 text-black">
//               {hotel.Hotel_Name}
//             </h2>

//         <div>
//         <p className="text-black mb-2">{hotel.Location}</p>
//          <div className="flex items-center mb-2">
          
//           <div className="flex justify-normal gap-2">
//           <p className="mt-[10px]">{hotel.Staring_Rating}/5</p>
//             {[...Array(hotel.Staring_Rating)].map((_, index) => {
//               const currentRating = index + 1;
//               return (
//               <label key={index}>
//                 <FaStar
//                   size={12}
//                   className={`text-yellow-500 cursor-pointer mt-4 ${
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

//           </div>
//         </div>

//                <ul className="text-black flex flex-col mb-[-2rem]">
//                 {typeof hotel.Amenities === "string" ? (
//                   hotel.Amenities.split(", ").map((amenity, index) => (
//                     <li key={index}>{amenity}</li>
//                   ))
//                 ) : (
//                   <li>{hotel.Amenities}</li>
//                 )}
//               </ul>
           

      

//             </div>
//           </div>
//           <div className="mt-12 ml-[2rem]">
//             <p className="text-black font-extrabold mb-4">₹ {hotel.Price}</p>
//             <Link to={`/hotels/${hotel.Hotel_Name}`}>
//             <button
//               className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded">
//               Book Now
//             </button>
//             </Link>
//           </div>
//         </div>
//     </>
//   );
// };

// export default HotelCard;
