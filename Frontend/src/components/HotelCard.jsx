import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoShareSocialSharp } from "react-icons/io5";

const HotelCard = ({hotel}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
    <Link to={`/hotels/${hotel.Hotel_Name}`}>
      <div className="bg-white w-[17rem] md:pl-0 md:w-[95%] md:h-[14rem] h-[21rem] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="h-auto md:h-48  mt-2 md:mt-4 ml-2 rounded-lg md:w-[18rem] md:mr-2">
        {/* <div className="h-auto md:h-48 overflow-hidden mt-4 ml-2 rounded-lg"> */}
          <img
            src={hotel?.Card_Image}
            alt={hotel?.Hotel_Name}
            className="object-center md:w-full md:h-[11rem] w-[15rem] h-[12rem] rounded m-2"
          />
        </div>
        <div className="md:p-4 pl-4 flex flex-col w-full md:w-1/3 md:mr-12">
          <h2 className="md:text-xl text-mx font-semibold mb-2 text-black">
            {hotel.Hotel_Name}
          </h2>

      <div className="hidden flex md:block">
        
          <p className="text-black md:mb-2">{hotel.Location}</p>

            {/*hotellist star rating  */}
           <div className="flex items-center md:mb-2 ">
            <p className="mt-[6px] mr-2">{hotel.Staring_Rating}/5</p>
            {[...Array(hotel.Staring_Rating)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <FaStar
                    size={12}
                    className={`text-yellow-500 cursor-pointer mt-[5px] ${
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

        {/* mobile view for Location and Star */}
        <div className="flex md:hidden">
        <ImLocation2 className="text-1xl mt-[4px] mr-2" />
          <p className="text-black ">{hotel.Location}</p>
          <div className="flex ml-4">
            <p className="mr-2 mb-2">{hotel.Staring_Rating}/5</p>
            {[...Array(hotel.Staring_Rating)].map((_, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <FaStar
                    size={12}
                    className={`text-yellow-500 cursor-pointer mt-[5px]  ${
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



          <ul className="hidden md:block md:text-black md:flex md:flex-col md:mb-[-2rem]">
            {typeof hotel.Amenities === "string" ? (
              hotel.Amenities.split(", ").map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))
            ) : (
              <li>{hotel.Amenities}</li>
            )}
          </ul>
        </div>

        <div className="hidden flex md:block md:mt-12 mt-2 pl-4 md:ml-[0rem] ">
          <p className="text-black text-xl font-extrabold mb-4 ">₹ {hotel.Price}</p>
          <Link to={`/hotels/${hotel.Hotel_Name}`}>
            <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold md:py-2 md:px-4 py-[0.50rem] px-[0.52rem] rounded">
              Book Now
            </button>
          </Link>
        </div>


            {/* mobile view */}
            
        <div className="flex md:hidden pl-4 ">
        
          <p className="text-black text-lg font-bold mt-[0.2rem] ">₹ {hotel.Price}</p>
        
        </div>
      </div>
      </Link>
    </>
  );
};

export default HotelCard;









