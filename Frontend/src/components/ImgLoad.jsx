import React, { useState,useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoShareSocialSharp } from "react-icons/io5";
import axios from "axios";

const ImgLoad = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BASE_URL
    // Fetch data from the API endpoint using Axios
    axios.get(`${url}/api/hotels`)
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }, []);

  return (
    <>
      {hotels.map((hotel,index)=>
      <><div className="flex bg-white-200 ml-[4rem] bg-white-300 w-[70rem]">
          <div key={index} className="mt-[1.5rem] ml-[2rem] w-[25rem] ">
            <img
              className="rounded mt-2 h-[26rem]"
              src={hotel.Image_1}
              alt="" />
          </div>

          <div className="flex-direaction-column mt-[2rem] ml-[20px] border-1 w-[19rem]">
            <img
              className="rounded w-[18rem] h-[12.5rem]"
              src={hotel.Image_2}
              alt="" />
            <img
              className="rounded w-[18rem] h-[12.5rem] mt-4"
              src={hotel.Image_3}
              alt="" />
          </div>


          <div className="flex-direaction-column mt-[2rem] w-[19rem]">
            <img
              className="rounded w-[18rem] h-[12.5rem]"
              src={hotel.Image_4}
              alt="" />
            <div className="mt-4 rounded">
              <img
                className="rounded w-[18rem] h-[12.5rem]"
                src={hotel.Image_5}
                alt="" />
              <div className="relative inset-0 flex items-center justify-center">
                <p className="text-white mb-[12rem] absolute text-2xl">12+ Photos</p>
              </div>
            </div>
          </div>
        </div><div className="items-center w-[70rem] h-full ml-[6rem] mt-2">
            <h1 className="text-black text-2xl font-bold mr-2">
              {hotel.Hotel_Name}
            </h1>
            <div className="flex justify-normal gap-2">
              {[...Array(4)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <FaStar
                      size={12}
                      className={`text-yellow-500 cursor-pointer mt-4   ${currentRating <= (hover || rating)
                        ? "text-yellow-500"
                        : "text-gray-400"}`}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)} />
                  </label>
                );
              })}


              <p className="mt-[10px]  ">4/5 ratings</p>
              <div className="flex mt-0 gap-2 ">
                <ImLocation2 className="text-1xl mt-[15px] " />
                <p className="mt-[10px] ml-[5px]">
                  Address: Sector-12,Vashi, Navi Mumbai
                </p>
                <IoShareSocialSharp className="text-1xl mt-[15px]  " />
                <p className="cursor-pointer mt-[10px]  ">share</p>
              </div>
            </div>
          </div><br /></>
        )}
        </>
    
  );
};

export default ImgLoad;





















// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/im";
// import { IoShareSocialSharp } from "react-icons/io5";

// const ImgLoad = () => {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);

//   return (
//     <div>
//       <div className="flex bg-white-200 ml-[4rem] bg-white-300 w-[70rem]">
//         <div className="mt-[1.5rem] w-[30rem]">
//           <img
//             className="rounded mb-1 h-[27rem]"
//             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/1e/e3/50/jw-marriott-hotel-mumbai.jpg?w=1000&h=800&s=1"
//             alt=""
//           />
//         </div>

//         <div className="flex-direaction-column mt-[2rem] ml-[20px] border-1 w-[339px]">
//           <img
//             className="rounded w-[20rem] h-[212px]"
//             src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/49845683.jpg?k=2e9c1cf108decd41a54d0803f175c39ea70a02ad88ff753b9e806f64e62e9b65&o=&hp=1"
//             alt=""
//           />
//           <img
//             className="rounded w-[20rem] h-[192px] mt-4"
//             src="https://hotelwithbathtub.com/wp-content/uploads/hotel-courtyard-by-marriott-navi-mumbai-with-bathtub.jpeg"
//             alt=""
//           />
//         </div>
//         <div className="flex-direaction-column mt-[2rem] w-[19rem]">
//           <img
//             className="rounded w-[20rem] h-[13.5rem]"
//             src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/09/fd/d3/deleue-room.jpg?w=1200&h=-1&s=1"
//             alt=""
//           />
//           <div className="mt-3 rounded">
//             <img
//               className="rounded w-[20rem] h-[193px]"
//               src="https://content.r9cdn.net/rimg/himg/01/25/f7/expediav2-76334-640386-685927.jpg"
//               alt=""
//             />
//             <div className="relative inset-0 flex items-center justify-center">
//               <p className="text-white mb-[12rem] absolute text-2xl">12+ Photos</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="items-center w-[70rem] h-full ml-[4rem]">
//         <h1 className="text-black text-2xl font-bold mr-2">
//           Townhouse 446 Vista Suites
//         </h1>
//         <div className="flex justify-normal gap-2">
//           {[...Array(4)].map((_, index) => {
//             const currentRating = index + 1;
//             return (
//               <label key={index}>
//                 <FaStar
//                   size={12}
//                   className={`text-yellow-500 cursor-pointer mt-4   ${
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
      
          
//           <p className="mt-[10px]  ">4/5 ratings</p>
//         <div className="flex mt-0  gap-2 ">
//           <ImLocation2 className="text-1xl mt-[15px] " />
//           <p className="mt-[10px] ml-[5px]">
//             Address: Sector-12,Vashi, Navi Mumbai
//           </p>
//           <IoShareSocialSharp className="text-1xl mt-[15px]  " />
//           <p className="cursor-pointer mt-[10px]  ">share</p>
//         </div>
//         </div>
//       </div>
//       <br />
//     </div>
//   );
// };

// export default ImgLoad;