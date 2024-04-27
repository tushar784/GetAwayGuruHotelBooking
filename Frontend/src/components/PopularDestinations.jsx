// final
function PopularDestinations() {
    return (
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4">
       
          <img
            src="src/assets/img/mumbai.jpg"
            alt="Image 1"
            className="rounded-xl object-cover w-full sm:h-22 md:h-[21rem] h-[31rem] size-16 transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/hydrabad.jpg"
            alt="Image 2"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/goa.jpg"
            alt="Image 3"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/jaipur.jpg"
            alt="Image 4"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
          <img
            src="src/assets/img/manali.jpg"
            alt="Image 5"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
          />
        </div>
      </div>
  );
}

export default PopularDestinations;







// import Records from "./sampledata/records.json"
// function PopularDestinations() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>

//       <div className="inner">
//         {
//           Records && Records.map( record =>{
//             return(
//               <div className="box flex">
//                 <img src={ record.icon}/>

//                 <br/>
//                 {record.Properties}

//                 <br/>
//                 {record.Location}

//               </div>
//             )
//           })
//         }
//       </div>

//      </div>
//   );
// }

// export default PopularDestinations;

















  






























