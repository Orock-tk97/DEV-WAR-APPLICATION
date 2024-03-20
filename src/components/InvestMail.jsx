
import React, { useState } from 'react';

export const InvestMail = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    // Add your actual logic for submitting the email address (e.g., email marketing service integration)
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center rounded-lg bg-gray-200 shadow-md px-8 py-4 mr-4">
        <h2 className="text-xl font-bold text-center">Get investment opportunities straight into your inbox</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleInputChange}
          className="rounded-lg px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[200px]"
        />
        <button type="submit" className="px-4 py-2 h-[50px] w-[150px] bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-700">
          Yes, please
        </button>
      </form>
    </div>
  );
};



