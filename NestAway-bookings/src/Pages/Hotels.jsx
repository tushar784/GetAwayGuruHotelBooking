import React from "react";
import hotels from "../HotelList/hotellist.json";
import HotelSearchBar from "../components/HotelSearchBar";
import Navbar from "../components/Navbar";

import Layout from "../components/Layout";
import HotelList from "../components/HotelList";
import Filters from "../components/Filters";

const Hotels = () => {
  return (
    <>
      <Navbar className="mb-6 h-[12rem]" />
      <div className="sticky top-0 ml-[10rem] h-[5.4rem] bg-white z-10">
        <HotelSearchBar />
      </div>
   
      <Layout >
      {[
        <Filters />,
        <HotelList hotels={hotels}  />,
      ]}
    </Layout>
      
    </>
  );
};

export default Hotels;














// import React from "react";
// import hotels from "../HotelList/hotellist.json";
// import HotelSearchBar from "../components/HotelSearchBar";
// import Navbar from "../components/Navbar";
// import HotelList from "../components/HotelList";

// const Hotels = () => {
//   return (
//     <>
//     <Navbar/>
  
//       <HotelSearchBar />
//       <HotelList hotels={hotels} />
//     </>
//   );
// };

// export default Hotels;



















//final today




// import Filters from "../HotelList/Filters";
// // import HotelSearchBar from "../components/HotelSearchBar"
// import Navbar from "../components/Navbar";
// import HotelList from "../HotelList/HotelList";
// import HotelSearchBar from "../components/HotelSearchBar";

// const Hotels = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="ml-[6rem]"><HotelSearchBar /></div>
//       <div className="flex bg-gray-200">
//         <Filters />
//         <HotelList />
//       </div>
//     </>
//   );
// };

// export default Hotels;
