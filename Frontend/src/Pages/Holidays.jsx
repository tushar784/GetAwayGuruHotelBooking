import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import HolidayList from "../ComponentHoliday/HolidayList";
import axios from "axios"; // Import axios
// import SingleHolidayPage from "../ComponentHoliday/SingleHolidayPage";

const Holidays = () => {
  const { selectedLocation } = useParams();
  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    const fetchHolidayPackages = async () => {
      try {
        if (selectedLocation) {
          const url = import.meta.env.VITE_BASE_URL;
          const response = await axios.get(`${url}/api/holidaypackages/location/${selectedLocation}`);
          setHoliday(response.data); // Set holiday state with response.data
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching holiday packages:", error);
      }
    };

    fetchHolidayPackages();
  }, [selectedLocation]);

  return (
    <>
      <Navbar />
      <HolidayList holiday={holiday} />
      
    </>
  );
};

export default Holidays;




