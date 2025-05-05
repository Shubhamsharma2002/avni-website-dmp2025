import React from 'react';

const Minicard = ({ heading, para }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm mt-5">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">{heading}</h2>
      <p className="text-sm text-gray-600">{para}</p>
    </div>
  );
};

export default Minicard;
