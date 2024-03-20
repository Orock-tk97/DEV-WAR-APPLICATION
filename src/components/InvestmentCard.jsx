import React from 'react';

export const InvestmentCard = ({ imageSrc, heading, subheading, raisedAmount, numInvestors, minInvestment }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt="Investment Card Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{heading}</h3>
        <p className="text-gray-600 mb-2">{subheading}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500">Money Raised</span>
            <span className="font-bold">{raisedAmount}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500">Investors</span>
            <span className="font-bold">{numInvestors}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-gray-500">Min. Investment</span>
            <span className="font-bold">{minInvestment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


