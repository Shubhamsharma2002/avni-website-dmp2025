import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

const ResourceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Timeout variable to delay dropdown closing
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button className="flex items-center font-bold text-blue-700 hover:text-blue-400">
        Resource <FiChevronDown className="ml-1" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-2 mt-2 bg-white shadow-lg rounded p-5 z-20">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Event
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
           Getting Started
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
           FAQ 
          </NavLink>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Blog
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ResourceDropdown;
