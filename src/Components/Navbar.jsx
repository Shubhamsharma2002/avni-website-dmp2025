import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../assets/Image/avni-logo-color.png";
import { TiThMenu, TiTimes } from "react-icons/ti";
import ResourceDropdown from "./ResourceDropdown";
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
          <NavLink
            to="/features"
            className={({ isActive }) =>
              `block  duration-200 font-bold ${
                isActive ? "text-orange-700" : "text-blue-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
            }
          >
            Features
          </NavLink>
          <NavLink
            to="/demo"
            className={({ isActive }) =>
              `block  duration-200 font-bold ${
                isActive ? "text-orange-700" : "text-blue-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
            }
          >
            Demo
          </NavLink>{" "}
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `block  duration-200 font-bold ${
                isActive ? "text-orange-700" : "text-blue-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block  duration-200 font-bold ${
                isActive ? "text-orange-700" : "text-blue-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
            }
          >
            About
          </NavLink>
          <ResourceDropdown/>
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
          {menu ? (
            <TiTimes
              className="text-red-900 w-8 h-8 cursor-pointer"
              onClick={() => setMenu(false)}
            />
          ) : (
            <TiThMenu
              className="text-black w-8 h-8 cursor-pointer"
              onClick={() => setMenu(true)}
            />
          )}
        </div>
        <div
          className={`flex flex-col absolute items-center top-full left-0 w-full bg-white p-6 gap-6 xl:hidden transition-all duration-300 ease-in-out ${
            menu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center">
            <NavLink
              onClick={() => setMenu(false)}
              to="/features"
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Features
            </NavLink>
            <NavLink
              onClick={() => setMenu(false)}
              to="/demo"
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Demo
            </NavLink>
            <NavLink
              onClick={() => setMenu(false)}
              to="/pricing"
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Pricing
            </NavLink>
            <NavLink
              onClick={() => setMenu(false)}
              to="/about"
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              About
            </NavLink>
            <small className="text-red-500 underline font-semibold">Resource</small>
            <NavLink
              to="/resource/blog"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/resource/guides"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Guides
            </NavLink>
            <NavLink
              to="/resource/webinars"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Webinars
            </NavLink>
            <NavLink
              to="/resource/help-center"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block  duration-200 font-bold ${
                  isActive ? "text-orange-700" : "text-blue-700"
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-400 `
              }
            >
              Help Center
            </NavLink>
          </div>
          <div className="flex flex-col  justify-center items-center gap-3">
            <p
              onClick={() => setMenu(false)}
              className=" px-4 py-1 border-2 rounded-md border-blue-500 "
            >
              Login
            </p>
            <p
              onClick={() => setMenu(false)}
              className="border-2 border-blue-300 rounded-md px-3 py-1 cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              Try Avni
            </p>
            <p
              onClick={() => setMenu(false)}
              className="border-2 border-red-500 bg-red-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:border-2 hover:border-blue-400 text-white cursor-pointer"
            >
              Schedule Demo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
