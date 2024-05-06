import React from "react";

const Policies = () => {
  return (
    <div className="md:mb-10 md:pr-[2rem] md:ml-[4rem] md:h-[20rem] md:w-[70rem]">
    <h1 className="font-bold md:text-2xl md:ml-2">Hotel policies</h1>
    <div>
    <div className="flex p-2 ">
      <h1 className="text-black md:text-lg text-mx md:mt-4 mt-[1.1rem] font-semibold mr-4">Check-in</h1>
      <p className="text-black md:text-base text-sm md:mt-4 mt-[1.2rem] md:ml-[350px] ml-[3rem]">From 12:00pm</p>
    </div>
    <div className="hidden md:block border-b border-gray-400"></div>

    <div className="flex p-2">
      <h1 className="text-black md:text-lg text-sm md:mt-4 mt-[1.1rem] font-semibold mr-4">Check-Out</h1>
      <p className="text-black md:text-base text-sm md:mt-4 mt-[1.2rem] md:ml-[350px] ml-[3rem]">Till 11:00am</p>
    </div>

    <div className="hidden md:block border-b border-gray-400"></div>
    
    <div className="flex p-2">
      <h1 className="text-black md:text-lg text-sm mt-4 font-semibold mr-4">
        Children And extra beds
      </h1>
      <p className="text-black md:ml-[15rem] ml-[3.3rem] mt-4 md:text-base text-sm ">
        Extra beds are dependents on the room you choose. Please check the individual
        room capacity for more details
      </p>
    </div>

    <div className="hidden md:block border-b border-gray-400"></div>
    <div className="flex p-2">
      <h1 className="text-black md:text-lg text-sm mt-4 font-semibold mr-4">
        Property information{" "}
      </h1>
      <p className="text-black md:ml-[15rem] ml-[3.3rem] mt-4 md:text-base text-sm">Total rooms 40 rooms</p>
    </div>
    </div>
  </div>
  );
};

export default Policies;