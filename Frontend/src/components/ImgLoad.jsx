import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { IoShareSocialSharp } from "react-icons/io5";

const ImgLoad = ({ hotel }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div >
      <div className="flex bg-white-200 ml-[4rem] bg-white-300 w-[70rem]">
      <div className="mt-[1.5rem] ml-[2rem] w-[25rem]">
        <img
          className="rounded mt-2 h-[26rem] object-cover"
          src={hotel.Image_1}
          alt={hotel.Hotel_Name}
        />
      </div>

      <div className="flex-direction-column mt-[2rem] ml-[20px] border-1 w-[19rem]">
        <img
          className="rounded w-[18rem] h-[12.5rem]"
          src={hotel.Image_2}
          alt=""
        />
        <img
          className="rounded w-[18rem] h-[12.5rem] mt-4"
          src={hotel.Image_3}
          alt=""
        />
      </div>

      <div className="flex-direction-column mt-[2rem] w-[19rem]">
        <img
          className="rounded w-[18rem] h-[12.5rem]"
          src={hotel.Image_4}
          alt=""
        />
        <div className="mt-4 rounded">
          <img
            className="rounded w-[18rem] h-[12.5rem]"
            src={hotel.Image_5}
            alt=""
          />
          <div className="relative inset-0 flex items-center justify-center">
            <p className="text-white mb-[12rem] absolute text-2xl">
              12+ Photos
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* <div className="items-center w-[70rem] h-full ml-[6rem] mt-2"> */}
      <div className="items-center w-[70rem] h-full ml-[6rem] mt-[1rem]">
        <h1 className="text-black text-2xl font-bold mr-2">
          {hotel.Hotel_Name}
        </h1>
        <div className="flex justify-normal gap-2">
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

          <p className="mt-[10px]">{hotel.Staring_Rating}/5</p>
          <div className="flex mt-0 gap-2 ">
            <ImLocation2 className="text-1xl mt-[15px] " />
            <p className="mt-[10px] ml-[5px]">{hotel.Location}</p>
            <IoShareSocialSharp className="text-1xl mt-[15px]  " />
            <p className="cursor-pointer mt-[10px]">share</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ImgLoad;
