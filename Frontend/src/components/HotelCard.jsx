import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const HotelCard = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios
      .get("http://localhost:4000/api/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
      });
  }, []);
  return (
    <>
      {hotels.map((hotel,index) => (
        <div
          key={index}
          className="bg-white h-[14rem] w-[107%] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row"
        >
          <div className="h-auto md:h-48 overflow-hidden mt-4 ml-2 rounded-lg">
            <img
              src={hotel.Image}
              alt={hotel.Hotel_Name}
              className="object-cover w-[18rem] h-[11rem] rounded m-2"
            />
          </div>
          <div className="p-4 w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-2 text-black">
              {hotel.Hotel_Name}
            </h2>

            <div>
              <p className="text-black mb-2">{hotel.Location}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-2">
                  <i className="fas fa-star"></i>
                  {hotel.Staring_Rating}
                </span>
              </div>
              <ul className="text-[#90CCBA] flex flex-col mb-[-2rem]">
                {typeof hotel.Amenities === "string" ? (
                  hotel.Amenities.split(", ").map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))
                ) : (
                  <li>{hotel.Amenities}</li>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-12 ml-[2rem]">
            <p className="text-black font-extrabold mb-4">₹{hotel.Price}</p>
            <button
              className="bg-[#90CCBA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/townhouse");
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HotelCard;
