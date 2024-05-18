import React from "react";
import HolidayCard from "./HolidayCard";

const HolidayList = ({ holiday }) => {
  return (
    <div className="container md:mx-auto font-poppins md:pl-[5rem] md:pt-[2rem]">
      <h1 className="md:text-xl font-semibold md:mb-4 text-sm mb-4 mt-2">
        Showing Properties in {holiday.length ? holiday[0].Location : 'Selected Location'}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(holiday) && holiday.map((holidays) => (
          <HolidayCard key={holidays.Package_id} holiday={holidays} />
        ))}
      </div>
    </div>
  );
};

export default HolidayList;
