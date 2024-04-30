import React from "react";

const Policies = () => {
  return (
    <div className="mb-10 pr-[2rem] ml-[4rem] h-[20rem] w-[70rem]">
    <h1 className="font-bold text-2xl ml-2">Hotel policies</h1>
    <div>
    <div className="flex p-2 ">
      <h1 className="text-black text-lg mt-4 font-semibold mr-4">Check-in</h1>
      <p className="text-black mt-4 ml-[350px]">From 12:00pm</p>
    </div>
    <div className="border-b border-gray-400"></div>
    <div className="flex p-2">
      <h1 className="text-black text-lg mt-4 font-semibold mr-4">Check-Out</h1>
      <p className="text-black ml-[20.5rem] mt-4 ">Till 11:00am</p>
    </div>
    <div className="border-b border-gray-400"></div>
    <div className="flex p-2">
      <h1 className="text-black text-lg mt-4 font-semibold mr-4">
        Children And extra beds
      </h1>
      <p className="text-black ml-[15rem] mt-4  ">
        Extra beds are dependents on the room you choose. Please check the individual
        room capacity for more details
      </p>
    </div>
    <div className="border-b border-gray-400"></div>
    <div className="flex p-2">
      <h1 className="text-black text-lg mt-4 font-semibold mr-4">
        Property information{" "}
      </h1>
      <p className="text-black ml-[15rem] mt-4 ">Total rooms 40 rooms</p>
    </div>
    </div>
  </div>
  );
};

export default Policies;