import React from 'react';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
     <h1 className="text-xl font-bold mb-2 mt-8">FAQ</h1>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <div className="bg-white p-4 rounded-lg ">
            <h1 className="text-lg font-semibold mb-4">Q. How to book a hotel online with GatAwayGuru?</h1>
            <p className="text-sm leading-relaxed mb-4">A. Booking a hotel online is easy through GatAwayGuru. All you need to do first is to download our app on your Android or iOS device or simply use your computer. On the app, tap on the Hotels section on the top left corner and enter the details of the city, the area or the hotel. Fill out the check-in and check-out dates, along with the other details and tap Search. Use the Sort & Filter options so that you can book one as per your convenience. You can also choose hotels according to user reviews and ratings. The same follows on our site.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-4 rounded-lg ">
            <h1 className="text-lg font-semibold mb-4">Q. How to find the cheapest hotel deals in any city?</h1>
            <p className="text-sm leading-relaxed mb-4">A. GatAwayGuru, being the best hotel-booking site in the country, offers several discounts on budget hotels as well. If you are looking for the cheapest hotels with amazing deals on the app, you can tap on Sort & Filter option and drag down the Price option from Rs.0 to Rs.500 or from Rs.0 to Rs.1000. Choose from the various amenities you would need during your stay including access to Wi-Fi, room service and in-house restaurants. The list will first show you the cheapest one on top.</p>
          </div>
        </div>

        {/* Horizontal line */}
        <div className=" ml-4 w-[76rem] ">
          <hr className="border-gray-300 my-8" />
        </div>

        {/* 2nd row */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-2 px-4">
          <div className="bg-white p-4 mt-[-1rem] mb-2 ">
            <h1 className="text-lg font-semibold mb-4">Q. How to find the best hotels near me?</h1>
            <p className="text-sm leading-relaxed mb-4">A. If you are travelling to a city for the first time and are looking for hotels in the best areas, it is easy to find them on our website and our app. Let’s say, you are going to Goa and planning to book one near the most happening beaches. Once you have hit the Search option, you will find a list of all the hotels in North Goa near the famed beach areas including Baga and Calangute. You can even find out which of the areas are ideal for couples and families. Similarly, if you are looking for booking hotels in Mumbai, you can either book ones that are near the city’s major business districts, tourist areas and transportation hubs.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-[-0.3rem]">
          <div className="bg-white p-4 ">
            <h1 className="text-lg font-semibold mb-4">Q. Where can I find current deals and offers of GatAwayGuru?</h1>
            <p className="text-sm leading-relaxed mb-4">A. GatAwayGuru offers plenty of deals and offers on luxury and budget hotels in India in all the cities, on a daily basis. However, these are available for a limited time and they are subject to change the next day. You can look for these deals while you are about to book the hotel after narrowing down your choices. On the app, you can check a property that has ‘MMT Exclusive Deal’ button below its discounted rate. By tapping on it, you would know how many offers are available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;








// import React from 'react';

// const FAQ = () => {
//   return (
//     <div className="container mx-auto px-4 mt-4">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
//           <div className="bg-white p-4 rounded-lg ">
//             <h1 className="text-lg font-semibold mb-4">Q. How to book a hotel online with GatAwayGuru?</h1>
//             <p className="text-sm leading-relaxed mb-4">A. Booking a hotel online is easy through GatAwayGuru. All you need to do first is to download our app on your Android or iOS device or simply use your computer. On the app, tap on the Hotels section on the top left corner and enter the details of the city, the area or the hotel. Fill out the check-in and check-out dates, along with the other details and tap Search. Use the Sort & Filter options so that you can book one as per your convenience. You can also choose hotels according to user reviews and ratings. The same follows on our site.</p>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2 px-4 ">
//           <div className="bg-white p-4 rounded-lg ">
//             <h1 className="text-lg font-semibold mb-4">Q. How to find the cheapest hotel deals in any city?</h1>
//             <p className="text-sm leading-relaxed mb-4">A. GatAwayGuru, being the best hotel-booking site in the country, offers several discounts on budget hotels as well. If you are looking for the cheapest hotels with amazing deals on the app, you can tap on Sort & Filter option and drag down the Price option from Rs.0 to Rs.500 or from Rs.0 to Rs.1000. Choose from the various amenities you would need during your stay including access to Wi-Fi, room service and in-house restaurants. The list will first show you the cheapest one on top.</p>
//           </div>
//         </div>

//                         {/* 2nd row */}
//         <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-2 px-4 ">
//           <div className="bg-white p-4 mt-[-1rem] mb-2 border-t-4 border-gray-200">
//             <h1 className="text-lg font-semibold mb-4">Q. How to find the best hotels near me?</h1>
//             <p className="text-sm leading-relaxed mb-4">A. If you are travelling to a city for the first time and are looking for hotels in the best areas, it is easy to find them on our website and our app. Let’s say, you are going to Goa and planning to book one near the most happening beaches. Once you have hit the Search option, you will find a list of all the hotels in North Goa near the famed beach areas including Baga and Calangute. You can even find out which of the areas are ideal for couples and families. Similarly, if you are looking for booking hotels in Mumbai, you can either book ones that are near the city’s major business districts, tourist areas and transportation hubs.</p>
//           </div>
          
//         </div>
//         <div className="w-full md:w-1/2 px-4 mt-[-0.3rem]">
//           <div className="bg-white p-4 border-t-4 border-gray-200">
//             <h1 className="text-lg font-semibold mb-4">Q. Where can I find current deals and offers of GatAwayGuru?</h1>
//             <p className="text-sm leading-relaxed mb-4">A. GatAwayGuru offers plenty of deals and offers on luxury and budget hotels in India in all the cities, on a daily basis. However, these are available for a limited time and they are subject to change the next day. You can look for these deals while you are about to book the hotel after narrowing down your choices. On the app, you can check a property that has ‘MMT Exclusive Deal’ button below its discounted rate. By tapping on it, you would know how many offers are available.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;











