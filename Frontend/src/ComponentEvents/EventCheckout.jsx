import React from 'react'

function EventCheckout() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact-number">
            Contact number
          </label>
          <input
            id="contact-number"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your contact number"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <select
            id="state"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Maharashtra</option>
            {/* Add more states here */}
          </select>
        </div>
        <div className="mb-6">
          <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
            <img src="https://img.icons8.com/color/48/000000/phonepe.png" alt="PhonePe" className="w-6 h-6 mr-2" />
            PhonePe
          </button>
        </div>
        <div className="border-t pt-4">
          <h2 className="text-lg font-bold mb-2">Order Summary</h2>
          <div className="flex items-center mb-4">
            <img src="https://via.placeholder.com/50" alt="Event" className="w-12 h-12 rounded mr-4" />
            <div>
              <h3 className="text-sm font-bold">Kisi Ko Batana Mat Ft. Anubhav Singh Bassi</h3>
              <p className="text-sm text-gray-600">Venue: CIDCO exhibition centre auditorium, Vashi, Navi Mumbai</p>
              <p className="text-sm text-gray-600">Sat, 8 Jun, 2024 07:00 PM</p>
            </div>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Ticket:</span>
            <span>₹799</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Booking fee:</span>
            <span>₹59</span>
          </div>
          <div className="flex justify-between text-lg font-bold mb-4">
            <span>Total:</span>
            <span>₹858</span>
          </div>
          <button className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded hover:bg-green-700 focus:outline-none focus:shadow-outline">
            Pay now
          </button>
        </div>
      </div>
    </div>


    </>
  )
}

export default EventCheckout