import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Overview = () => {
  const { packageName } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(3000); // Default price for simplicity

  const packageData = {
    Package_Name: "Amazing Gangtok Tour",
    About_Us: "Gangtok is a city in the Indian state of Sikkim. It is known for its scenic beauty and vibrant culture...",
    Type2_Price: 3000, // Example price
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setPrice(packageData.Type2_Price * quantity);
  }, [quantity]);

  return (
    <div>
      {/* Desktop view */}
      <div className="hidden md:flex w-[60rem] ">
        {/* About us */}
        <div>
          <h1 className="text-black text-2xl font-bold mr-2 mb-2">Overview</h1>
          <p>            Experience the timeless allure of Switzerland, where stunning natural landscapes  immerse yourself in the charm of picturesque Swiss villages nestled among the mountains. Then, escape to the tranquil shores of Lake Geneva, where crystal-clear waters reflect the surrounding vineyards and snow-capped peaks. Indulge in the enchanting vistas of the Swiss countryside, dotted with rolling hills, serene lakes, and charming chalets. Finally, delve into the vibrant energy of cities like Zurich and Geneva, where cosmopolitan flair meets historic charm. Whether you're seeking outdoor adventures, cultural discoveries, or simply relaxation amidst stunning scenery, Switzerland promises an unforgettable journey filled with memories to treasure forever.
</p>
        </div>

        {/* Booking Box */}
        <div className="border shadow-lg h-[19rem] p-5 ml-[2rem] mt-4 w-[25rem]">
          <h1 className="card-title text-2xl font-semibold">Package Booking</h1>
          <p className="text-black mt-3 text-xl mb-2 font-extrabold">₹1,82,943</p>
          <p className="mt-5">Total for {quantity} package(s)</p>

          <div className="flex items-center mt-4">
            <button onClick={handleDecrement}>-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>

          <p className="text-xl font-semibold mt-3">Total Price: ₹ 1,82,943</p>
          <br />
          <Link
            to={`/checkout/${packageName}?price=${1,82,943}&quantity=${quantity}`}
          >
            <button className="text-white font-bold w-80 h-10 mb-4 rounded" style={{ backgroundColor: "#90CCBA" }}>
              Book Now
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <div>
          <h1 className="text-black text-2xl font-bold mr-2">Overview</h1>
          <p>
            Experience the timeless allure of Switzerland, where stunning natural landscapes seamlessly blend with modern sophistication. Let knowledgeable guides lead you through the breathtaking Swiss Alps, where snow-capped peaks and lush valleys await exploration. Marvel at the iconic Matterhorn, a symbol of Switzerland's majestic beauty, and immerse yourself in the charm of picturesque Swiss villages nestled among the mountains. Then, escape to the tranquil shores of Lake Geneva, where crystal-clear waters reflect the surrounding vineyards and snow-capped peaks. Indulge in the enchanting vistas of the Swiss countryside, dotted with rolling hills, serene lakes, and charming chalets. Finally, delve into the vibrant energy of cities like Zurich and Geneva, where cosmopolitan flair meets historic charm. Whether you're seeking outdoor adventures, cultural discoveries, or simply relaxation amidst stunning scenery, Switzerland promises an unforgettable journey filled with memories to treasure forever.
          </p>
        </div>

        {/* Mobile view Total price card */}
        <div className="border shadow-lg h-[19rem] p-5 mt-[1rem] w-[85%] ml-[1.6rem] mx-auto mb-4">
          <h1 className="card-title text-2xl font-semibold">Package Booking</h1>
          <p className="text-black mt-3 text-xl mb-2 font-extrabold">₹{price}</p>
          <p className="mt-5">Total for {quantity} package(s)</p>

          <div className="flex items-center mt-4">
            <button onClick={handleDecrement}>-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>

          <p className="text-xl font-semibold mt-3">Total Price: ₹{price}</p>
          <br />
          <Link
            to={`/checkout/${packageName}?price=${price}&quantity=${quantity}`}
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

export default Overview;
