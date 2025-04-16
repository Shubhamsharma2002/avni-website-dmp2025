import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router";

import Logo from "../assets/Image/avni-logo-color.png"
const Navbar = () =>{
    const [menu,setMenu] = useState(false)
     return(
        <>
              <div className="flex justify-around text-black py-6 px-8  md:px-32 bg-white drop-shadow-md">
                       <div>
                        <Link to="/">
                        <img src={Logo}  style={{ width: '100px',  cursor:'pointer'}} alt="Logo"/>
                        </Link>
                       </div>
                       <div className="hidden xl:flex gap-12 ">
                          <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1">Features</Link>
                          <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1 ">Demo</Link>
                          <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1">Pricing</Link>
                          <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1 ">About</Link>
                          <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1">Resources</Link>
                       </div>
                       <div className=" hidden xl:flex  gap-12">
                          <p className=" px-3 py-1">Login</p>
                          <p className="border-2 border-blue-300 rounded-md px-3 py-1 cursor-pointer hover:bg-blue-500 hover:text-white">Try Avni</p>
                          <p className="border-2 border-red-500 bg-red-500 rounded-md px-3 py-1 hover:bg-blue-500 hover:border-2 hover:border-blue-400 text-white cursor-pointer">Schedule Demo</p>
                       </div>

                       <div className="block xl:hidden cursor-pointer">
                       <FaBars  onClick={() => setMenu(!menu)}/>
                       </div>
                      
                      <div className={`flex flex-col absolute items-center top-full left-0 w-full bg-white p-6 gap-6 xl:hidden transition-all duration-300 ease-in-out ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4  pointer-events-none' }`}>
                            <div className="flex flex-col items-center">
                            <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1">Features</Link>
                            <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1 ">Demo</Link>
                            <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1">Pricing</Link>
                            <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1 ">About</Link>
                            <Link className="cursor-pointer hover:border-2 border-blue-400 rounded-md  transition-all duration-200 p-1">Resources</Link>
                            </div>
                            <div>
                              djhs
                            </div>
                      </div>
                       
       
    
              </div>
        </>
     )
}

export default Navbar;