
import React from "react";
import ContactForm from "../Components/ContactForm";
import Card from "../Components/Card";

const Homepage = () =>{
    return(
         <>
         
         <div className="flex justify-evenly flex-wrap ">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
         </div>
        <ContactForm/> 
         </>
    )
}

export default Homepage