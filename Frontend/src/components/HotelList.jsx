import HotelCard from "./HotelCard";
import { useState,useEffect } from "react";
import axios from "axios";

const HotelList = () => {
  //api
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get("http://localhost:4000/api/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }, []);
  return (
    <div className="container mx-auto font-poppins pl-[5rem] pt-[2rem]  ">
      <h1 className="text-xl font-semibold mb-4">
        Showing properties in navi mumbai
      </h1>
      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.Hotel_id} hotel={hotel.Hotel_Name} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
