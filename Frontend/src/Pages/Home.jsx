import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HotelSearchBar from "../components/HotelSearchBar";
import Speciality from "../components/Speciality";
import FAQ from "../components/FAQ";
import PopularDestinations from "../components/PopularDestinations";
// import CheckoutForm from "../components/CheckoutForm";
// import CheckoutForm from "../components/CheckoutForm";
function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <img
          src="src/assets/img/homepage.jpg"
          alt="Hotel Image"
          className=" pl-2 pr-2 pt-2 h-[41rem] w-full "
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
        <HotelSearchBar />
      </div>
      <Speciality />
      <PopularDestinations />
      <FAQ />
      <Footer />
      {/* <CheckoutForm /> */}
     
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
