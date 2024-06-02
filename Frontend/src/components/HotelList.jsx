import React, { useState } from "react";
import HotelCard from "./HotelCard";
import Filters from "./Filters";

const HotelList = ({ hotels }) => {
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleFiltersChange = (filteredHotels) => {
    setFilteredHotels(filteredHotels);
  };

  return (
    <div className="container mx-auto px-4 mt-[2rem]">
      <div className="flex items-center mb-4">
        <h1 className="w-[21rem] ml-8 text-xl font-semibold">
          Showing Properties in{" "}
          {filteredHotels.length ? filteredHotels[0].Location : "Selected Location"}
        </h1>
        <Filters setFilters={handleFiltersChange} hotels={filteredHotels} className="mr-4 w-[12rem]"/>
      </div>
      <div className="ml-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.Hotel_id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;