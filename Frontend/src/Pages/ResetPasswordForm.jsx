import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpg";


const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <>
    <Navbar />
<div className="bg-slate-200 min-h-screen flex items-center justify-center">
    <div className="max-w-md  mx-auto p-6 bg-white p-6 rounded-md shadow-md h-[25rem] w-[25rem]">
    <Link to='/'>
            <img src={logo} alt=""
            className="md:h-14 md:w-22 h-10 ml-[2rem] mb-2" />
          </Link>
      <h2 className="text-xl font-semibold mb-6">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#90CCBA] hover:bg-[#46c79f] text-white px-4 py-2 rounded-md transition-colors duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
    </div>
    </>
  );
};

export default ResetPasswordForm;