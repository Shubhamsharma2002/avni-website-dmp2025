
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
         <div className="flex flex-col items-center max-w-5xl mx-auto bg-amber-200 mt-10 p-6">
  <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6 mb-4">
    In-house data collection applications are unsustainable
  </h1>

  <p className="text-center px-4 mb-4 max-w-3xl">
    While development of in-house data collection applications may seem feasible and even exciting in the beginning, they become difficult to sustain for most NGOs. We have come across these situations many times, and that is partly the reason we developed Avni.
  </p>

  <p className="text-center px-4 mb-4 max-w-3xl">
    Organisations’ requirements both increase and evolve significantly over time. This demands constant improvements to the software, and hence regular funding. It is difficult to retain software developers after the initial development phase, so after early success, NGOs often struggle.
  </p>

  <p className="text-center px-4 mb-4 max-w-3xl">
    Avni has effectively utilised extremely scarce philanthropic resources to create a shared software platform. As a result, it offers a comprehensive tool to all non-profit organisations. As this platform evolves—with added or improved features—it becomes available for free to organisations already using it.
  </p>

  <h1 className="text-center font-bold text-xl sm:text-2xl mt-6">
    Avni makes your digital transformation sustainable
  </h1>
</div>

        <ContactForm/> 
         </>
    )
}

export default Homepage