// HolidayPackagesInfo.jsx

import Navbar from '../components/Navbar';
import React from 'react';
import PackageImg from './PackageImg';
import Overview from './Overview';
import DayInfo from './DayInfo';

const HolidayPackagesInfo = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <PackageImg />
        <Overview />
        <DayInfo />
      </div>
    </>
  );
};

export default HolidayPackagesInfo;
