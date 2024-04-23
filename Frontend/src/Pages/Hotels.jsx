//final


import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HotelSearchBar from "../components/HotelSearchBar.jsx";
import Layout from "../components/Layout";
import HotelList from "../components/HotelList";
import Filters from "../components/Filters";
import axios from "axios";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  console.log("hotels in hotesl main",hotels);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/hotels`);
        //console.log(response);
        setHotels(response.data);
        console.log("hotels in hotesl main",response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <>
      <div className="sticky top-2 bg-white w-full h-[13rem] shadow-lg z-50">
        <Navbar />
        <div className="sticky top-[-1rem] ml-[15rem] bg-white z-30">
          <HotelSearchBar />
        </div>
      </div>

      <Layout>
        {[<Filters />, <HotelList  hotels={hotels} />]}
      </Layout>
    </>
  );
};

export default Hotels;



























// import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer.jsx";
// import HotelSearchBar from "../components/HotelSearchBar.jsx";
// import Layout from "../components/Layout";
// import HotelList from "../components/HotelList";
// import Filters from "../components/Filters";
// import axios from "axios";

// const Hotels = () => {
//   const [hotels, setHotels] = useState([]);
//   const [filters, setFilters] = useState({
//     freeCancellation: false,
//     freeBreakfast: false,
//     parkingAvailability: false,
//     priceSort: "high-to-low",
//     starRating: "5-star",
//   });

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const url = import.meta.env.VITE_BASE_URL;
//         const response = await axios.get(`${url}/api/hotels`);
//         setHotels(response.data);
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   console.log("Filters in Hotels:", filters);
//   return (
//     <>
//       <div className="sticky top-2 bg-white w-full h-[13rem] shadow-lg z-50">
//         <Navbar />
//         <div className="sticky top-[-1rem] ml-[15rem] bg-white z-30">
//           <HotelSearchBar />
//         </div>
//       </div>

//       <Layout>
//         <Filters filters={filters} setFilters={setFilters} />
//         <HotelList hotels={hotels} />
//       </Layout>
//     </>
//   );
// };

// export default Hotels;







