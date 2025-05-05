import React from 'react';

const Card = ({ img, heading, para }) => {
  return (
    <div className="w-60 h-70 bg-amber-200 mt-2 border-amber-400 p-4 rounded-md shadow-md flex flex-col items-center">
      <img
        src={img}
        alt={heading || 'Card image'}
        className=" h-25 object-cover mb-4 rounded"
      />
      <h1 className="font-semibold text-lg mb-2 text-center">{heading}</h1>
      <p className="text-gray-700 text-sm text-center">{para}</p>
    </div>
  );
};

export default Card;
