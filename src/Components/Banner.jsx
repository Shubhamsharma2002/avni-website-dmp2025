import React from 'react';
import bannerImage from '../assets/Image/Banner.webp';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
     
      <img
        src={bannerImage}
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      
      <div className="absolute inset-0  bg-opacity-40 " />

      
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
          Community service and data collection platform for non-profits
        </h1>
        <p className="text-lg md:text-2xl text-white mb-3 font-medium">
          Designed to work for all sectors
        </p>
        <p className="text-white mb-6">
          Health, Education, Sanitation, Water, Waste, Agriculture, Social Security.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 border-2 border-white hover:bg-red-300 font-semibold rounded bg-white text-black transition">
            Try for free
          </button>
          <button className="px-6 py-2 bg-red-600 text-black font-semibold rounded hover:bg-gray-200 transition">
           Schedule demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
