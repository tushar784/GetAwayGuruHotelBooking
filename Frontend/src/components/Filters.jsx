import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filters = ({ setFilters, hotels }) => {
  const [filters, setFiltersState] = useState({
    // freeCancellation: false,
    // freeBreakfast: false,
    // parkingAvailability: false,
    priceSort: "high-to-low",
    nameSort: "A-Z" // Add a new state for name sorting
  });

  // Function to handle sorting by price
  const sortHotelsByPrice = (hotels, sortOrder) => {
    const sortedHotels = [...hotels];
    sortedHotels.sort((a, b) => {
      if (sortOrder === "high-to-low") {
        return b.Price - a.Price;
      } else {
        return a.Price - b.Price;
      }
    });
    return sortedHotels;
  };

  // Function to handle sorting by name
 // Function to handle sorting by name
const sortHotelsByName = (hotels, sortOrder) => {
  const sortedHotels = [...hotels];
  sortedHotels.sort((a, b) => {
    const nameA = a.Hotel_Name.toUpperCase(); // Ignore case
    const nameB = b.Hotel_Name.toUpperCase(); // Ignore case
    if (sortOrder === "A-Z") {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    } else {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    }
  });
  return sortedHotels;
};


  // Function to handle sorting change for price
  const handlePriceSortChange = (e) => {
    const selectedPriceSort = e.target.value;
    setFiltersState({ ...filters, priceSort: selectedPriceSort });

    // Sort hotels based on selected option and update state
    const sortedHotels = sortHotelsByPrice(hotels, selectedPriceSort);
    setFilters(sortedHotels);
  };

  // Function to handle sorting change for name
  const handleNameSortChange = (e) => {
    const selectedNameSort = e.target.value;
    setFiltersState({ ...filters, nameSort: selectedNameSort });

    // Sort hotels based on selected option and update state
    const sortedHotels = sortHotelsByName(hotels, selectedNameSort);
    setFilters(sortedHotels);
  };

  return (
    <div className="hidden md:block bg-white ml-[3.5rem] rounded-xl fixed w-full md:w-[22%] md:h-[42%] md:mt-[4rem] md:shadow">
      <div className="flex items-center m-4">
        <FaFilter className="text-gray-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
      </div>
      <div className="space-y-4 pl-4 pr-4">
        
        {/* Price Sorting */}
        <div className="flex items-center">
          <label htmlFor="price-sort" className="block text-sm font-medium mb-[4rem] text-gray-700">
            Price
          </label>
          <select
            id="price-sort"
            className="block ml-[-2rem] appearance-none w-full border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={filters.priceSort}
            onChange={handlePriceSortChange}
          >
            <option value="high-to-low">High to Low</option>
            <option value="low-to-high">Low to High</option>
          </select>
        </div>

        {/* Name Sorting */}
        <div className="flex items-center">
          <label htmlFor="name-sort" className="block text-sm font-medium mb-[4rem] text-gray-700">
            Name
          </label>
          <select
            id="name-sort"
            className="block ml-[-2rem] appearance-none w-full border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={filters.nameSort}
            onChange={handleNameSortChange}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;















//final
// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";

// const Filters = ({ setFilters, hotels }) => {
//   const [filters, setFiltersState] = useState({
//     freeCancellation: false,
//     freeBreakfast: false,
//     parkingAvailability: false,
//     priceSort: "high-to-low",
//     starRating: "5-star",
//   });


//   // Function to handle sorting by price
//   const sortHotelsByPrice = (hotels, sortOrder) => {
//     const sortedHotels = [...hotels];
//     sortedHotels.sort((a, b) => {
//       if (sortOrder === "high-to-low") {
//         return b.Price - a.Price;
//       } else {
//         return a.Price - b.Price;
//       }
//     });
//     return sortedHotels;
//   };

//   // // Function to handle sorting by star rating
//   // const sortHotelsByStarRating = (hotels, selectedStarRating) => {
//   //   const sortedHotels = hotels.filter(hotel => hotel.StarRating === selectedStarRating);
//   //   return sortedHotels;
//   // };

//   // Function to handle sorting change for price
//   const handlePriceSortChange = (e) => {
//     const selectedPriceSort = e.target.value;
//     setFiltersState({ ...filters, priceSort: selectedPriceSort });

//     // Sort hotels based on selected option and update state
//     const sortedHotels = sortHotelsByPrice(hotels, selectedPriceSort);
//     setFilters(sortedHotels);
//   };

  
//   // Function to handle sorting change for star rating
//   const handleStarRatingSortChange = (e) => {
//     const selectedStarRating = e.target.value;
//     setFiltersState({ ...filters, starRating: selectedStarRating });

//     // Sort hotels based on selected option and update state
//     const sortedHotels = sortHotelsByStarRating(hotels, selectedStarRating);
//     setFilters(sortedHotels);
//   };

//   return (
//     <div className="hidden md:block bg-white ml-[3.5rem] rounded-xl fixed w-full md:w-[22%] md:h-[26%] md:mt-[4rem] md:shadow">
//       <div className="flex items-center m-4">
//         <FaFilter className="text-gray-600 mr-2" />
//         <h2 className="text-xl font-bold text-gray-800">Filters</h2>
//       </div>
//       <div className="space-y-4 pl-4 pr-4">
        
//         {/* Price Sorting */}
//         <div className="flex items-center">
//           <label htmlFor="price-sort" className="block text-sm font-medium mb-[4rem] text-gray-700">
//             Price
//           </label>
//           <select
//             id="price-sort"
//             className="block ml-[-2rem] appearance-none w-full border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={filters.priceSort}
//             onChange={handlePriceSortChange}
//           >
//             <option value="high-to-low">High to Low</option>
//             <option value="low-to-high">Low to High</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;













