import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NextArrow = ({ onClick }) => (
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white hover:text-blue-300 z-10">
    <FaChevronRight className="text-3xl" onClick={onClick} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white hover:text-blue-300 z-10">
    <FaChevronLeft className="text-3xl" onClick={onClick} />
  </div>
);

function TopHolidayPackages() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto px-4 py-4 relative">
      <h1 className="text-2xl font-bold mb-4">Top Holiday Packages</h1>
      <Slider {...settings}>
        {/* ... (image slides) */}


        <div className="px-2">
          <img
            src="src/assets/img/Holiday1.png"
            alt="Image 1"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        {/* Add more image slides here */}


        <div className="px-2">
          <img
            src="src/assets/img/Holiday2.png"
            alt="Image 2"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday3.png"
            alt="Image 3"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday4.png"
            alt="Image 4"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday5.png"
            alt="Image 5"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday6.png"
            alt="Image 6"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday7.png"
            alt="Image 7"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday8.png"
            alt="Image 8"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday9.png"
            alt="Image 9"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
        <div className="px-2">
          <img
            src="src/assets/img/Holiday10.png"
            alt="Image 10"
            className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
          />
        </div>
      
      </Slider>
    </div>
  );
}

export default TopHolidayPackages;










//final
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const NextArrow = ({ onClick }) => (
//   <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600 hover:text-gray-800">
//     <FaChevronRight className="text-3xl" onClick={onClick} />
//   </div>
// );

// const PrevArrow = ({ onClick }) => (
//   <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-pink-600 hover:text-gray-800">
//     <FaChevronLeft className="text-3xl" onClick={onClick} />
//   </div>
// );

// function TopHolidayPackages() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <div className="container mx-auto px-4 py-4 relative">
//       <h1 className="text-2xl font-bold mb-4">Popular Destinations</h1>
//       <Slider {...settings}>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday1.png"
        //     alt="Image 1"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // {/* Add more image slides here */}


        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday2.png"
        //     alt="Image 2"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday3.png"
        //     alt="Image 3"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday4.png"
        //     alt="Image 4"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday5.png"
        //     alt="Image 5"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 6"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 7"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 8"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 9"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 10"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 11"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        
//       </Slider>
//     </div>
//   );
// }

// export default TopHolidayPackages;





// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// function TopHolidayPackages() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto px-4 py-4">
//       <h1 className="text-2xl font-bold mb-4">Popular Destinations</h1>
//       <Slider {...settings}>
//         <div className="px-2">
//           <img
//             src="src/assets/img/Holiday1.png"
//             alt="Image 1"
//             className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
//           />
//         </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday2.png"
        //     alt="Image 2"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday3.png"
        //     alt="Image 3"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday4.png"
        //     alt="Image 4"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday5.png"
        //     alt="Image 5"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 6"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 7"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 8"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 9"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 10"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
        // <div className="px-2">
        //   <img
        //     src="src/assets/img/Holiday6.png"
        //     alt="Image 11"
        //     className="rounded-xl object-cover w-full h-[21rem] transition duration-300 transform hover:scale-110"
        //   />
        // </div>
//       </Slider>
//     </div>
//   );
// }

// export default TopHolidayPackages;






















// import React from 'react'

// function TopHolidayPackages() {
//   return (
//     <>
//           <div className="container mx-auto px-4 py-4">
//         <h1 className="text-xl font-bold mb-4">Popular Destinations</h1>
  
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 gap-4">
         
//           <img
//             src="src/assets/img/Holiday1.png"
//             alt="Image 1"
//             className="rounded-xl object-cover w-full sm:h-22 md:h-[21rem] h-[31rem] size-16 transition duration-300 transform md:hover:scale-110"
//           />
       
//           <img
//             src="src/assets/img/Holiday2.png"
//             alt="Image 2"
//             className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
//           />
   
//           <img
//             src="src/assets/img/Holiday3.png"
//             alt="Image 3"
//             className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
//           />
       
      
//           <img
//             src="src/assets/img/Holiday4.png"
//             alt="Image 4"
//             className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
//           />
          
//           <img
//             src="src/assets/img/Holiday5.png"
//             alt="Image 5"
//             className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
//           />
//             <img
//             src="src/assets/img/Holiday6.png"
//             alt="Image 6"
//             className="rounded-xl object-cover w-full md:h-[21rem] h-[31rem] transition duration-300 transform md:hover:scale-110"
//           />
//         </div>
//       </div>
//     </>
//   )
// }

// export default TopHolidayPackages