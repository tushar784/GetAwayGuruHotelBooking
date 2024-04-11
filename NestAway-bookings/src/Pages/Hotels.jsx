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
      <div className="sticky top-2 bg-white w-[102rem]  h-[13rem] shadow-lg z-50">
        <Navbar />
        <div className="sticky top-[-1rem] ml-[15rem] bg-white z-30">
        <HotelSearchBar />
      </div>
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
