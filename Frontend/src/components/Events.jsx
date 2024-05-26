// src/Events.js
import React from 'react';

const events = [
  {
    title: 'Papon Live in Concert',
    location: 'Infiniti Malad: Mumbai',
    date: 'Sat, 25 May',
    imgSrc: 'path/to/papon-image.jpg',
    promoted: true,
  },
  {
    title: 'Clown Town at Nexus Seawoods',
    location: 'Nexus Seawoods Mall',
    date: 'Sat, 25 May onwards',
    imgSrc: 'path/to/clown-town-image.jpg',
  },
  {
    title: 'CANDYCITY',
    location: 'Phoenix Marketcity',
    date: 'Sat, 25 May onwards',
    imgSrc: 'path/to/candycity-image.jpg',
  },
  {
    title: 'Dhandho - Munawar Faruqui Live',
    location: '',
    date: 'Sun, 2 Jun',
    imgSrc: 'path/to/dhandho-image.jpg',
  },
];

const Events = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events In Mumbai</h1>
      <div className="flex flex-wrap -mx-2">
        {events.map((event, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover" src={event.imgSrc} alt={event.title} />
              <div className="p-4">
                {event.promoted && <span className="text-xs text-white bg-red-500 px-2 py-1 rounded">PROMOTED</span>}
                <h2 className="text-lg font-semibold mt-2">{event.title}</h2>
                <p className="text-gray-600">{event.location}</p>
                <p className="text-gray-600">{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
