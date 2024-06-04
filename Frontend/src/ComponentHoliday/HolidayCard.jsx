import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

const HolidayCard = ({ holiday }) => {
  const [expanded, setExpanded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  console.log("dwqd", holiday);
  const facilities = typeof holiday.Facilities === "string" ? holiday.Facilities.split(",") : [holiday.Facilities];
  const visibleFacilities = expanded ? facilities : facilities.slice(0, 3);
  const formattedPakageName = holiday.Package_Name.replace(/ /g, '-');
  const trimmedPackageName = holiday.Package_Name.length > 20 ? `${holiday.Package_Name.slice(0, 20)}...` : holiday.Package_Name;
  
  const handleToggleExpand = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <div
      className={`bg-white w-[18rem] md:m-0 m-4 md:w-[22rem] shadow font-poppins rounded-lg overflow-hidden mb-4 transition-all duration-300 ${
        expanded ? 'md:h-auto' : 'md:h-[32rem]'
      } flex flex-col justify-between`}
    >
      <div className="h-auto mt-2 ml-2 rounded-lg w-full mr-2">
        <img
          src={holiday?.Card_imgae}
          alt={holiday?.Package_Name}
          className="object-cover w-[16rem] h-[12rem] md:h-[14rem] md:w-[20rem] md:pt-2 rounded m-2"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div>
          <h2
            className="text-xl font-semibold mb-2 text-black"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            {trimmedPackageName}
            {showPopup && (
              <span className="absolute bg-white shadow p-2 rounded-lg text-sm">{holiday.Package_Name}</span>
            )}
          </h2>
          <div className="flex items-center mb-2">
            <ImLocation2 className="text-1xl mt-[4px] mr-2" />
            <p className="text-black">{holiday.Location}</p>
          </div>
          <ul className="text-black flex flex-col mb-4 text-sm list-disc pl-5 transition-all duration-300">
            {visibleFacilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
          {facilities.length > 3 && (
            <button
              onClick={handleToggleExpand}
              className="text-[#90CCBA] hover:text-[#46c79f] text-sm"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
          <p className="text-black text-lg font-bold">₹ {holiday.Price}</p>
          <Link to={`/holidaypackages/${formattedPakageName}`}>
            <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;














//final
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ImLocation2 } from "react-icons/im";
// // import SingleHolidayPage from "./SingleHolidayPage";


// const HolidayCard = ({ holiday,singlePackage }) => {
//   const [expanded, setExpanded] = useState(false);

//   const facilities = typeof holiday.Facilities === "string" ? holiday.Facilities.split(",") : [holiday.Facilities];
//   const visibleFacilities = expanded ? facilities : facilities.slice(0, 3);
//   const formattedPakageName = holiday.Package_Name.replace(/ /g, '-');
//   const handleToggleExpand = (e) => {
//     e.preventDefault();
//     setExpanded(!expanded);
//   };

//   return (
//     // <Link to={`/holidaypackages/${holiday.Package_Name}`} className="block">
//       <div
//         className={`bg-white w-[18rem]md:m-0 m-4 md:w-[22rem] shadow font-poppins rounded-lg overflow-hidden mb-4 transition-all duration-300 ${
//           expanded ? 'md:h-auto' : 'md:h-[32rem]'
//         }`}
//       >
//         <div className="h-auto mt-2 ml-2 rounded-lg w-full mr-2">
//           <img
//             src={holiday?.Card_imgae}
//             alt={holiday?.Package_Name}
//             className="object-cover w-[16rem] h-[12rem] md:h-[14rem] md:w-[20rem] md:pt-2 rounded m-2"
//           />
//         </div>
        
//         <div className="p-4 flex flex-col w-full">
//           <h2 className="text-xl font-semibold mb-2 text-black">
//             {holiday.Package_Name}
//           </h2>

//           <div className="flex items-center mb-2">
//             <ImLocation2 className="text-1xl mt-[4px] mr-2" />
//             <p className="text-black">{holiday.Location}</p>
//           </div>

//           <ul className="text-black flex flex-col mb-4 text-sm list-disc pl-5 transition-all duration-300">
//             {visibleFacilities.map((facility, index) => (
//               <li key={index}>{facility}</li>
//             ))}
//           </ul>
//           {facilities.length > 3 && (
//             <button
//               onClick={handleToggleExpand}
//               className="text-[#90CCBA] hover:text-[#46c79f] text-sm"
//             >
//               {expanded ? "Show less" : "Show more"}
//             </button>
//           )}
          
//           <div className="flex justify-between items-center mt-2">
//             <p className="text-black text-lg font-bold">₹ {holiday.Price}</p>
//         <Link to = {`/holidaypackages/${formattedPakageName}`}>
//           <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded">
//             Book Now
//           </button>
//         </Link>
        
//           </div>
//         </div>
//       </div>
      
//     // </Link>
//   );
// };

// export default HolidayCard;














//final
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
// import { ImLocation2 } from "react-icons/im";
// import { IoShareSocialSharp } from "react-icons/io5";

// const HolidayCard = ({holiday}) => {
//   const [hover, setHover] = useState(null);

//   return (
//     <>
    
//     <Link to={`/holidaypackages/${holiday.Package_Name}`}>
//       <div className="bg-white w-[17rem] md:pl-0 md:w-[95%] md:h-[14rem] h-[21rem] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row">
      
//         <div className="h-auto md:h-48  mt-2 md:mt-4 ml-2 rounded-lg md:w-[18rem] md:mr-2">
//         {/* <div className="h-auto md:h-48 overflow-hidden mt-4 ml-2 rounded-lg"> */}
//           <img
//             src={holiday?.Card_imgae}
//             alt={holiday?.Package_Name}
//             className="object-center md:w-full md:h-[11rem] w-[15rem] h-[12rem] rounded m-2"
//           />
//         </div>
//         <div className="md:p-4 pl-4 flex flex-col w-full md:w-1/3 md:mr-12">
//           <h2 className="md:text-xl text-mx font-semibold mb-2 text-black">
//             {holiday.Package_Name}
//           </h2>

//          <div className="hidden flex md:block">
        
//           <p className="text-black md:mb-2">{holiday.Location}</p>
//         </div>

//         {/* mobile view for Location and Star */}
//         <div className="flex md:hidden">
//         <ImLocation2 className="text-1xl mt-[4px] mr-2" />
//           <p className="text-black ">{holiday.Location}</p>
          
//         </div>

//            <ul className="hidden md:block md:text-black md:flex md:flex-col md:mb-[-2rem] md:text-mx">
//           {typeof holiday.Facilities === "string" ? (
//               holiday.
//               Facilities.split(", ").map((facilities, index) => (
//                 <li key={index}>{facilities}</li>
//               ))
//             ) : (
//               <li>{holiday.Facilities}</li>
//             )}
//           </ul> 

//           </div>

//         <div className="hidden flex md:block md:mt-12 mt-2 pl-4 md:ml-[0rem] ">
//           <p className="text-black text-xl font-extrabold mb-4 ">₹ {holiday.Price}</p>
//           <Link to={`/holidaypackages/${holiday.Package_Name}`}>
//             <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold md:py-2 md:px-4 py-[0.50rem] px-[0.52rem] rounded">
//               Book Now
//             </button>
//           </Link>
//         </div>


//             {/* mobile view */}
            
//         <div className="flex md:hidden pl-4 ">
        
//           <p className="text-black text-lg font-bold mt-[0.2rem] ">₹ {holiday.Price}</p>
        
//         </div>
//       </div>
//       </Link>
//     </>
//   );
// };

// export default HolidayCard;

