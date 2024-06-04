import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HotelCard from '../components/HotelCard'; // Import the HotelCard component

import HolidayCard from '../ComponentHoliday/HolidayCard';
import Navbar from '../components/Navbar';
import EventsCard from '../ComponentEvents/EventsCard';

const LocationDetails = () => {
  const { selectedLocation } = useParams();
  const [hotels, setHotels] = useState([]);
  const [packages, setPackages] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;

        // Fetch hotels
        const hotelsResponse = await axios.get(`${url}/api/hotels/location/${selectedLocation}`);
        setHotels(hotelsResponse.data);

        // Fetch packages
        const packagesResponse = await axios.get(`${url}/api/holidaypackages/location/${selectedLocation}`);
        setPackages(packagesResponse.data);

        // Fetch events
        const eventsResponse = await axios.get(`${url}/api/events/location/${selectedLocation}`);
        setEvents(eventsResponse.data);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    if (selectedLocation) {
      fetchLocationData();
    }
  }, [selectedLocation]);

  return (
    <>
    <Navbar />
    <div>
      <h2>Hotels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>

      <h2>Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {packages.map((Package) => (
          <HolidayCard key={Package.id} holiday={Package} />
        ))}
      </div>

      <h2>Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event) => (
          <EventsCard key={event.id} event={event} selectedCategory={selectedCategory} />
        ))}
      </div>
    </div>
    </>
  );
};

export default LocationDetails;