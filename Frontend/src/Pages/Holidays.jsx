import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import HolidayList from "../ComponentHoliday/HolidayList";
import axios from "axios"; // Import axios

const Holidays = () => {
  const { selectedLocation } = useParams();
  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    const fetchHolidayPackages = async () => {
      try {
        if (selectedLocation) {
          const response = await axios.get(`/api/holidaypackages/location/${selectedLocation}`);
          setHoliday(response.data); // Set holiday state with response.data
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching holiday packages:", error);
      }
    };

    fetchHolidayPackages();
  }, [selectedLocation]);

  return (
    <>
      <Navbar />
      <HolidayList holiday={holiday} />
    </>
  );
};

export default Holidays;





// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import Navbar from "../components/Navbar";
// // import HotelSearchBar from "../components/HotelSearchBar.jsx";
// import Layout from "../components/Layout";
// import HotelList from "../components/HotelList";
// import Filters from "../components/Filters";
// import HolidaySeachBar from "../ComponentHoliday/HolidaySearchBar";

// const Holidays = () => {
//   const { selectedLocation ,han} = useParams();
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
//           setHotels(response.data);
//           console.log(response.data); // Assuming response contains hotels data
//         }
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };

//     fetchHotels();
//   }, [searchParams]);


//   return (
//     <>
//       <div className="sticky bg-white top-0 md:h-[13rem] z-50">
//         <Navbar />
//         <div className="hidden md:block sticky bg-white md:ml-[15rem] mt-[-5rem] z-30">
//           {/* Pass searchParams to HotelSearchBar */}
//           {/* <HotelSearchBar selectedLocation={selectedLocation} setHotels={setHotels} {...searchParams} /> */}
//           <HolidaySeachBar />
//         </div>
//       </div>
//       <Layout>
//         {/* Pass hotels to Filters component */}
//         {/* <Filters setFilters={handleFiltersChange} hotels={hotels} /> */}
        
//         {/* Pass hotels to HotelList component */}
//         <HotelList key="hotelList" hotels={hotels} />
//       </Layout>
//     </>
//   );
// };

// export default Holidays;














