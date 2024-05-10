import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImgLoad from "../components/ImgLoad";
// import Map from "../components/Map";
import InfoSection from "../components/InfoSection";
import RoomCard from "../components/RoomCard";
import Policies from "../components/Policies";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";

const HotelInfoPage = () => {
  const { hotelName } = useParams();
  const [hotel, setHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/hotels/${hotelName}`);
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
      <div className="m-[0.7rem] ">
        {hotel && (
          <>
            <ImgLoad hotel={hotel} />
            <InfoSection selectedRoom={selectedRoom} setSelectedRoom={setSelectedRoom} hotel={hotel}/>
            <RoomCard hotel={hotel} setSelectedRoom={setSelectedRoom} />
            <Policies hotel={hotel} />
            
          </>
        )}
      </div>
      <ReviewSection />
      <Footer />
    </>
  );
};

export default HotelInfoPage;
