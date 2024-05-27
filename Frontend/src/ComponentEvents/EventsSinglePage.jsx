import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

function EventsSinglePage() {
  const { eventName } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [terms, setTerms] = useState([]);
  const [termsLoading, setTermsLoading] = useState(true);
  const [showTerms, setShowTerms] = useState(false);  // State for toggling Terms and Conditions
  const [showLayout, setShowLayout] = useState(false); // State for toggling Concert ground layout

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/events/name/${eventName}`);
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event:', error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventName]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        setTermsLoading(true);
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/terms`);  // Adjust the endpoint as needed
        setTerms(response.data);
        setTermsLoading(false);
      } catch (error) {
        console.error('Error fetching terms:', error);
        setTermsLoading(false);
      }
    };

    fetchTerms();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!event) {
    return <div className="flex justify-center items-center h-screen">Event not found</div>;
  }

  return (
    <>
      <Navbar />
      <h1 className="md:text-xl font-bold md:mb-4 text-sm mt-2 ml-[9rem]">
         {event.Event_Name}
      </h1>
      <div className="min-h-screen flex flex-col items-center ">
      
        <div className="mt-6 ml-8 w-[62rem]">
          <img
            className="object-center rounded mt-2 h-[24rem] w-[60rem] "
            src={event.Main_Img}
            alt={event.Event_Name}/>
        </div>

        {/* price box */}
        <div className="border border-slate-400 h-[13rem] w-[60rem] rounded-lg p-8 mt-8">
          <div className='flex '>
            <h2 className="text-2xl font-bold mb-2 text-black">{event.Event_Name}</h2>
            <button class="bg-[#90CCBA] text-white font-bold py-2 px-4 rounded ml-auto">
                Book Now
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-black">{event.Show_venu}</h2>
          <div className='flex'>
            <p className="text-xl font-semibold mb-2 text-black">{event.Date}</p>
            <p className="text-xl ml-[1rem] font-semibold mb-2 text-black">|  {event.Price}</p>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-black">{event.Venue_addr}</h2>
        </div>

        <div className="border border-slate-400 h-[21rem] w-[60rem] rounded-lg p-8 mt-8">
          <div className="flex items-center mb-8">
            <img
              src={event.Artist_Img}
              alt={event.Artist_Name}
              className="w-[5rem] h-[5rem] rounded-full mr-4 mb-[5rem] mt-[4rem] "
            />
            <div className='flex'>
              <div className='w-[15rem] mt-[3rem]'>
                <h2 className="text-2xl font-bold mb-2">{event.Event_Name}</h2>
                <p className="text-gray-600">{event.Artist_Name}</p>
              </div>
              <div className='w-[35rem]'>
                <p className='font-bold text-2xl mb-2'>About</p>
                <p className="mb-4">{event.About}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="w-[60rem] mt-8">
          <button
            className="flex items-center justify-between w-full border text-black font-bold py-2 px-4 rounded"
            onClick={() => setShowTerms(!showTerms)}
          >
            <span>Terms and Conditions</span>
            <span>{showTerms ? '▲' : '▼'}</span>
          </button>
          {showTerms && (
            <div className="p-4 bg-gray-100 rounded">
              <p>
                * All attendees must have a valid ticket for entry.<br />
                * The event organizers reserve the right to refuse admission to any person whose conduct is deemed inappropriate or disruptive.<br />
                * All performances are subject to change or cancellation without notice.<br />
                * Photography and video recording of the performances are strictly prohibited without prior written consent from the organizers.<br />
                * By attending the event, you consent to being photographed or filmed and to your image being used in promotional materials.<br />
                * The organizers are not responsible for lost or stolen items.<br />
                * Any disputes arising from the event will be governed by the laws of the jurisdiction in which the event is held.<br />
                * These terms and conditions are subject to change at any time without prior notice.
              </p>
            </div>
          )}
        </div>

        {/* Concert ground layout Section */}
        <div className="w-[60rem] mt-8">
          <button
            className="flex items-center justify-between w-full border text-black font-bold py-2 px-4 rounded"
            onClick={() => setShowLayout(!showLayout)}
          >
            <span>Concert ground layout</span>
            <span>{showLayout ? '▲' : '▼'}</span>
          </button>
          {showLayout && (
            <div className="p-4 bg-gray-100 rounded">
              <img src={event.Venu_Layout} alt="Concert ground layout" className="w-[30rem] h-[45rem] ml-[14rem] rounded" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default EventsSinglePage;
