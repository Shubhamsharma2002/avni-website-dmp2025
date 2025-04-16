import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/Image/avni-logo-color.png"
const Navbar = () =>{
    const [menu,setMenu] = useState(false)
     return(
        <>
              <div className="flex justify-around text-black py-6 px-8  md:px-32 bg-white drop-shadow-md">
                       <div>
                        <img src={Logo}  style={{ width: '100px',  cursor:'pointer'}} alt="Logo"/>
                       </div>
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
                       <FaBars  onClick={() => setMenu(!menu)}/>
                       </div>
                      
                       <div className={`flex flex-col absolute items-center top-full left-0 w-full bg-white p-6 gap-6 xl:hidden transition-all duration-300 ease-in-out ${menu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4  pointer-events-none' }`}>
                            <p>hh</p>
                            <p>hhh</p>
                            <p>hhhh</p>
                           </div>
                       
       
    
              </div>
        </>
     )
}

export default Navbar;