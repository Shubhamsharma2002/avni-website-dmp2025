import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () =>{
     return(
        <>
              <div className="flex justify-around text-black py-6 px-8  md:px-32 bg-white drop-shadow-md">
                       <div>log</div>
                       <div className="hidden xl:flex gap-12">
                          <p>hhh</p>
                          <p>hhh</p>
                          <p>hhh</p>
                          <p>hhh</p>
                       </div>
                       <div className=" hidden xl:flex  gap-12">
                          <p>bb</p>
                          <p>bb</p>
                       </div>

                       <div className="block xl:hidden cursor-pointer">
                       <FaBars />
                       </div>
              </div>
        </>
     )
}

export default Navbar;