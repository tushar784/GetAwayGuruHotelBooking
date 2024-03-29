import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelSearchBar from "../components/HotelSearchBar"
import Speciality from "../components/Speciality"
import PopularDestinations from "../components/PopularDestinations"
function Home() {
  return (
      <>
          <Navbar />
          <div className="flex flex-col items-center justify-center ">
              <img src="img/homepage.jpg" alt="Hotel Image" className="pl-2 pr-2 pt-[5.3rem] lg:h-[49rem] lg:w-[82rem] h-[35.5rem] " />  
              {/* <h1 className="absolute lg:text-4xl font-bold mt-16 lg:mt-28 lg:mb-18 mb:[16rem] text-sm lg:mb-52 text-black italic text-center lg:text-left" style={{ fontFamily: "cursive" }}>NestAway: Find Your Home Away From Home</h1> */}
              <h1 className="absolute lg:text-4xl lg:font-bold lg:mt-22 lg:mb-52 mt-[2rem] mb-[23rem] ml-[3rem] mr-[4rem] text-amber-50 text-sm italic font-bold text-center" style={{ fontFamily: "cursive" }}>NestAway: Find Your Home Away From Home</h1>
              {/* <h1 className="absolute text-4xl font-bold mt-22 mb-52 text-amber-50 italic" style={{ fontFamily: "cursive" }}>NestAway: Find Your Home Away From Home</h1> */}
              {/* <p className="absolute text-2xl font-bold mt-22 mb-28 text-black italic" style={{ fontFamily: "cursive" }}>Curated Stay for Every Traveler</p> */}
              <p className="absolute lg:text-2xl lg:font-bold lg:mt-16 lg:mb-28 mt-[7rem] mb-[22rem] ml-[2rem] mr-[2rem] text-amber-50 text-xs font-bold italic" style={{ fontFamily: "cursive" }}>Curated Stay for Every Traveler</p>
              <HotelSearchBar />
          </div>
          <Speciality />
          <PopularDestinations />
          <Footer />
      </>
  );
}

export default Home;


































// //old
// import Navbar from "./Navbar"
// import HotelSearchBar from "./HotelSearchBar"
// import Speciality from "./Speciality"
// import PopularDestinations from "./PopularDestinations"
// import Footer from "./Footer"



// function Home () {
//   return (
//  <>
//  <Navbar/>

//     <div className="flex flex-col items-center justify-center ">
//             <img src="img/homepage.jpg" alt="Hotel Image" className="pl-2 pr-2 pt-16 h-22" />
//             <h1 className="absolute text-4xl font-bold mt-22 mb-52 text-amber-50 italic "  style={{fontFamily:"cursive"}}>NestAway: Find Your Home Away From Home</h1>
//             <p className="absolute text-2xl font-bold mt-22 mb-28 text-amber-50 italic " style={{fontFamily:"cursive"}}>Curated Stay for Every Traveler</p>          
//             <HotelSearchBar />
            
            
//         </div>
//         <Speciality />
//         <PopularDestinations />
//         <Footer />

//         </>
//   )
// }

// export default Home