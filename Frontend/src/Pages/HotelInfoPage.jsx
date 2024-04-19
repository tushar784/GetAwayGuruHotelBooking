import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HotelSearchBar from "../components/HotelSearchBar.jsx";
import ImgLoad from "../components/ImgLoad.jsx";
import Map from "../components/Map.jsx";
import RoomCard from "../components/RoomCard.jsx";
import Policies from "../components/Policies.jsx";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const HotelInfoPage = () => {
  const { hotelName } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/hotels/${hotelName}`);
        setHotel(response.data);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    };
    fetchHotelDetails();
  }, [hotelName]);

  return (
    <>
      <div className="sticky top-2 bg-white w-full h-[13rem] shadow-lg z-50">
        <Navbar />
        <div className="sticky top-[-1rem] ml-[15rem] bg-white z-30">
          <HotelSearchBar />
        </div>
      </div>

      <div className=" ml-[1rem]">
        {hotel && (
          <>
            <ImgLoad hotel={hotel} />
            <Map hotel={hotel} />
            <RoomCard hotel={hotel} />
            <Policies hotel={hotel} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HotelInfoPage;
