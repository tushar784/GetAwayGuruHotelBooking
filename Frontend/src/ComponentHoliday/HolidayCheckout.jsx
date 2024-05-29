import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { SiPhonepe } from "react-icons/si";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth_Context";

const HolidayCheckout = () => {
  const { packageName } = useParams();
  const navigate = useNavigate()
  const [basePrice, setBasePrice] = useState(0); // Base price for a single room with up to 4 guests
  const [holiday, setHoliday] = useState(null);
  const [state, setState] = useState("");
  const [departure, setDepartureDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const { user } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const [orderDate, setOrderDate] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [breakfast, setBreakfast] = useState(false); // State for breakfast option
  const [guestsError, setGuestsError] = useState("");

  useEffect(() => {
    const fetchHolidayDetails = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const response = await axios.get(
          `${url}/api/holidaypackages/${packageName}`
        );
        setHoliday(response.data);
        console.log("data", response.data);
      } catch (error) {
        console.error("Error fetching holiday details:", error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
    setBasePrice(parseFloat(params.price));
    setPrice(parseFloat(params.price)); // Set the initial price
    setRooms(parseInt(params.rooms) || 1); // Set the initial number of rooms
    setGuests(parseInt(params.guests) || 1); // Set the initial number of guests
    fetchHolidayDetails();
  }, [packageName]);

  const calculateTotalPrice = (rooms, guests) => {
    if (guests > rooms * 3) {
      guests = rooms * 3;
    }
    let totalPrice = basePrice * guests;

    // Calculate the cost for additional rooms
    if (rooms > 1) {
      totalPrice += 1500 * (rooms - 1);
    }

    return totalPrice;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = import.meta.env.VITE_BASE_URL;
      const currentOrderDate = new Date().toISOString();
      setOrderDate(currentOrderDate);

      const orderData = {
        Packages_Name: holiday?.Package_Name,
        Departure_Date: departure,
        numberOfGuests: guests,
        numberOfRooms: rooms,
        username: user.username,
        email: user.email,
        state: state,
        contact_number: contactNumber,
        amount: price,
        orderDate: currentOrderDate,
      };

      const response = await axios.post(`${url}/api/holidaypackages/booking`, orderData);

      if (response.data.packageBookingDetails) {
        const { amount, razorpayOrderId, key, email, username } = response.data.packageBookingDetails;

        const options = {
          key,
          amount,
          currency: 'INR',
          name: "GetAwayGuru Booking",
          description: 'Holiday Package Payment',
          order_id: razorpayOrderId,
          handler: async function (response) {
            const body = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            };

            const validateRes = await axios.post(`${url}/api/order/validatepackageorder`, body);

            if (validateRes.data.msg === 'success') {
              toast.success('Payment successful');
              navigate(`/orderplaced/${razorpayOrderId}`);
            } else {
              toast.error('Payment validation failed');
              navigate(`/checkout/${packageName}`);
            }
          },
          prefill: {
            name: username,
            email: email,
            contact: contactNumber,
          },
          notes: {
            address: `${holiday?.Package_Name}, ${state}`,
          },
          theme: {
            color: '#3399cc',
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.open();
      }
    } catch (error) {
      console.error("Error in order creation or payment initiation:", error);
      navigate('/checkout');
    }
  };
  
  const handleRoomsChange = (value) => {
    value = Math.max(value, 1);
    setRooms(value);
    setPrice(calculateTotalPrice(value, guests, breakfast));
  };

  const handleGuestsChange = (value) => {
    if (value > rooms * 3) {
      setGuestsError("Maximum 3 guests allowed per room");
    } else {
      setGuestsError("");
    }
    value = Math.min(Math.max(value, 1), rooms * 3); // Restrict guests to 3 per room
    setGuests(value);
    setPrice(calculateTotalPrice(rooms, value));
  };

  const handleBreakfastChange = (value) => {
    setBreakfast(value);
    setPrice(calculateTotalPrice(rooms, guests, value));
  };

  // Calculate tomorrow's date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const statesList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <>
      <Navbar />

      {/* Mobile View Summery Box */}
      <div className="font-poppins md:hidden m-4">
        <div className="border border-gray-300 rounded-2xl pl-4 mb-4">
          <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
          <div className="flex">
            <img
              src={holiday?.Card_imgae}
              alt="Hotel"
              className="w-26 h-20 object-cover rounded "
            />
            <h1 className="px-4 text-lg font-bold">{holiday?.Package_Name}</h1>
          </div>
          <div className="px-2 py-2 text-mx font-semibold">
            {/* <div className="mb-2">Room : {roomType}</div> */}
            <div className="mb-2">Departure Date: {departure}</div>
            {/* <div className="mb-2">Check out: {checkOutDate}</div> */}
            <div className="mb-2">No. of rooms: {rooms}</div>
            <div className="mb-2">No. of guest: {guests}</div>
            <div className="mb-2">Breakfast: {breakfast ? "Yes" : "No"}</div>
            <div className="font-bold text-lg mb-2">Price: {price}</div>
          </div>
        </div>
      </div>

      {/* Customer details Form */}
      <h1 className="font-poppins ml-[7rem] text-xl font-semibold mt-10 mb-2">
        Customer Details
      </h1>
      <div className="font-poppins md:ml-[10rem] flex mt-[1rem]">
        <div className="flex-initial md:m-[2px] m-[1rem] w-[35rem] size-22">
          <form className="flex flex-col">
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="number"
                  className="block text-base font-semibold mb-2"
                >
                  Contact No:
                </label>
                <input
                  type="tel"
                  id="number"
                  placeholder="Phone No"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
              <div className="mb-4 lg:mb-0 flex-auto">
                <label
                  htmlFor="state"
                  className="block text-base font-semibold mb-2"
                >
                  State
                </label>
                <select
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                >
                  <option value="">Select State</option>
                  {statesList.map((stateName, index) => (
                    <option key={index} value={stateName}>
                      {stateName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Other Form Fields */}
            <div className="flex flex-col lg:flex-row mb-2">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="departure"
                  className="block text-base font-semibold mb-2"
                >
                  Departure
                </label>
                <input
                  type="date"
                  id="departureDate"
                  value={departure}
                  min={minDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>
            </div>

            {/* room and guest */}

            <div className="flex flex-col lg:flex-row mb-4">
              <div className="mb-4 lg:mr-4 flex-auto">
                <label
                  htmlFor="room"
                  className="block text-base font-semibold mb-2"
                >
                  Rooms <span className="text-xs">(per room only 3 are allowed after that 1500 per room)</span>
                </label>
                <input
                  type="number"
                  id="room"
                  placeholder="Room"
                  value={rooms}
                  onChange={(e) => handleRoomsChange(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
              </div>

              <div className="mb-4 lg:mb-0 flex-auto relative">
                {" "}
                {/* Add relative positioning */}
                <label
                  htmlFor="guest"
                  className="block text-base font-semibold mb-2"
                >
                  Guest <span className="text-xs">(Maximum number of guests is 3)</span>
                </label>
                <input
                  type="number"
                  id="guest"
                  placeholder="Guest"
                  value={guests}
                  max={rooms * 3}
                  onChange={(e) => handleGuestsChange(parseInt(e.target.value))}
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                />
                {guestsError.guests && (
                  <p className="text-red-500 absolute bottom-[-18px] left-0">
                    {guestsError.guests}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-[0.9rem] flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked="checked"
                  className="w-4 h-4 py-3 text-blue-600 bg-gray-100 rounded border-gray-300"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 flex items-center text-lg font-medium text-fuchsia-900"
                >
                  <SiPhonepe className="text-2xl" />
                  <span className="ml-1">Phone Pe</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#90CCBA] hover:bg-[#46c79f] text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Desktop View For Summary Box */}
        <div className="md:ml-[4rem] mb-4 md:flex hidden w-[21rem] h-[20rem]">
          <div className="border border-gray-300 rounded-2xl pl-4">
            <h3 className="font-bold mb-4 text-2xl mt-4">Summary</h3>
            <div className="flex">
              <img
                src={holiday?.Card_imgae}
                alt="holiday"
                className="w-26 h-20 object-cover rounded "
              />
              <h1 className="px-4 text-lg font-bold">
                {holiday?.Package_Name}
              </h1>
            </div>
            <div className="px-2 py-2 text-mx font-semibold">
              <div className="mb-2">Departure Date: {departure}</div> 
              <div className="mb-2">No. of rooms: {rooms}</div>
              <div className="mb-2">No. of guest: {guests}</div>
              <div className="font-bold text-lg mb-2">Price: ₹ {price}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayCheckout;