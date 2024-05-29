import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im';

const EventsCard = ({ event, selectedCategory }) => {
  const [expanded, setExpanded] = useState(false);
  const facilities = typeof event.Facilities === 'string' ? event.Facilities.split(',') : [event.Facilities];
  const visibleFacilities = expanded ? facilities : facilities.slice(0, 3);

  const handleToggleExpand = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };
  const shouldRenderCard =
    selectedCategory === '' ||
    event.Event_Category.toLowerCase() === selectedCategory.toLowerCase();

  if (!shouldRenderCard) {
    return null; // Don't render the card if the category doesn't match
  }

  return (
    
    <Link to={`/events/name/${event.Event_Name}`} className="block">
      <div
        className={`bg-white w-[18rem]  md:mb-[3rem] md:m-0 m-4 md:w-[19rem] shadow font-poppins rounded-lg overflow-hidden mb-4 transition-all duration-300 transform hover:scale-105 ${
          expanded ? 'md:h-auto' : 'md:h-[39rem]'
        }`}
      >
        <div className="h-auto mt-2 ml-2 rounded-lg w-full mr-2">
          <img
            src={event.Card_Img}
            alt={event.Event_Name}
            className="object-center w-[16rem] h-[12rem] md:h-[25rem] md:w-[17rem] md:pt-2 rounded m-2"
          />
        </div>
        <div className="p-4 flex flex-col w-full">
          <h2 className="text-xl font-semibold mb-2 text-black">{event.Event_Name}</h2>
          <p className="text-sm mb-2 text-gray-500">{event.Event_Category}</p>
          <div className="flex items-center mb-2">
            <ImLocation2 className="text-1xl mt-[4px] mr-2" />
            <p className="text-black">{event.Location}</p>
          </div>
       
          {/* <div className="flex justify-between items-center mt-2"> */}
          <p className='text-gray-500 font-semibold mb-2 text-black'>{event.Venue_addr}</p>
            <p className="text-gray-500 text-lg "> {event.Price} onwards</p>

            {/* <button className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded">
              Book Now
            </button> */}
          {/* </div> */}
        </div>
      </div>
    </Link>
  );
};

export default EventsCard;
