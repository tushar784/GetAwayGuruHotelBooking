import React, { useEffect, useState } from "react";
import { ImLocation2 } from "react-icons/im";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineSportsBar } from "react-icons/md";
import { TbSwimming } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { FaWifi } from "react-icons/fa";
import { MdOutlineDinnerDining } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { MdSportsBar } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import AboutUsPopup from "./AboutUsPopup";

const InfoSection = ({ selectedRoom, hotel, guests }) => {
  const { hotelName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(hotel?.Type2_Price);
  const [showPopup, setShowPopup] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setGuests(guests + 1); // Update guests when incrementing quantity
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setGuests(guests - 1); // Update guests when decrementing quantity
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePrice = () => {
    let totalPrice = 0;
    if (selectedRoom) {
      totalPrice = selectedRoom.price * quantity;
    }
    setPrice(totalPrice);
  };

  useEffect(() => {
    handlePrice();
  }, [selectedRoom, quantity]);

  useEffect(() => {
    console.log("Price updated:", price);
  }, [price]);

  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:flex w-[60rem] ml-[6rem]">
        {/* About us */}
        <div>
          <h1 className="text-black text-2xl font-bold mr-2 mb-2">About Us</h1>
          {showPopup ? (
            <AboutUsPopup
              aboutUs={hotel.About_Us}
              onClose={togglePopup}
              className="indent-40"
            />
          ) : (
            <>
              <p>{hotel.About_Us.slice(0, 120)}...</p>{" "}
              {/* Display first 120 characters */}
              <button onClick={togglePopup} className="text-blue-600 font-semibold">
                Read More
              </button>
            </>
          )}
        </div>

        {/* Desktop view Total price card */}
        <div className="border shadow-lg h-[19rem] p-5 ml-[2rem] mt-4 w-[25rem]">
          <h1 className="card-title text-2xl font-semibold">
            {selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"}
          </h1>
          <p className="text-black mt-3 text-xl mb-2 font-extrabold">
            ₹{selectedRoom ? selectedRoom.price : hotel.Type2_Price}
          </p>

          <p className="mt-5">Per night for {quantity} room</p>

          <div className="flex items-center mt-4">
            <button onClick={handleDecrement} onChange={handlePrice}>
              -
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={handleIncrement} onChange={handlePrice}>
              +
            </button>
          </div>

          <p className="text-xl font-semibold mt-3">Total Price: ₹{price}</p>
          <br />
          <Link
            to={`/checkout/${hotelName}?roomType=${
              selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"
            }&price=${price}`}
          >
            <button
              className="text-white font-bold w-80 h-10 mb-4 rounded"
              style={{ backgroundColor: "#90CCBA" }}
            >
              Reserve Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile view */}
    
      <div className="md:hidden">
        <div className="hidden flex md:block ">
          <h1 className="text-black text-2xl font-bold mr-2">About Us</h1>
          {/* Here is the code for About hotel */}
          {hotel.About_Us}
        </div>

        {/*Mobile view Total price card  */}

        <div className="border shadow-lg h-[19rem] p-5 mt-[1rem] w-[85%] ml-[1.6rem] mx-auto mb-4">
          <h1 className="card-title text-2xl font-semibold">
            {selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"}
          </h1>
          <p className="text-black mt-3 text-xl mb-2 font-extrabold">₹{selectedRoom ? selectedRoom.price : hotel.Type2_Price}</p>

          <p className="mt-5">Per night for {quantity} room</p>

          <div className="flex items-center mt-4">
            <button onClick={handleDecrement} onChange={handlePrice}>-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={handleIncrement} onChange={handlePrice}>+</button>
          </div>

          <p className="text-xl font-semibold mt-3">Total Price: ₹{price}</p>
          <br />
          <Link
            to={`/checkout/${hotelName}?roomType=${
              selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"
            }&price=${price}`}
          >
            <button className="text-white font-bold w-[12.5rem] h-10 mb-4 rounded" style={{ backgroundColor: "#90CCBA" }}>
              Reserve Now
             </button>
          </Link>
          </div>
      </div>
    </div>
  );
};

export default InfoSection;












// import React, { useEffect, useState } from "react";
// import { ImLocation2 } from "react-icons/im";
// import { IoShareSocialSharp } from "react-icons/io5";
// import { MdOutlineSportsBar } from "react-icons/md";
// import { TbSwimming } from "react-icons/tb";
// import { CgGym } from "react-icons/cg";
// import { FaWifi } from "react-icons/fa";
// import { MdOutlineDinnerDining } from "react-icons/md";
// import { MdRoomService } from "react-icons/md";
// import { MdSportsBar } from "react-icons/md";
// import { Link, useParams } from "react-router-dom";
// import AboutUsPopup from './AboutUsPopup';

// const InfoSection = ({ selectedRoom,hotel }) => {
//   const { hotelName } = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(hotel.Type2_Price);
//   const [showPopup, setShowPopup] = useState(false);
  
//   console.log("dadsa", hotel);
  
//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   const handlePrice = () => {
//     let totalPrice = 0;
//     if (selectedRoom) { // Check if selectedRoom exists before accessing price
//       totalPrice = selectedRoom.price * quantity;
//     }
//     setPrice(totalPrice);
//   };

//   useEffect(() => {
//     handlePrice();
//   }, [selectedRoom, quantity]);

//   useEffect(() => {
//     console.log("Price updated:", price);
//   }, [price]);


//   return (
    
//     <div>
     
//      <div>
//       {/* Desktop view */}
//       <div className="hidden md:flex w-[60rem] ml-[6rem]">
//         {/* <div className="">
//           <h1 className="text-black text-2xl font-bold mr-2 mb-2">About Us</h1>
         
//           {hotel.About_Us}
//         </div> */}




//         {/*About us  */}
//    <div>
//       <h1 className="text-black text-2xl font-bold mr-2 mb-2">About Us</h1>
//       {showPopup ? (
//         <AboutUsPopup aboutUs={hotel.About_Us} onClose={togglePopup} className="indent-40" />
//       ) : (
//         <>
//           <p>{hotel.About_Us.slice(0, 120)}...</p> {/* Display first 120 characters */}
//           <button onClick={togglePopup} className="text-blue-600 font-semibold">
//             Read More
//           </button>
//         </>
//       )}
//     </div>

//        {/* Desktop view Total price card */}

//         <div className="border shadow-lg h-[19rem] p-5 ml-[2rem] mt-4 w-[25rem]">
//           <h1 className="card-title text-2xl font-semibold">
//             {selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"}
//           </h1>
//           <p className="text-black mt-3 text-xl mb-2 font-extrabold">₹{selectedRoom ? selectedRoom.price : hotel.Type2_Price}</p>

//           <p className="mt-5">Per night for {quantity} room</p>

//           <div className="flex items-center mt-4">
//             <button onClick={handleDecrement} onChange={handlePrice}>-</button>
//             <span className="mx-2">{quantity}</span>
//             <button onClick={handleIncrement} onChange={handlePrice}>+</button>
//           </div>

//           <p className="text-xl font-semibold mt-3">Total Price: ₹{price}</p>
//           <br />
//           <Link to={`/checkout/${hotelName}?roomType=${selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"}&price=${price}`}>
//             <button className="text-white font-bold w-80 h-10 mb-4 rounded" style={{ backgroundColor: "#90CCBA" }}>
//               Reserve Now
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile view */}
//       <div className="md:hidden">
//         <div className="hidden flex md:block ">
//           <h1 className="text-black text-2xl font-bold mr-2">About Us</h1>
//           {/* Here is the code for About hotel */}
//           {hotel.About_Us}
//         </div>

