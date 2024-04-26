import { DateRange } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const HotelSearchBar = ({ selectedLocation, setHotels }) => {
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

  const handleSearch = () => {
    navigate(`/hotels/location/${selectedLocation}`);
  }
  
  const handleLocationChange = (event) => {
    selectedLocation = event.target.value;
    
  };

  // For Calendar logic
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // For Guest and Room Logic
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    guest: 1,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  
  const destinations = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "New Delhi", label: "New Delhi" },
    { value: "Agra", label: "Agra" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Bengaluru", label: "Bengaluru" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Goa", label: "Goa" },
    { value: "Manali", label: "Manali" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kerla", label: "Kerla" },
    { value: "Dubai", label: "Dubai" },
    { value: "Bangkok", label: "Bangkok" },
    { value: "Sigapore", label: "Sigapore" },
    { value: "Phuket", label: "Phuket" },
  ];

  return (
    <div className="lg:h-16 md:h-[12rem] w-full lg:w-5/6 bg-[white] font-poppins flex justify-around absolute px-0 py-2.5 border-[1px] rounded-xl lg:ml-4 lg:mt-28 lg:mb-2 md:ml-2">
    {/* Content of your HotelSearchBar component... */}

    <div className="items-center gap-2.5">
      <h1 className="ml-[2.3rem] font-semibold">Destination</h1>

      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">Select Location</option>
        {destinations.map((destination) => (
          <option key={destination.value} value={destination.value}>
            {destination.label}
          </option>
        ))}
      </select>
    </div>

      {/* Calender */}
      <div className="headerSearchItem">
        <h1 className="ml-8 font-semibold">Check-in & Check-out Date</h1>
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText absolute ml-8 text-gray-400 bold cursor-pointer"
        >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
          date[0].endDate,
          "dd/MM/yyyy"
        )}`}</span>

        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className=" absolute m-9"
          />
        )}
      </div>

      {/* Guest and rooms */}
      <div className="headerSearchItem font-poppins">
        <h1 className="font-semibold">Rooms & Guest</h1>
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="headerSearchText text-gray-400 bold cursor-pointer"
        >{`${options.guest} guest & ${options.room} room`}</span>

        {/* bg  */}
        {openOptions && (
          <div className="options absolute bg-white shadow-md rounded-xl mt-2">
            {/* For Adult */}
            <div className="optionItem w-22 flex justify-between m-4 pt-2">
              <span className="optionText ">Guest :</span>
              <div className="optionCounter flex items-center gap-2 text-xs text-[black]">
                {/* Increament And Decrement Button For Adult  */}
                <button
                  disabled={options.guest <= 1}
                  className="optionCounterButton w-[30px] h-[30px] ml-2 border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("guest", "d")}
                >
                  -
                </button>

                <span className="optionCounterNumber">{options.guest}</span>

                <button
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("guest", "i")}
                >
                  +
                </button>
              </div>
            </div>

                      {/* For Room */}
                      
            <div className="optionItem w-22 flex justify-between m-4 pt-2">
              <span className="optionText">Room :</span>

              <div className="optionCounter flex items-center gap-2 text-xs text-[black]">
                {/* Increament And Decrement Button For Room */}
                <button
                  disabled={options.room <= 1}
                  className="optionCounterButton w-[30px] h-[30px] ml-2 border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>

                <span className="optionCounterNumber">{options.room}</span>

                <button
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="headerSearchItem">
     
          <button className="bg-[#90CCBA] text-white font-bold h-16 pl-6 pr-6 mt-[-0.7rem] mr-[-4.5rem] border-[1px] rounded-r-lg" onClick={handleSearch}>
            Search
          </button>
       
      </div>
    </div>
  );
};

export default HotelSearchBar;





























// import { DateRange } from "react-date-range";
// import { useEffect, useState } from "react";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { format } from "date-fns";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const HotelSearchBar = ({ selectedLocation, setHotels }) => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         if (selectedLocation) {
//           const url = import.meta.env.VITE_BASE_URL;
//           const response = await axios.get(
//             `${url}/api/hotels/location/${selectedLocation}`
//           );
//           setHotels(response.data); // Update the hotels state in the parent component
//         }
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };

//     fetchHotels();
//   }, [selectedLocation, setHotels]);

//   const handleSearch = () => {
//     navigate(`/hotels/location/${selectedLocation}`);
//   }
  
//   const handleLocationChange = (event) => {
//     selectedLocation = event.target.value;
    
//   };

//   // For Calendar logic
//   const [openDate, setOpenDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   // For Guest and Room Logic
//   const [openOptions, setOpenOptions] = useState(false);
//   const [options, setOptions] = useState({
//     guest: 1,
    // children: 0,
//     room: 1,
//   });

//   const handleOption = (name, operation) => {
//     setOptions((prev) => {
//       return {
//         ...prev,
//         [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
//       };
//     });
//   };

  
//   const destinations = [
//     { value: "Mumbai", label: "Mumbai" },
//     { value: "New Delhi", label: "New Delhi" },
//     { value: "Agra", label: "Agra" },
//     { value: "Jaipur", label: "Jaipur" },
//     { value: "Bengaluru", label: "Bengaluru" },
//     { value: "Hyderabad", label: "Hyderabad" },
//     { value: "Goa", label: "Goa" },
//     { value: "Manali", label: "Manali" },
//     { value: "Chennai", label: "Chennai" },
//     { value: "Kerla", label: "Kerla" },
//     { value: "Dubai", label: "Dubai" },
//     { value: "Bangkok", label: "Bangkok" },
//     { value: "Sigapore", label: "Sigapore" },
//     { value: "Phuket", label: "Phuket" },
//   ];

//   return (
//     <div className="lg:h-16 md:h-[12rem] w-full lg:w-5/6 bg-[white] font-poppins flex justify-around absolute px-0 py-2.5 border-[1px] rounded-xl lg:ml-4 lg:mt-28 lg:mb-2 md:ml-2">
//     {/* Content of your HotelSearchBar component... */}

//     <div className="items-center gap-2.5">
//       <h1 className="ml-[2.3rem] font-semibold">Destination</h1>

//       <select value={selectedLocation} onChange={handleLocationChange}>
//         <option value="">Select Location</option>
//         {destinations.map((destination) => (
//           <option key={destination.value} value={destination.value}>
//             {destination.label}
//           </option>
//         ))}
//       </select>
//     </div>

//       {/* Calender */}
//       <div className="headerSearchItem">
//         <h1 className="ml-8 font-semibold">Check-in & Check-out Date</h1>
//         <span
//           onClick={() => setOpenDate(!openDate)}
//           className="headerSearchText absolute ml-8 text-gray-400 bold cursor-pointer"
//         >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
//           date[0].endDate,
//           "dd/MM/yyyy"
//         )}`}</span>

