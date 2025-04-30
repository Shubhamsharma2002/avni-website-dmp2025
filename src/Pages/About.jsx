import React from "react";
import ContactForm from "../Components/ContactForm";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className=" max-w-3xl mx-auto mt-7 px-4">
      <h3 className=" font-bold text-2xl mb-4">About the Project</h3>
        <p className=" text-gray-700">
         <span className="font-bold">Avni Project</span>, previously called "OpenCHS (Open Community Health System)", started in mid-2016 as an open-source community health worker platform designed to aid programs operating below primary health center level — i.e., sub-center, village, and slum level. It has since matured into a platform that can support most field work use cases, not just health. Avni is now implemented for water, social welfare services, educational outcome assessment, and health. Avni (अवनि, અવની, ਅਵਨੀ, அவ்னி, అవనీ, ಅವ್ನಿ) means "earth" in Hindi.
        </p>
      </div>
      <div className=" max-w-3xl mx-auto mt-7 px-4">
      <h3 className=" font-bold text-2xl mb-4">Team</h3>
        <p className=" text-gray-700">
         <span className="font-bold">avni</span> is developed by a team experienced in applying technology in the public and health from Samanvay Foundation and development efforts are funded by <Link href="https://www.socialalpha.org/"> Social  Alpha </Link>and Project Tech4Dev (Chintu Gudiya Foundation). Recently Soft Corner and Persistent Systems have also joined the product development efforts with Samanvay.
        </p>
      </div>

      <div className="mt-10">
        <ContactForm />
      </div>
    </>
  );
};

export default About;