//         {/*Mobile view Total price card  */}

//         <div className="border shadow-lg h-[19rem] p-5 mt-[1rem] w-[85%] ml-[1.6rem] mx-auto mb-4">
//           <h1 className="card-title text-2xl font-semibold">
//             {selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"}
//           </h1>
//           <p className="text-black mt-3 text-xl mb-2 font-extrabold">₹{selectedRoom ? selectedRoom.price : hotel.Type2_Price}</p>

//           <p className="mt-5">Per night for {quantity} room</p>

//           <div className="flex items-center mt-4">
//             <button onClick={handleDecrement} onChange={handlePrice}>-</button>
//             <span className="mx-2">{quantity}</span>
//             <button onClick={handleIncrement} onChange={handlePrice}>+</button>
//           </div>

//           <p className="text-xl font-semibold mt-3">Total Price: ₹{price}</p>
//           <br />
//           <Link to={`/checkout/${hotelName}?roomType=${selectedRoom?.roomType === "Room_Type_1" ? "Deluxe Room" : "Standard Room"}&price=${price}`}>
//             <button className="text-white font-bold w-[12.5rem] h-10 mb-4 rounded" style={{ backgroundColor: "#90CCBA" }}>
//               Reserve Now
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>



//       {/* Aminities */}

//        {/*Desktop view */}

