import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Mumbai from "../assets/img/mumbai.jpg"
import Hyderabad from "../assets/img/hydrabad.jpg"
import goa from "../assets/img/goa.jpg"
import jaipur from "../assets/img/jaipur.jpg"
import manali from "../assets/img/manali.jpg"

const PopularDestinations = ({ selectedLocation, setHotels })=> {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        if (selectedLocation) {
          const url = import.meta.env.VITE_BASE_URL;
          const response = await axios.get(
            `${url}/api/hotels/location/${selectedLocation}`
          );
          setHotels(response.data); // Update the hotels state in the parent component
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [selectedLocation, setHotels]);

  // const handleSearch = () => {
  //   navigate(`/hotels/location/${selectedLocation}`);
  // }
  
    return (
      <div className="container mx-auto px-4 py-4">
        <h1 className="md:text-xl text-2xl font-bold md:mb-4 mb-[2rem] md:ml-0 ml-[1rem]">Popular Destinations</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4 md:ml-0 ml-[3rem]">
          <button onClick={()=>{navigate(`/hotels/location/mumbai`);}}>
          <img
            src={Mumbai}
            alt="Image 1"
            className="rounded-xl object-cover md:w-full w-[22rem] sm:h-22 md:h-[21rem] h-[32rem] size-16 transition duration-300 transform hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/Hyderabad`);}}>
          <img
            src={Hyderabad}
            alt="Image 2"
            className="rounded-xl object-cover md:w-full w-[22rem] sm:h-22 md:h-[21rem] h-[32rem] size-16 transition duration-300 transform hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/goa`);}}>
          <img
            src={goa}
            alt="Image 3"
            className="rounded-xl object-cover md:w-full w-[22rem] sm:h-22 md:h-[21rem] h-[32rem] size-16 transition duration-300 transform hover:scale-110"
            />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/jaipur`);}}>
          <img
            src={jaipur}
            alt="Image 4"
            className="rounded-xl object-cover md:w-full w-[22rem] sm:h-22 md:h-[21rem] h-[32rem] size-16 transition duration-300 transform hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/manali`);}}>
          <img
            src={manali}
            alt="Image 5"
            className="rounded-xl object-cover md:w-full w-[22rem] sm:h-22 md:h-[21rem] h-[32rem] size-16 transition duration-300 transform hover:scale-110"
          />
           </button>
        </div>
      </div>
  );
}

export default PopularDestinations;





