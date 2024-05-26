import React from 'react';

const EventsCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={event.imageSrc}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{event.Event_Name}</h2>
        <p className="text-gray-600">{event.Location}</p>
        <p className="text-gray-600">{event.Date}</p>
        <p className="text-gray-600">{event.Venue_addr}</p>
      </div>
    </div>
  );
};

export default EventsCard;






// import React from 'react';

// function EventsCard() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Events In Mumbai</h1>
//       <div className="flex flex-wrap mb-4">
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Comedy Shows
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Workshops
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Music Shows
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Kids
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Performances
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Meetups
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Screening
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Exhibitions
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Conferences
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Award shows
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Spirituality
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Talks
//         </span>
//         <span className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
//           Cruises
//         </span>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="papon-live.jpg"
//             alt="Papon Live in Concert"
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-2">Papon Live in Concert</h2>
//             <p className="text-gray-600">Sat, 25 May</p>
//             <p className="text-gray-600">Infiniti Malad: Mumbai</p>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="clown-town.jpg"
//             alt="Clown Town at Nexus Seawoods"
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-2">
//               Clown Town at Nexus Seawoods
//             </h2>
//             <p className="text-gray-600">Sat, 25 May onwards</p>
//             <p className="text-gray-600">Seawoods</p>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="candy-city.jpg"
//             alt="CANDYCITY"
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-2">CANDYCITY</h2>
//             <p className="text-gray-600">Sat, 25 May onwards</p>
//             <p className="text-gray-600">Phoenix Marketcity...</p>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <img
//             src="dhandho.jpg"
//             alt="Dhandho - Munawar Faruqui Live"
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-lg font-bold mb-2">Dhandho - Munawar Faruqui Live</h2>
//             <p className="text-gray-600">Sun, 2 Jun</p>
//             <p className="text-gray-600">Faruqui Live</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EventsCard;