//         {openDate && (
//           <DateRange
//             editableDateInputs={true}
//             onChange={(item) => setDate([item.selection])}
//             moveRangeOnFirstSelection={false}
//             ranges={date}
//             className=" absolute m-9"
//           />
//         )}
//       </div>

//       {/* Guest and rooms */}
//       <div className="headerSearchItem font-poppins">
//         <h1 className="font-semibold">Rooms & Guest</h1>
//         <span
//           onClick={() => setOpenOptions(!openOptions)}
//           className="headerSearchText text-gray-400 bold cursor-pointer"
//         >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>

//         {/* bg  */}
//         {openOptions && (
//           <div className="options absolute bg-white shadow-md rounded-xl mt-2">
//             {/* For Adult */}
//             <div className="optionItem w-22 flex justify-between m-4 pt-2">
//               <span className="optionText ">Adult :</span>
//               <div className="optionCounter flex items-center gap-2.5 text-xs text-[black]">
//                 {/* Increament And Decrement Button For Adult  */}
//                 <button
//                   disabled={options.adult <= 1}
//                   className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
//                   onClick={() => handleOption("adult", "d")}
//                 >
//                   -
//                 </button>

//                 <span className="optionCounterNumber">{options.adult}</span>

//                 <button
//                   className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
//                   onClick={() => handleOption("adult", "i")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* For Children */}
//             <div className="optionItem w-22 flex justify-between m-4 pt-2">
//               <span className="optionText">Children :</span>
//               <div className="optionCounter flex items-center gap-2.5 ml-2 text-xs text-[black]">
//                 {/* Increament And Decrement Button For Children */}
//                 <button
//                   disabled={options.children <= 0}
//                   className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
//                   onClick={() => handleOption("children", "d")}
//                 >
//                   -
//                 </button>

//                 <span className="optionCounterNumber">{options.children}</span>

//                 <button
//                   disabled={options.children >= 16}
//                   className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
//                   onClick={() => handleOption("children", "i")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* For Room */}
//             <div className="optionItem w-22 flex justify-between m-4 pt-2">
//               <span className="optionText">Room :</span>

//               <div className="optionCounter flex items-center gap-2.5 text-xs text-[black]">
//                 {/* Increament And Decrement Button For Room */}
//                 <button
//                   disabled={options.room <= 1}
//                   className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
//                   onClick={() => handleOption("room", "d")}
//                 >
//                   -
//                 </button>

//                 <span className="optionCounterNumber">{options.room}</span>

//                 <button
//                   className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
//                   onClick={() => handleOption("room", "i")}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="headerSearchItem">
     
//           <button className="bg-[#90CCBA] text-white font-bold h-16 pl-6 pr-6 mt-[-0.7rem] mr-[-4.5rem] border-[1px] rounded-r-lg" onClick={handleSearch}>
//             Search
//           </button>
       
//       </div>
//     </div>
//   );
// };

// export default HotelSearchBar;






