// final
function PopularDestinations() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>
  
        <div className="grid grid-cols-1 sm:lgrid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4">
       
          <img
            src="img/mumbai.jpg"
            alt="Image 1"
            className="rounded-xl object-cover w-full sm:h-22 md:h-[21rem] h-[31rem] size-16 transition duration-300 transform hover:scale-110"
          />
          <img
            src="img/hydrabad.jpg"
            alt="Image 2"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform hover:scale-110"
          />
          <img
            src="img/goa.jpg"
            alt="Image 3"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform hover:scale-110"
          />
          <img
            src="img/jaipur.jpg"
            alt="Image 4"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform hover:scale-110"
          />
          <img
            src="img/manali.jpg"
            alt="Image 5"
            className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    );
  }
  
  export default PopularDestinations;
  

































// old
// function PopularDestinations() {
 

//   return (
//     <div>
//          <h1 className="text-xl font-bold mt-[2rem] ml-[2rem] ">Popular Destinations</h1>

    //  <div className="flex justify-center items-center ml-[3.8rem] mr-[4rem] mt-4 mb-[2rem]">
//             <img
//                 src="img/mumbai.jpg"
//                 alt="Image 1"
//                 className="w-1/5 mx-1 rounded-xl ml-4 mr-2 mx-2 transition duration-300 transform hover:scale-110"
//             />
//             <img
//                 src="img/hydrabad.jpg"
//                 alt="Image 2"
//                 className="w-1/5 mx-1 rounded-xl ml-4 mr-2 mx-2 transition duration-300 transform hover:scale-110"
               
//             />
//             <img
//                 src="img/goa.jpg"
//                 alt="Image 3"
//                 className="w-1/5 mx-1 rounded-xl ml-4 mr-2 mx-2 transition duration-300 transform hover:scale-110"
            
//             />
//             <img
//                 src="img/jaipur.jpg"
//                 alt="Image 4"
//                 className="w-1/5 mx-1 rounded-xl ml-4 mr-2 mx-2 transition duration-300 transform hover:scale-110"
              
//             />
//              <img
//                 src="img/manali.jpg"
//                 alt="Image 4"
//                 className="w-1/5 mx-1 rounded-xl ml-4 mr-2 mx-2 transition duration-300 transform hover:scale-110"
              
//             />
//             </div> 
//     </div>
//   )
// }

// export default PopularDestinations