//       <div className="hidden flex md:block mt-6 ml-[6rem] mb-[2rem]">
//         <h1 className=" font-bold text-2xl">Amenities</h1>

//         <div className=" flex ml-[4rem] mt-[2rem] content-evenly w-[60rem] justify-between p-2 h-[8rem] gap-[5rem]">
//           <div >
//             <TbSwimming className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
//             <h1 className="  ">Swimming</h1>
//             <p className=" ml-3 text-6">pool</p>
//           </div>
//           <div >
//             <CgGym className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
//             <h1 className="  ml-1 text-6">Gym</h1>
//             <p className=" text-6">access</p>
//           </div>
//           <div >
//             <FaWifi className="text-4xl p-2 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
//             <h1 className=" ml-3 text-6">wifi</h1>
//           </div>
//           <div>
//             <MdOutlineDinnerDining className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
//             <h1 className=" ml-1 text-6">Buffet</h1>
//             <p className=" text-6">breakfast</p>
//           </div>
//           <div>
//             <MdRoomService className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
//             <h1 className=" ml-3 text-6">24h</h1>
//             <p className="  ">Room service</p>
//           </div>
//           <div>
//             <MdOutlineSportsBar className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg " />
//             <h1 className=" ml-3 text-6">bar</h1>
//           </div>
//         </div>
//         </div>   
 
//          {/* Mobile view */}

//          <h1 className=" md:hidden font-bold text-xl mt-4 ml-4">Amenities</h1>

//         <div className="md:hidden flex flex-wrap justify-between mt-4">
          
//             <div className="w-1/2 p-2">
              
//               <TbSwimming className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg mx-auto" />
//               <h1 className="text-mx text-center">Swimming</h1>
//               <p className="text-mx text-center">pool</p>
//             </div>
//             <div className="w-1/2 p-2">
//               <CgGym className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg mx-auto" />
//               <h1 className="text-mx text-center">Gym </h1>
//               <p className="text-mx text-center">access</p>
//             </div>
//             <div className="w-1/2 p-2 mt-2">
//               <FaWifi className="text-4xl p-2 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg mx-auto" />
//               <h1 className="text-mx text-center">wifi</h1>
//             </div>
//             <div className="w-1/2 p-2 mt-2">
//               <MdOutlineDinnerDining className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg mx-auto" />
//               <h1 className="text-mx text-center">Buffet</h1>
//               <p className="text-mx text-center">breakfast</p>
//             </div>
//             <div className="w-1/2 p-2 mt-2">
//               <MdRoomService className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg mx-auto" />
//               <h1 className="text-mx text-center">24h</h1>
//               <p className="text-mx text-center">Room service</p>
//             </div>
//             <div className="w-1/2 p-2 mt-2">
//               <MdOutlineSportsBar className="text-4xl p-1 h-14 w-14 border border-gray-400 pt-2 pb-2 rounded-lg mx-auto" />
//               <h1 className="text-mx text-center">bar</h1>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default InfoSection;




