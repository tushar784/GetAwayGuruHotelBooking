import HotelCard from "./HotelCard";

const HotelList = ({ hotels }) => {
  //api

  return (
    <div className="container mx-auto font-poppins pl-[5rem] pt-[2rem]  ">
      <h1 className="text-xl font-semibold mb-4">
        Showing properties in navi mumbai
      </h1>
      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.Hotel_id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
