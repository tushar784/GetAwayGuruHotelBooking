import React from "react"; 
import RoomData from './RoomData.json';

function Roomdata() {
  // Check if hotels data is undefined or null
  if (!RoomData || RoomData.length === 0) {
    return <div>No hotels data available</div>;
  }

  return (
    <div className='ml-20 p-9  '>
      {RoomData.map((roomData, index) => (
        <div key={index} className='bg-white shadow-lg rounded-xl w-[71rem] border border-slate-300	 flex overflow-hidden mb-4 mr-[3rem]'>
          <img src={roomData.Image} className='w-[35%] h-48 object-cover item-center rounded-lg m-[1rem]' />
          <div className='py-4 flex   '>
            <div className='flex items-center '>
              <div className=" ml-4 w-[280px] ">
              {/* <h1 className=" text-2xl font-bold ">Standard room</h1> */}
                <h1 className="text-2xl font-bold ">{roomData.RoomType}</h1>  
                <div className='text-gray-600 font-semibold mt-3 text-emerald-400 mr-[2rem]'>
                    
                  <ul className="list-disc ml-4">
                    {roomData.Facilities.split(',').map((facility, index) => (
                      <li key={index}>{facility.trim()}</li>
                      
                    ))}
                  </ul>
                  <p className='text-red-700 mt-2 ml-1 mb-2 '>{roomData.RefundInfo}</p>
                </div>
              </div>
              <div className='ml-[8rem]   mt-9 justify-end ml-[190px] '>
                <p className='text-black mt-3 text-xl mb-2 font-extrabold'>₹{roomData.Price}</p>
                <p className='text-black text- mb-2 '>{roomData.taxes}</p>
                <p className='text-black text- mb-2 '>{roomData.note}</p>
                                <button className='text-white font-medium w-[11rem] h-10 rounded ' style={{ backgroundColor: "#90CCBA" }}>Reserve room</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Roomdata;