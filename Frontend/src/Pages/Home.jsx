import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelSearchBar from "../components/HotelSearchBar";
import Speciality from "../components/Speciality";
import FAQ from "../components/FAQ";
import PopularDestinations from "../components/PopularDestinations";

function Home() {
  const { selectedLocation } = useParams();
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <img
          src="src/assets/img/homepage.jpg"
          alt="Hotel Image"
          className="pl-2 pr-2 pt-24 h-[41rem] w-[82rem]"
        />
        <h1
          className="absolute text-4xl font-bold mt-22 mb-52 text-amber-50 italic"
          style={{ fontFamily: "cursive" }}
        >
          NestAway: Find Your Home Away From Home
        </h1>
        <p
          className="absolute text-2xl font-bold mt-22 mb-28 text-amber-50 italic"
          style={{ fontFamily: "cursive" }}
        >
          Curated Stay for Every Traveler
        </p>
        <HotelSearchBar selectedLocation={selectedLocation} setHotels={setHotels} />
      </div>
      <Speciality />
      <PopularDestinations />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
