import Filters from "./Filters"
import HotelSearchBar from "../components/HotelSearchBar"
import Navbar from "../components/Navbar"

const Hotels = () => {
  return (
    <>
    <Navbar />
    <HotelSearchBar />
      <div className="h-dvh flex">
          {/* filter */}

      <Filters />


          {/* HotelList */}
 
    </div>
    </>
  )
}

export default Hotels