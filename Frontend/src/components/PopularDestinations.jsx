import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Mumbai from "../assets/img/mumbai.jpg"
import Hyderabad from "../assets/img/hydrabad.jpg"
import goa from "../assets/img/goa.jpg"
import jaipur from "../assets/img/jaipur.jpg"
import manali from "../assets/img/manali.jpg"

const PopularDestinations = ()=> {
  const { selectedLocation } = useParams();
  const navigate = useNavigate();
  const [hotels, setHotels] = useState('')
  
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

    return (
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4">
          <button onClick={()=>{navigate(`/hotels/location/mumbai`);}}>
          <img
            src={Mumbai}
            alt="Image 1"
            className="rounded-xl object-cover w-full sm:h-22 md:h-[21rem] h-[31rem] size-16 transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/Hyderabad`);}}>
          <img
            src={Hyderabad}
            alt="Image 2"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/goa`);}}>
          <img
            src={goa}
            alt="Image 3"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/jaipur`);}}>
          <img
            src={jaipur}
            alt="Image 4"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/manali`);}}>
          <img
            src={manali}
            alt="Image 5"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
           </button>
        </div>
      </div>
  );
}

export default PopularDestinations;





