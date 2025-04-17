import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoPlayStore } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white flex flex-col justify-center items-center text-center font-bold px-4 py-8 mt-5 space-y-4">
        
        {/* Text */}
        <div className="text-sm sm:text-base max-w-md lg:max-w-none lg:whitespace-nowrap">
  Avni is a fully open-source project run by a{' '}
  <span className="text-blue-800 cursor-pointer hover:text-black">
    small technology non-profit
  </span>
</div>
  
        {/* Social Icons */}
        <div className="flex gap-6 sm:gap-8 items-center justify-center text-xl">
          <Link to="https://github.com/avniproject" aria-label="GitHub">
            <FaGithub className="text-black hover:scale-110 transition-transform duration-200" size={24} />
          </Link>
          <Link to="https://www.linkedin.com/showcase/avniproject/" aria-label="LinkedIn">
            <FaLinkedin className="text-[#0A66C2] hover:scale-110 transition-transform duration-200" size={24} />
          </Link>
          <Link to="https://play.google.com/store/apps/details?id=com.openchsclient" aria-label="Playstore">
              <BiLogoPlayStore className="text-green-300" size={20}/>
          </Link>
          <Link to="https://www.youtube.com/channel/UCShsfKJlw0B3B6Pg2DmQkSQ" aria-label="YouTube">
            <IoLogoYoutube className="text-red-500 hover:scale-110 transition-transform duration-200" size={24} />
          </Link>
        </div>
  
      </div>
    );
  };

export default Footer;