// Hotels.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import HotelSearchBar from "../components/HotelSearchBar.jsx";
import Layout from "../components/Layout";
import HotelList from "../components/HotelList";
import Filters from "../components/Filters";

const Hotels = () => {
  const { selectedLocation } = useParams();
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <div className="sticky top-2 bg-white w-full h-[13rem] shadow-lg z-50">
        <Navbar />
        <div className="sticky top-[-1rem] ml-[15rem] bg-white z-30">
          <HotelSearchBar selectedLocation={selectedLocation} setHotels={setHotels} />
        </div>
      </div>
      <Layout>
        <Filters key="filters" />
        <HotelList key="hotelList" hotels={hotels} />
      </Layout>
    </>
  );
};

export default Hotels;
