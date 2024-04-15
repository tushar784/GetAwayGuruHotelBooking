import React from "react";
import { ImLocation2 } from "react-icons/im";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbSwimming } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { MdOutlineDinnerDining } from "react-icons/md";
 import { MdRoomService } from "react-icons/md";
import { MdOutlineSportsBar } from "react-icons/md";

const Map = () => {
  return (
    <div>

<div className="flex w-[60rem] ml-[6rem]">
        <div className=" ">
          <h1 className=" font-bold text-2xl">Map Location</h1>

          <iframe
            className="shadow-lg rounded border mr-9 mt-4 inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15083.03782873933!2d72.993920043353!3d19.07431074377146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c13ad9f6a3e1%3A0xa4084755c61d654a!2sTownhouse%20446%20Vista%20Suites!5e0!3m2!1sen!2sin!4v1712043393073!5m2!1sen!2sin"
            width="700"
            height="320"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="border  shadow-lg h-[19rem] p-5 mt-14 w-[25rem]">
          <h1 className="card-title text-2xl font-semibold">
            Standard Room Queen size <br />
            bed
          </h1>
          <h2 className="mt-3 text-red-700 text-[20px]">Non-refundable</h2>
          <p className="text-lg font-bold mt-4 text-[45px]">₹5,669</p>
          <p className="mt-5">per night of 1 room</p>
          <br />
          <button
            className="text-white font-bold w-80 h-10  mb-4 rounded"
            style={{ backgroundColor: "#90CCBA" }}
          >
            Reserve Now
          </button>
        </div>
      </div>

             {/* Amenities */}

      <div className=" mt-6 ml-[6rem] mb-[2rem]">
        <h1 className=" font-bold text-2xl">Amenities</h1>

        <div className=" flex ml-[4rem] mt-[2rem] content-evenly w-[60rem] justify-between p-2 h-[8rem] gap-[5rem]">
          <div >
            <TbSwimming className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
            <h1 className="  ">Swimming</h1>
            <p className=" ml-3 text-6">pool</p>
          </div>
          <div >
            <CgGym className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
            <h1 className="  ml-1 text-6">Gym</h1>
            <p className=" text-6">access</p>
          </div>
          <div >
            <FaWifi className="text-4xl p-2 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
            <h1 className=" ml-3 text-6">wifi</h1>
          </div>
          <div>
            <MdOutlineDinnerDining className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
            <h1 className=" ml-1 text-6">Buffet</h1>
            <p className=" text-6">breakfast</p>
          </div>
          <div>
            <MdRoomService className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
            <h1 className=" ml-3 text-6">24h</h1>
            <p className="  ">Room service</p>
          </div>
          <div>
            <MdOutlineSportsBar className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
            <h1 className=" ml-3 text-6">bar</h1>
          </div>
        </div>
      </div>
      <div className=" w-[17rem] ml-[6rem]">
            <h1 className="text-2xl font-bold ">Select Your Room</h1>
        <select
          className="bg-white-200 w-[180px] mt-3 h-7 text-black rounded  border border-black"
          name="room"
          id="room"
        >
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Room</option>
        </select>
      </div>

    
    </div>
     
  );
};

export default Map;