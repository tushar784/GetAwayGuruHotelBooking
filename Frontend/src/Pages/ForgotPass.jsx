import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import Navbar from '../components/Navbar';

const ForgotPass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your forgot password logic here
    console.log('Email:', email);
  };

  return (
    <>
    <Navbar />
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md h-[22rem] w-[22rem]">
      <Link to='/'>
            <img src={logo} alt=""
            className="md:h-14 md:w-22 h-10 ml-[2rem] mb-2" />
          </Link>
        <h2 className="text-xl font-bold mb-4 ">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-2 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#90CCBA] hover:bg-[#46c79f] text-white px-4 py-2 rounded-md transition-colors duration-300 w-[19rem]"
          >
            Submit
          </button>
        </form>
        <p className="mt-4">
          <a href="/login" className="text-blue-500 hover:text-blue-700">
            Back to Login
          </a>
        </p>
      </div>
    </div>
    </>
  );
};

export default ForgotPass;