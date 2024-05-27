import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import EventsCard from './EventsCard';
import DropdownEvents from './DropdownEvents';

const EventsList = ({ events }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSelectedCategory(''); // Reset the category when location changes
  };

  const filteredEvents = events.filter((event) => {
    const categoryMatch =
      selectedCategory && event.Event_Category.toLowerCase() === selectedCategory.toLowerCase();
    const locationMatch = selectedLocation === 'All Locations' || event.Location.toLowerCase() === selectedLocation.toLowerCase();
    return locationMatch && (!selectedCategory || categoryMatch);
  });

  return (
    <div className="container md:mx-auto font-poppins md:pl-[9rem] md:pr-[5rem] md:pt-[2rem]">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <button
            className={`py-2 px-4 border border-gray-400 rounded-full transition-colors duration-300 ${
              selectedCategory === 'comedy shows'
                ? 'bg-teal-500 text-white'
                : 'bg-white text-teal-600 hover:bg-teal-500 hover:text-white'
            }`}
            onClick={() => handleCategorySelect('comedy shows')}
          >
            Comedy Shows
          </button>
          <button
            className={`py-2 px-4 border border-gray-400 rounded-full ml-[1rem] transition-colors duration-300 ${
              selectedCategory === 'music shows'
                ? 'bg-teal-500 text-white'
                : 'bg-white text-teal-600 hover:bg-teal-500 hover:text-white'
            }`}
            onClick={() => handleCategorySelect('music shows')}
          >
            Music Shows
          </button>
        </div>
        <DropdownEvents onSelectLocation={handleLocationSelect} selectedLocation={selectedLocation} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Array.isArray(filteredEvents) &&
          filteredEvents.map((event) => (
            <Link key={event._id} to={`/events/${event.Event_Name.toLowerCase().replace(/\s+/g, '-')}`}>
              <EventsCard event={event} selectedCategory={selectedCategory} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default EventsList;
