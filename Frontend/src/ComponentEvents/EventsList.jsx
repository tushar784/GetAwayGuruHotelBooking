// import React from 'react';
// import EventsCard from './EventsCard';

// const EventsList = () => {
//   const events = [
//     {
//       title: 'Papon Live in Concert',
//       date: 'Sat, 25 May',
//       venue: 'Infiniti Malad: Mumbai',
//       imageSrc: 'papon-live.jpg',
//     },
//     {
//       title: 'Clown Town at Nexus Seawoods',
//       date: 'Sat, 25 May onwards',
//       venue: 'Seawoods',
//       imageSrc: 'clown-town.jpg',
//     },
//     {
//       title: 'CANDYCITY',
//       date: 'Sat, 25 May onwards',
//       venue: 'Phoenix Marketcity...',
//       imageSrc: 'candy-city.jpg',
//     },
//     {
//       title: 'Dhandho - Munawar Faruqui Live',
//       date: 'Sun, 2 Jun',
//       venue: 'Faruqui Live',
//       imageSrc: 'dhandho.jpg',
//     },
//   ];

//   const categories = [
//     'Comedy Shows',
//     'Workshops',
//     'Music Shows',
//     'Kids',
//     'Performances',
//     'Meetups',
//     'Screening',
//     'Exhibitions',
//     'Conferences',
//     'Award shows',
//     'Spirituality',
//     'Talks',
//     'Cruises',
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Events In Mumbai</h1>
//       <div className="flex flex-wrap mb-4">
//         {categories.map((category, index) => (
//           <span
//             key={index}
//             className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2"
//           >
//             {category}
//           </span>
//         ))}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {events.map((event, index) => (
//           <EventsCard key={index} event={event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsList;



import React from 'react';
import EventsCard from './EventsCard';

const EventsList = ({ events }) => {
  const categories = [
    'Comedy Shows', 'Workshops', 'Music Shows', 'Kids', 'Performances', 'Meetups',
    'Screening', 'Exhibitions', 'Conferences', 'Award shows', 'Spirituality', 'Talks', 'Cruises',
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Events In {events.length ? events[0].Location : 'Selected Location'}</h1>
      <div className="flex flex-wrap mb-4">
        {categories.map((category, index) => (
          <span key={index} className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2 mb-2">
            {category}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <EventsCard key={event.Event_Id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;

