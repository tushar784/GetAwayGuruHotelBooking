//final
import { DateRange, DateRangePicker } from "react-date-range";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios"



const HotelSearchBar = () => {
  // For Calender logic
  const [openDate, setOpenDate] = useState(false);
  const [hotels, setHotels] = useState([]);
  const [locations, setLocations] = useState([]); // Stores available locations
  const [selectedLocation, setSelectedLocation] = useState(''); // Stores selected location
  const [error, setError] = useState(null);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //  For Guest and Room Logic
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation == "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

    useEffect(()=>{
      const fetchHotel = async ()=>{
        setError(null)
        
        try {
          const response = await axios.get('http://localhost:4000/api/hotels')
          const data = await response.json()
          setHotels(data)
          console.log("data", data)
        } catch (error) {
            console.log("could not able to fetch data", error);
        } 

        fetchHotel()
      }
    },[])

    const handleLocationChange = (event) => {
      setSelectedLocation(event.target.value);
    };

    const handleHotelSearch = async () => {
      if (!selectedLocation) {
        return; // Handle case where no location is selected
      }
  
      try {
        const response = await axios.get(`/api/hotels?Location${selectedLocation}`);
        setHotels(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    };
  

  return (
    
    <div className="lg:h-16 md:h-[12rem] w-full lg:w-5/6 bg-[white] font-poppins static flex justify-around absolute px-0 py-2.5 border-[1px] rounded-xl lg:ml-4 lg:mt-28 lg:mb-2 md:ml-2">
      {/* Content of your HotelSearchBar component... */}

      <div className="items-center gap-2.5">
        <h1 className="ml-[2.3rem] font-semibold">Destination</h1> 

        {/* Dropdown list for destination */}
        <select className="pl-[2rem] pr-[2rem] border"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
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
        >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>

        {/* bg  */}
        {openOptions && (
          <div className="options absolute bg-white shadow-md rounded-xl mt-2">
            {/* For Adult */}
            <div className="optionItem w-22 flex justify-between m-4 pt-2">
              <span className="optionText ">Adult :</span>
              <div className="optionCounter flex items-center gap-2.5 text-xs text-[black]">
                {/* Increament And Decrement Button For Adult  */}
                <button
                  disabled={options.adult <= 1}
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>

                <span className="optionCounterNumber">{options.adult}</span>

                <button
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>

            {/* For Children */}
            <div className="optionItem w-22 flex justify-between m-4 pt-2">
              <span className="optionText">Children :</span>
              <div className="optionCounter flex items-center gap-2.5 ml-2 text-xs text-[black]">
                {/* Increament And Decrement Button For Children */}
                <button
                  disabled={options.children <= 0}
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>

                <span className="optionCounterNumber">{options.children}</span>

                <button
                  disabled={options.children >= 16}
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>

            {/* For Room */}
            <div className="optionItem w-22 flex justify-between m-4 pt-2">
              <span className="optionText">Room :</span>

              <div className="optionCounter flex items-center gap-2.5 text-xs text-[black]">
                {/* Increament And Decrement Button For Room */}
                <button
                  disabled={options.room <= 1}
                  className="optionCounterButton w-[30px] h-[30px] border text-[#0071c2] cursor-pointer border-solid border-[#0071c2]"
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
        <Link to="/hotels">
          <button className="bg-[#90CCBA] text-white font-bold h-16 pl-6 pr-6 mt-[-0.7rem] mr-[-4.5rem] border-[1px] rounded-r-lg" onClick={handleHotelSearch}>
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotelSearchBar;























