import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  return (
    <SearchContext.Provider
      value={{
        destination,
        setDestination,
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        options,
        setOptions,
      }}
    >
      { children }
    </SearchContext.Provider>
  );
};

export default SearchContext;


























// import { createContext, useState } from "react";

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [searchState, setSearchState] = useState({
//     destination: "",
//     startDate: null,
//     endDate: null,
//     adults: 1,
//     children: 0,
//     rooms: 1,
//   });

//   const updateSearchState = (newState) => {
//     setSearchState({ ...searchState, ...newState });
//   };

//   return (
//     <SearchContext.Provider value={{ searchState, updateSearchState }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };