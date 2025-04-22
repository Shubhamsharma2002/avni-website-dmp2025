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
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded p-2 z-50">
          <NavLink
            to="/resource/blog"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Blog
          </NavLink>
          <NavLink
            to="/resource/guides"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Guides
          </NavLink>
          <NavLink
            to="/resource/webinars"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Webinars
          </NavLink>
          <NavLink
            to="/resource/help-center"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Help Center
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default ResourceDropdown;
