function Speciality() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 sm:mt-[10rem]]">
        <h1 className="text-xl font-bold mb-4">
          Why book hotels with GetawayGuru
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {/* <div className="flex justify-center items-center ml-[3.8rem] mr-[4rem] mt-4 mb-[2rem]"> */}
          <img
            src="src/assets/img/deal.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/24Hr.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/LargeSelection.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/PayAtHotel.jpg"
            alt="Image 1"
            className="rounded-xl object-cover transition duration-300 transform md:hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default Speciality;

// function Speciality() {
//   return (
//     <>
//         <div>
//             <h1 className="text-xl font-bold mt-4 ml-[1.7rem] ">Why book hotelas with NestAway</h1>

//             <div className="flex justify-center items-center ml-[3rem] mr-[3rem] mt-4 ">
//             <img
//                 src="img/deal.jpg"
//                 alt="Image 1"
//                 className="w-1/4 mx-1 rounded-xl ml-4 mr-2 "
//             />
//             <img
//                 src="img/24Hr.jpg"
//                 alt="Image 2"
//                 className="w-1/4 mx-1 rounded-xl ml-2 mr-2"

//             />
//             <img
//                 src="img/LargeSelection.jpg"
//                 alt="Image 3"
//                 className="w-1/4 mx-1 rounded-xl ml-2 mr-2"

//             />
//             <img
//                 src="img/PayAtHotel.jpg"
//                 alt="Image 4"
//                 className="w-1/4 mx-1 rounded-xl ml-2 mr-4"
//                 // className="w-1/4 mx-1 ml-[-1.5rem] mr-[-4rem] size-24"
//             />
//             </div>
//                 </div>
//             </>
//         )
//         }

// export default Speciality
