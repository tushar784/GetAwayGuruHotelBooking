import Filters from "./Filters"
import HotelSearchBar from "../components/HotelSearchBar"
import Navbar from "../components/Navbar"
import HotelList from "./HotelList"

const Hotels = () => {
  return (
    <>
    <Navbar />
    <HotelSearchBar className="ml-[8rem]" />
      <div className="flex bg-gray-200">
          {/* filter */}

      <Filters />
      
     <HotelList />


          {/* HotelList */}
 
    </div>
    </>
  )
}

export default Hotels