import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import Logo from "../assets/Image/avni-logo-color.png";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="flex justify-around text-black py-6 px-8  md:px-32 bg-white relative">
        <div>
          <Link to="/">
            <img
              src={Logo}
              style={{ width: "100px", cursor: "pointer" }}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hidden xl:flex gap-12 ">
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline font-bold">
            Features
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline font-bold">
            Demo
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline font-bold">
            Pricing
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline font-bold">
            About
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline font-bold">
            Resources
          </Link>
        </div>
        <div className=" hidden xl:flex  gap-12">
          <p className=" px-4 py-1 border-2 rounded-md border-blue-500 ">
            Login
          </p>
          <p className="border-2 border-blue-300 rounded-md px-3 py-1 cursor-pointer hover:bg-blue-500 hover:text-white">
            Try Avni
          </p>
          <p className="border-2 border-red-500 bg-red-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:border-2 hover:border-blue-400 text-white cursor-pointer">
            Schedule Demo
          </p>
        </div>
        <div className="block xl:hidden cursor-pointer">
          <FaBars onClick={() => setMenu(!menu)} />
        </div>
        <div
          className={`flex flex-col absolute items-center top-full left-0 w-full bg-white p-6 gap-6 xl:hidden transition-all duration-300 ease-in-out ${
            menu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center">
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline text-blue-300 font-semibold">
            Features
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline text-blue-300 font-semibold">
            Demo
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline text-blue-300 font-semibold">
            Pricing
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline text-blue-300 font-semibold">
            About
          </Link>
          <Link className="cursor-pointer  hover:text-blue-400  hover:underline text-blue-300 font-semibold">
            Resources
          </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
          <p className=" px-4 py-1 border-2 rounded-md border-blue-500 ">
            Login
          </p>
          <p className="border-2 border-blue-300 rounded-md px-3 py-1 cursor-pointer hover:bg-blue-500 hover:text-white">
            Try Avni
          </p>
          <p className="border-2 border-red-500 bg-red-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:border-2 hover:border-blue-400 text-white cursor-pointer">
            Schedule Demo
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
