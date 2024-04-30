import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImgLoad from "../components/ImgLoad";
import Map from "../components/Map";
import RoomCard from "../components/RoomCard";
import Policies from "../components/Policies";
import axios from "axios";
import { useParams } from "react-router-dom";

const HotelInfoPage = () => {
  const { hotelName } = useParams();
  const [hotel, setHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
      <div className="sticky top-0 bg-white w-full h-[4rem] shadow-lg z-50">
        <Navbar />
      </div>
      <div className="ml-[1rem]">
        {hotel && (
          <>
            <ImgLoad hotel={hotel} />
            <Map selectedRoom={selectedRoom} hotel={hotel}/>
            <RoomCard hotel={hotel} setSelectedRoom={setSelectedRoom} />
            <Policies hotel={hotel} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HotelInfoPage;
