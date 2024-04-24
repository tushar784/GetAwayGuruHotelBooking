import React from "react";

function RoomCard({ hotel }) {
  return (
    <div className="p-9 ml-[5rem]">
      {/* Render Deluxe Room */}
      <div className="bg-white mb-4 h-[14rem] w-[95%] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={hotel.Type1_Img}
          className="w-[30%] h-48 object-cover item-center rounded-lg m-[1rem]"
        />
        <div className="py-4 flex ">
          <div className="flex items-center ">
            <div className="ml-4 w-[280px]">
              <h1 className="text-2xl font-bold">{hotel.Room_Type_1}</h1>
              <div className="text-gray-600 font-semibold mt-3 text-emerald-400 mr-[2rem]">
             
                <p className="text-black mt-2 ml-1 mb-2 ">
                  {hotel.Refund_Status}
                </p>
              </div>
            </div>
            <div className="ml-[8rem] justify-end ">
              <p className="text-black mt-3 text-xl mb-2 font-extrabold">
                {hotel.Type1_Price}
              </p>
              <p className='text-black text- mb-2 '>+₹1020 taxes</p>
              <p className='text-black text- mb-2 '>per night for 1 room</p>
              <button
                className="text-white font-medium w-[11rem] h-10 rounded "
                style={{ backgroundColor: "#90CCBA" }} >
                Reserve room
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render Standard Room */}
      <div className="bg-white mb-4 h-[14rem] w-[95%] shadow font-poppins rounded-lg overflow-hidden flex flex-col md:flex-row">
        <img
          src={hotel.Type2_Img}
          className="w-[30%] h-48 object-cover item-center rounded-lg m-[1rem]"
        />
        <div className="py-4 flex ">
          <div className="flex items-center ">
            <div className="ml-4 w-[280px]">
              <h1 className="text-2xl font-bold">{hotel.Room_Type_2}</h1>
              <div className="text-gray-600 font-semibold mt-3 text-emerald-400 mr-[2rem]">
                <ul className="list-disc ml-4">
                  {hotel.Standard_Room_Facilities &&
                    hotel.Standard_Room_Facilities
                      .split(",")
                      .map((facility, index) => (
                        <li key={index}>{facility.trim()}</li>
                      ))}
                </ul>
                <p className="text-black mt-2 ml-1 mb-2 ">
                  {hotel.Refund_Status}
                </p>
              </div>
            </div>
            <div className="ml-[8rem] justify-end ">
              <p className="text-black mt-3 text-xl mb-2 font-extrabold">
                 {hotel.Type2_Price}
              </p>
              <p className='text-black text- mb-2 '>+₹1020 taxes</p>
              <p className='text-black text- mb-2 '>per night for 1 room</p>
               <button
                className="text-white font-medium w-[11rem] h-10 rounded "
                style={{ backgroundColor: "#90CCBA" }}>
                Reserve room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
