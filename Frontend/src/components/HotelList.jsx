import React from "react";
import HotelCard from "./HotelCard";
import { Link } from "react-router-dom";

const HotelList = ({ hotels,hotel }) => {
  return (
   
    <div className="container md:mx-auto font-poppins md:pl-[5rem] md:pt-[2rem]  ">
      {/* <h1 className="md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2" >Showing Properties in {hotels.Location}</h1> */}

      <h1 className="md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2" >Showing Properties in  {hotels.length ? hotels[0].Location : 'Selected Location'}</h1>
     
      {/* <h1 className="text-black md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2 ">{hotel.Location}</h1> */}
      
      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.Hotel_id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
export default HotelList;
