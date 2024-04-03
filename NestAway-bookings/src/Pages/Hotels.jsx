// // import React from "react";
// // import { SearchProvider } from "../Search_Context/SearchContext";
// import HotelSearchBar from "../components/HotelSearchBar";
// import Navbar from "../components/Navbar";
// import Filters from "../HotelList/Filters";
// import HotelsList from "../HotelList/HotelList";

// const Hotels = () => {
//   return (

//       <>
//      <Navbar />
//      {/* <Filters />  */}
//     {/* <HotelSearchBar />  */}
//       <HotelsList/>
//       </>
//   );
// };

// export default Hotels;

// // import React from "react";
// import { SearchProvider } from "./SearchContext";
// import HotelSearchBar from "./HotelSearchBar";
// import HotelsList from "./HotelsList";

// const Hotels = () => {
//   return (
//     <SearchProvider>
//       <HotelSearchBar />
//       <HotelsList />
//     </SearchProvider>
//   );
// };

// export default Hotels;

import Filters from "../HotelList/Filters";
// import HotelSearchBar from "../components/HotelSearchBar"
import Navbar from "../components/Navbar";
import HotelList from "../HotelList/HotelList";
import HotelSearchBar from "../components/HotelSearchBar";

const Hotels = () => {
  return (
    <>
      <Navbar />
      <div className="ml-[6rem]"><HotelSearchBar /></div>
      <div className="flex bg-gray-200">
        <Filters />
        <HotelList />
      </div>
    </>
  );
};

export default Hotels;
