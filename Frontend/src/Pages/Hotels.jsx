import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import Layout from "../components/Layout";
import HotelList from "../components/HotelList";
import Filters from "../components/Filters";
import axios from "axios";

const Hotels = () => {
  const { selectedLocation } = useParams();
  const [hotels, setHotels] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [rooms, setRooms] = useState(1);

  useEffect(() => {
    // Retrieve values from local storage on mount
    const savedStartDate = localStorage.getItem("startDate");
    const savedEndDate = localStorage.getItem("endDate");
    const savedGuests = localStorage.getItem("guests");
    const savedRooms = localStorage.getItem("rooms");

    if (savedStartDate && savedEndDate) {
      setStartDate(savedStartDate);
      setEndDate(savedEndDate);
    }
    if (savedGuests) setGuests(parseInt(savedGuests, 10));
    if (savedRooms) setRooms(parseInt(savedRooms, 10));
  }, []);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        if (selectedLocation) {
          const url = import.meta.env.VITE_BASE_URL;
          const response = await axios.get(`${url}/api/hotels/location/${selectedLocation}`, {
            params: {
              startDate,
              endDate,
              guests,
              rooms
            }
          });
          setHotels(response.data);
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, [selectedLocation, startDate, endDate, guests, rooms]);

  // Function to handle setting filters
  const handleFiltersChange = (filteredHotels) => {
    setHotels(filteredHotels);
  };

  return (
    <>
      <div className="sticky bg-white top-0 md:h-[13rem] z-50">
        <Navbar />
      </div>
      <Layout>
        <Filters setFilters={handleFiltersChange} hotels={hotels} />
        <HotelList key="hotelList" hotels={hotels} />
      </Layout>
      <Footer />
    </>
  );
};

export default Hotels;
















































// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer.jsx";
// import HotelSearchBar from "../components/HotelSearchBar.jsx";
// import Layout from "../components/Layout";
// import HotelList from "../components/HotelList";
// import Filters from "../components/Filters";

// const Hotels = () => {
//   const { selectedLocation } = useParams();
//   const { state } = useLocation();
//   const [hotels, setHotels] = useState([]);
//   const [searchParams, setSearchParams] = useState({});

//   useEffect(() => {
//     // Set searchParams state with the values from location state
//     setSearchParams(state);
//   }, [state]);

//   useEffect(() => {
//     // Fetch hotels based on search criteria when searchParams changes
//     const fetchHotels = async () => {
//       try {
//         if (searchParams.startDate && searchParams.endDate && searchParams.guests && searchParams.rooms) {
//           // Fetch hotels from API using searchParams
//           const response = await fetchHotelsFromAPI(searchParams);
//           setHotels(response.data); // Assuming response contains hotels data
//         }
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };

//     fetchHotels();
//   }, [searchParams]);

//   // Function to handle setting filters
//   const handleFiltersChange = (filteredHotels) => {
//     setHotels(filteredHotels);
//   };

//   return (
//     <>
//       <div className="sticky bg-white top-0 md:h-[13rem] z-50">
//         <Navbar />
//         <div className="hidden md:block sticky bg-white md:ml-[15rem] mt-[-5rem] z-30">
//           {/* Pass searchParams to HotelSearchBar */}
//           <HotelSearchBar selectedLocation={selectedLocation} setHotels={setHotels} {...searchParams} />
//         </div>
//       </div>
//       <Layout>
//         {/* Pass hotels to Filters component */}
//         <Filters setFilters={handleFiltersChange} hotels={hotels} />
        
//         {/* Pass hotels to HotelList component */}
//         <HotelList key="hotelList" hotels={hotels} />
//       </Layout>
//     </>
//   );
// };

// export default Hotels;

















// Hotels.jsx














