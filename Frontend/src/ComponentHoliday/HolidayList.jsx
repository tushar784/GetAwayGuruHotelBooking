import React from "react";
import HolidayCard from "./HolidayCard";

const HolidayList = ({ holiday }) => {
  return (
    <div className="container md:mx-auto font-poppins md:pl-[5rem] md:pt-[2rem]">
      <h1 className="md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2">
        Showing Properties in
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* {holiday.map((holidays) => (
            <HolidayCard key={holidays.Package_id} holiday={holiday} />
        ))} */}
        {Array.isArray(holiday) && holiday.map((holidays) => (
          <HolidayCard key={holidays.Package_id} holiday={holidays} />
        ))}



      </div>
    </div>
  );
};

export default HolidayList;






// import React from "react";
// // import HotelCard from "./HotelCard";
// import { Link } from "react-router-dom";
// import HolidayCard from "./HolidayCard";

// const HolidayList = ({ holiday }) => {
//   return (
   
//     <div className="container md:mx-auto font-poppins md:pl-[5rem] md:pt-[2rem]  ">
//       <h1 className="md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2" >Showing Properties in </h1>

//       {/* <h1 className="text-black md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2 ">{hotel.Location}</h1> */}
      
//       <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        
//         //   <HotelCard key={hotel.Hotel_id} hotel={hotel} />
//         <HolidayCard />
        
//       </div>
//     </div>
//   );
// };
// export default HolidayList;
