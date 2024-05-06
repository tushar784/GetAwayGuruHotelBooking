import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



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
        <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4">
          <button onClick={()=>{navigate(`/hotels/location/mumbai`);}}>
          <img
            src="src/assets/img/mumbai.jpg"
            alt="Image 1"
            className="rounded-xl object-cover w-full sm:h-22 md:h-[21rem] h-[31rem] size-16 transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/hydrabad`);}}>
          <img
            src="src/assets/img/hydrabad.jpg"
            alt="Image 2"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/goa`);}}>
          <img
            src="src/assets/img/goa.jpg"
            alt="Image 3"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <button onClick={()=>{navigate(`/hotels/location/jaipur`);}}>
          <img
            src="src/assets/img/jaipur.jpg"
            alt="Image 4"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          </button>
          <img
            src="src/assets/img/manali.jpg"
            alt="Image 5"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
        </div>
      </div>
  );
}

export default PopularDestinations;







// import Records from "./sampledata/records.json"
// function PopularDestinations() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>

//       <div className="inner">
//         {
//           Records && Records.map( record =>{
//             return(
//               <div className="box flex">
//                 <img src={ record.icon}/>

//                 <br/>
//                 {record.Properties}

//                 <br/>
//                 {record.Location}

//               </div>
//             )
//           })
//         }
//       </div>

//      </div>
//   );
// }

// export default PopularDestinations;

















  






























