import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import HolidayImgSection from "../ComponentHoliday/HolidayImgSection";
import HolidayAboutAndBox from "../ComponentHoliday/HolidayAboutAndBox";
import HolidayDayPackage from "../ComponentHoliday/HolidayDayPackage";


const HolidayInfoPage = () => {
    const { packageName } = useParams();
    const [singlePackage, setSinglePackage] = useState(null);

  useEffect(() => {
    const fetchHolidayDetails = async () => {
    try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(`${url}/api/holidaypackages/${packageName}`);
        setSinglePackage(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching holiday details:', error);
    }
    };
    fetchHolidayDetails();
}, [packageName]);

  return (
    <>
      <div className="sticky top-0 bg-white w-full h-[4rem] shadow-lg z-50">
        <Navbar />
      </div>
      <div className="m-[0.7rem] ">
        {singlePackage && (
          <>
            {/* <HolidayImgSection singlePackage={singlePackage} /> singlePackage*/}
            <HolidayImgSection singlePackage={singlePackage} />
            <HolidayAboutAndBox singlePackage={singlePackage}/>
            <HolidayDayPackage singlePackage={singlePackage}/>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HolidayInfoPage;