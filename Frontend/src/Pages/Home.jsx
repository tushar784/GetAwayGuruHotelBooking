import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelSearchBar from "../components/HotelSearchBar";
import coverimage from "../assets/img/homepage.jpg"
import Speciality from "../components/Speciality";
import FAQ from "../components/FAQ";
import PopularDestinations from "../components/PopularDestinations";


function Home() {
  const { selectedLocation } = useParams();
  const [hotels, setHotels] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center md:h-[32rem] h-[34rem] md:mb-0 mb-12 ">
        <img
          src={coverimage}
          alt="Hotel Image"
          className="hidden md:block md:pl-2 md:pr-2 md:w-[82rem] md:h-[32rem]"
        />

        <h1
          className="absolute md:text-4xl text-2xl font-bold md:mt-12 md:mb-52 mb-[10rem] md:text-amber-50 italic text-center  text-black"
          style={{ fontFamily: "cursive" }}
        >
          GetawayGuru:Find Your Home Away From Home
        </h1>
        <p
          className="absolute md:text-2xl text-lg font-bold md:mt-14 md:mb-28 mt-[3rem] mb-[4rem] md:text-amber-50 text-[0.81rem] font-bold text-black italic"
          style={{ fontFamily: "cursive" }}
        >
          Curated Stay for Every Traveler
        </p>
  
        <HotelSearchBar selectedLocation={selectedLocation} setHotels={setHotels}
      />
      </div>
      <Speciality />
      <PopularDestinations selectedLocation={selectedLocation} setHotels={setHotels} />
      <FAQ />
      <Footer />
    
     
    </>
  );
}

export default Home;
