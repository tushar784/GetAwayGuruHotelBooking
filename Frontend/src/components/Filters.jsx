// import React, { useState } from "react";
// import { FaFilter } from "react-icons/fa";

// const Filters = ({ setSelectedStarRating }) => {
//   const [starRating, setStarRating] = useState(null);

//   const handleStarRatingSortChange = (e) => {
//     const selectedStarRating = e.target.value;
//     setStarRating(selectedStarRating);
//     setSelectedStarRating(selectedStarRating);
//   };

//   return (
//     <div className="hidden md:block bg-white ml-[3.5rem] rounded-xl fixed w-full md:w-[22%] md:h-[52%] md:shadow">
//       <div className="flex items-center m-4">
//         <FaFilter className="text-gray-600 mr-2" />
//         <h2 className="text-xl font-bold text-gray-800">Filters</h2>
//       </div>
//       <div className="space-y-4 pl-4 pr-4">
//         {/* Star Rating Sorting */}
//         <div>
//           <label htmlFor="star-rating" className="block text-gray-700 font-bold mb-2">
//             Star rating
//           </label>
//           <select
//             id="star-rating"
//             className="appearance-none block w-full border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             value={starRating}
//             onChange={handleStarRatingSortChange}
//           >
//             <option value="">Select Star Rating</option>
//             {[1, 2, 3, 4, 5].map((rating) => (
//               <option key={rating} value={rating}>
//                 {rating}/5
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Filters;





























import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const Filters = ({ setFilters, hotels }) => {
  const [filters, setFiltersState] = useState({
    freeCancellation: false,
    freeBreakfast: false,
    parkingAvailability: false,
    priceSort: "high-to-low",
    starRating: "5-star",
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

  // Function to handle sorting by star rating
  const sortHotelsByStarRating = (hotels, selectedStarRating) => {
    const sortedHotels = hotels.filter(hotel => hotel.StarRating === selectedStarRating);
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

  

  // Function to handle sorting change for star rating
  const handleStarRatingSortChange = (e) => {
    const selectedStarRating = e.target.value;
    setFiltersState({ ...filters, starRating: selectedStarRating });

    // Sort hotels based on selected option and update state
    const sortedHotels = sortHotelsByStarRating(hotels, selectedStarRating);
    setFilters(sortedHotels);
  };


  return (
    <div className="hidden md:block bg-white ml-[3.5rem] rounded-xl fixed w-full md:w-[22%] md:h-[26%] md:mt-[4rem] md:shadow">
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

        {/* Star Rating Sorting */}
        {/* <div>
          <label htmlFor="star-rating" className="block text-gray-700 font-bold mb-2">
            Star rating
          </label>
          <select
            id="star-rating"
            className="appearance-none block w-full border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={filters.starRating}
            onChange={handleStarRatingSortChange}
          >
            <option value="5-star">5 star</option>
            <option value="4-star">4 star</option>
            <option value="3-star">3 star</option>
            <option value="2-star">2 star</option>
            <option value="1-star">1 star</option>
          </select>
        </div> */}


      </div>
    </div>
  );
};

export default Filters;













