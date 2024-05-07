

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import HotelSearchBar from "../components/HotelSearchBar";
// import Speciality from "../components/Speciality";
// import FAQ from "../components/FAQ";
// import PopularDestinations from "../components/PopularDestinations";

// function Home() {
//   const { selectedLocation } = useParams();
//   const [hotels, setHotels] = useState([]);
//   const [bgIndex, setBgIndex] = useState(0);
//   const backgrounds = [
//     "src/assets/img/homepage1.jpg",
//     "src/assets/img/Holiday3.png",
//     "src/assets/img/Holiday5.png",
//     // Add more background images here
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
//     }, 4000); // Change background every 4 seconds
//     return () => clearInterval(interval);
//   }, [backgrounds.length]);

//   return (
//     <>
//       <Navbar />
//       <div className="relative h-screen">
//         <img src={backgrounds[bgIndex]} alt={`Background ${bgIndex}`} className="w-full h-full object-center absolute top-0 left-0" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//           <h1 className="text-4xl font-bold text-center mb-8">GetawayGuru: Find Your Home Away From Home</h1>
//           <p className="text-2xl font-bold text-center mb-8">Curated Stay for Every Traveler</p>
//           <HotelSearchBar selectedLocation={selectedLocation} setHotels={setHotels} />
//         </div>
//       </div>
//       <Speciality />
//       <PopularDestinations selectedLocation={selectedLocation} setHotels={setHotels} />
//       <FAQ />
//       <Footer />
//     </>
//   );
// }

// export default Home;









//final
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
      <div className="flex flex-col items-center justify-center md:h-[32rem] h-[15rem] md:mb-0 mb-12 ">
        <img
          src="src/assets/img/homepage.jpg"
          alt="Hotel Image"
          className="hidden md:block md:pl-2 md:pr-2 md:w-[82rem] md:h-[32rem]"
        />

        <h1
          className="absolute md:text-4xl font-bold md:mt-12 md:mb-52 md:text-amber-50 italic text-mx text-center mt-16 mb-48 text-black"
          style={{ fontFamily: "cursive" }}
        >
          GetawayGuru:Find Your Home Away From Home
        </h1>
        <p
          className="absolute md:text-2xl font-bold md:mt-14 md:mb-28 md:text-amber-50 text-[0.81rem] font-bold mt-40 mb-48 text-black italic"
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
