import React from 'react';

function ThankyouPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto 	 px-4">
        <div className="flex flex-col w-full items-center">
          <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-30 w-30 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-7xl font-bold mt-8 mb-4">Thank you!</h1>
          <p className="text-gray-600 text-2xl text-center leading-relaxed">
            Your hotel booking has been confirmed!<br />
"Thank you for choosing us for your stay! We’re thrilled to be a part of your journey <br />and can’t wait to make your experience unforgettable. 🌟💖"
    </p>
        </div>
      </div>
    </div>
  );
}

export default ThankyouPage;
