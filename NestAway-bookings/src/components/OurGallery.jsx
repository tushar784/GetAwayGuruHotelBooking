// import { useState } from 'react';
// import Image1 from '../img/hotel1.jpg';
// import Image2 from '../img/hotel2.jpg';
// import Image3 from '../img/hotel3.jpg';
// // import Image4 from '../img/hotel4.jpg';

// const OurGallery = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = [
//     [Image1, Image2, Image3 ],
//     // Add additional slides as arrays of image imports
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevState) => (prevState + 1) % slides.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevState) => (prevState === 0 ? slides.length - 1 : prevState - 1));
//   };

//   return (
//     <div className="relative">
//         <h1 className='ml-[35rem] text-2xl font-bold mb-4 mt-16'>Our Gallery</h1>
//       <div className="flex justify-between items-center">
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none"
//           onClick={handlePrev}
//         >
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//           </svg>
//         </button>
//         <div className="flex">
//           {slides[currentIndex].map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Slide ${currentIndex}, Image ${index}`}
//               className="w-64 h-48 object-cover"
//             />
//           ))}
//         </div>
//         <button
//           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none"
//           onClick={handleNext}
//         >
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OurGallery;























// // import { useState } from 'react';
// // import Image1 from '../img/hotel1.jpg';
// // import Image2 from '../img/hotel2.jpg';
// // import Image3 from '../img/hotel3.jpg';
// // import Image4 from '../img/hotel4.jpg';
// // // import Image5 from '../img/hotel5.jpg';
// // // import Image6 from '../img/hotel6.jpg';
// // // import Image7 from '../img/hotel7.jpg';

// // const OurGallery = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const slides = [
// //     [Image1, Image2, Image3],
// //     [Image2, Image3, Image4],
// //     // [Image,Image6,Image7] // Add additional slides with three images each
// //   ];

// //   const handleNext = () => {
// //     setCurrentIndex((prevState) => (prevState + 1) % slides.length);
// //   };

// //   const handlePrev = () => {
// //     setCurrentIndex((prevState) => (prevState === 0 ? slides.length - 1 : prevState - 1));
// //   };

// //   return (
// //     <div className="relative">
// //          <h1 className='ml-[35rem] text-2xl font-bold mb-4 mt-16'>Our Gallery</h1>
// //       <div className="flex justify-between items-center ">
// //       {/* <div className="flex justify-between items-center w-[22rem] mr-[30rem] ml-[15rem]"> */}
// //         <button
// //           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none"
// //           onClick={handlePrev}
// //         >
// //           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //           </svg>
// //         </button>
// //         <div className="flex">
// //           {slides[currentIndex].slice(0, 3).map((image, index) => (
// //             <img
// //               key={index}
// //               src={image}
// //               alt={`Slide ${currentIndex}, Image ${index}`}
// //               className="w-[25rem] h-5/6 object-cover rounded-xl gap-4"
// //             />
// //           ))}
// //         </div>
// //         <button
// //           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none"
// //           onClick={handleNext}  > 
// //             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //           </svg>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OurGallery;





















// // import { useState } from 'react';
// // import Image1 from '../img/hotel1.jpg';
// // import Image2 from '../img/hotel2.jpg';
// // import Image3 from '../img/hotel3.jpg';
// // import Image4 from '../img/hotel4.jpg';

// // const OurGallery = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const images = [Image1, Image2, Image3, Image4];

// //   const handleNext = () => {
// //     setCurrentIndex((prevState) => (prevState + 1) % images.length);
// //   };

// //   const handlePrev = () => {
// //     setCurrentIndex((prevState) => (prevState === 0 ? images.length - 1 : prevState - 1));
// //   };

// //   return (
// //     <div className="relative mt-[6rem]">
// //         <h1 className='ml-[35rem] text-2xl font-bold mb-4 mt-16'>Our Gallery</h1>
// //       <div className="flex justify-between items-center object-cover w-[22rem] mr-[50rem] ml-[25rem]">
// //         <button
// //           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none"
// //           onClick={handlePrev}
// //         >
// //           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
// //           </svg>
// //         </button>
// //         <img
// //           src={images[currentIndex]}
// //           alt={`Slide ${currentIndex}`}
// //           className="w-full h-96 object-cover"
// //         />
// //         <button
// //           className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none"
// //           onClick={handleNext}
// //         >
// //           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //           </svg>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default OurGallery;