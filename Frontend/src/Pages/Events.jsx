import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import EventsList from '../ComponentEvents/EventsList';
import Loading from '../components/Loading'; // Add loading component
import axios from 'axios'; // Import axios
import { useParams } from 'react-router-dom';

function Events() {
  const { selectedLocation } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        if (selectedLocation) {
          const url = import.meta.env.VITE_BASE_URL;
          const response = await axios.get(`${url}/events/location/${selectedLocation}`);
          setEvents(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, [selectedLocation]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <EventsList events={events} />
    </>
  );
}

export default Events;
