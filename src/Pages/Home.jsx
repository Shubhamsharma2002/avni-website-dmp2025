
import React from "react";
import ContactForm from "../Components/ContactForm";
import Card from "../Components/Card";
import folderlogo from "../assets/Image/Folderlogo.png"
import work from "../assets/Image/work.png"
import report from "../assets/Image/report.png"
import form from"../assets/Image/form.png"
import cloud from"../assets/Image/cloud.png"
import custo from "../assets/Image/custo.png"
import patform from"../assets/Image/patform.png"
import support from "../assets/Image/support.png"
const Homepage = () =>{
    return(
         <>
         <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-4">Comprehensive platform</h1>
         <div className="flex justify-evenly flex-wrap  max-w-5xl mx-auto ">
           <Card img={folderlogo} heading="Case Management" para="Create rich data formats. Manage beneficiaries, families, households, groups, anything."/>
           <Card img={form} heading="Form Designer" para="Design your forms and your own algorithmic decision support."/>
           <Card img={report} heading="Reports and Dashboard" para="Get insights into your program and share them."/>
           <Card img={work} heading="Work diary" para="our fieldworkers will never miss any activity or their client interaction."/>
         </div>
         <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6">All services you require</h1>
         <div className="flex justify-evenly flex-wrap  max-w-5xl mx-auto ">
           <Card img={cloud} heading="Cloud hosting" para="Secured and affordable hosting. Full control of your data (include full extract, delete)."/>
           <Card img={custo} heading="Customisation" para="Platform customisation for your project. Integration with other software. Data migration."/>
           <Card img={patform} heading="Platform training" para="Get trained to do full customisation yourself."/>
           <Card img={support} heading="Technical support" para="Annual maintenance support for your customisations and integrations."/>
         </div>
        <ContactForm/> 
         </>
    )
}

export default Homepage