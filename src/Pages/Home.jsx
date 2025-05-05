import React from "react";
import ContactForm from "../Components/ContactForm";
import Card from "../Components/Card";
import folderlogo from "../assets/Image/Folderlogo.png";
import work from "../assets/Image/work.png";
import report from "../assets/Image/report.png";
import form from "../assets/Image/form.png";
import cloud from "../assets/Image/cloud.png";
import custo from "../assets/Image/custo.png";
import patform from "../assets/Image/patform.png";
import support from "../assets/Image/support.png";
import Minicard from "../Components/Minicard";
import Profilecard from "../Components/Profilecard";
import cofounder from "../assets/Image/cofounder.webp";
import Drshobha from "../assets/Image/Drshobha.webp";
import unicef from "../assets/Image/unicef.png";
import ihmp from "../assets/Image/ihmp.png";
import phsg from "../assets/Image/phsg.webp";
import sewa from "../assets/Image/sewa.jpeg";
import yen from "../assets/Image/yen.png";
import Banner from "../Components/Banner";
const Homepage = () => {
  return (
    <>
     
      <div className=" w-full">
        <Banner/>
      </div>
    
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-4">
        Comprehensive platform
      </h1>
      <div className="flex justify-evenly flex-wrap  max-w-5xl mx-auto ">
        <Card
          img={folderlogo}
          heading="Case Management"
          para="Create rich data formats. Manage beneficiaries, families, households, groups, anything."
        />
        <Card
          img={form}
          heading="Form Designer"
          para="Design your forms and your own algorithmic decision support."
        />
        <Card
          img={report}
          heading="Reports and Dashboard"
          para="Get insights into your program and share them."
        />
        <Card
          img={work}
          heading="Work diary"
          para="our fieldworkers will never miss any activity or their client interaction."
        />
      </div>
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6">
        All services you require
      </h1>
      <div className="flex justify-evenly flex-wrap  max-w-5xl mx-auto ">
        <Card
          img={cloud}
          heading="Cloud hosting"
          para="Secured and affordable hosting. Full control of your data (include full extract, delete)."
        />
        <Card
          img={custo}
          heading="Customisation"
          para="Platform customisation for your project. Integration with other software. Data migration."
        />
        <Card
          img={patform}
          heading="Platform training"
          para="Get trained to do full customisation yourself."
        />
        <Card
          img={support}
          heading="Technical support"
          para="Annual maintenance support for your customisations and integrations."
        />
      </div>
      <div className="flex flex-col items-center max-w-5xl mx-auto bg-amber-200 mt-10 p-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6 mb-4">
          Transform your project from paper/excel based to digital
        </h1>
        <Minicard
          heading="1. Schedule a demo / discussion with us"
          para="We demonstrate the product to you. Explain your project's needs and organisation's in-house capacity."
        />
        <Minicard
          heading="2. Decide the services you require"
          para="Use your own technical & program resources for customisation (if available). Use our services for everything else."
        />
        <Minicard
          heading="3. Platform customisation"
          para="We work together as one team in performing all the required customisations. We train your team during customisation work."
        />
        <Minicard
          heading="4. Begin your fieldwork transformation!!"
          para="We bring our experience from other projects and provide technical support to make you successful."
        />
        <button className="text-center mt-3 bg-red-500 p-3 text-white font-bold rounded-md cursor-pointer">
          Schedule Demo
        </button>
      </div>
      <div className=" items-center max-w-5xl mx-auto  mt-10 p-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6 mb-4 underline">
          Avni testimonials
        </h1>
        <Profilecard
          img={cofounder}
          content="Earlier our health workers used to bring their paper records to the MIS data entry person. Now with Avni - our health workers manage the data in the field, make monthly data presentation themselves, and have gained even more respect in the community. We have seen transformational empowerment. Our health workers love Avni."
          detail="Noah Levinson, Co-founder,"
          text="Calcutta Kids"
          goto="https://www.calcuttakids.org/"
        />
        <Profilecard
          img={Drshobha}
          content="Our adolescent program data used to sit in registers and excel. Because of Avni analytics, we uncovered vulnerable adolescents having different problems. Somewhere high-risk behaviour, while others with high levels of anaemia, much poorer menstrual hygiene practices, sickle cell disease, skin diseases, and so on. Avni has helped us address the most pressing problems of our clients. Our supervisors are now able to schedule their fieldwork more effectively."
          detail="Dr Shobha Shah and Maitri Vayeda,"
          text="Sewa Rural"
          goto="https://sewarural.org/"
        />
      </div>
      <div className="items-center max-w-5xl mx-auto mt-10 p-6">
  <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6 mb-8 underline">
    Avni is trusted by
  </h1>
  
  <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
    <img src={unicef} alt="unicef logo" className="w-32 h-auto object-contain" />
    <img src={sewa} alt="sewa logo" className="w-32 h-auto object-contain" />
    <img src={ihmp} alt="ihmp logo" className="w-32 h-auto object-contain" />
    <img src={yen} alt="yen logo" className="w-32 h-auto object-contain" />
    <img src={phsg} alt="phsg logo" className="w-32 h-auto object-contain" />
  </div>

  <div className="flex justify-center gap-4">
    <button className="px-6 py-2 border-2 border-amber-500 text-amber-700 font-semibold rounded hover:bg-amber-100 transition">
      Case studies
    </button>
    <button className="px-6 py-2 border-2 border-amber-500 text-amber-700 font-semibold rounded hover:bg-amber-100 transition">
      All Projects
    </button>
  </div>
</div>

      <div className="flex flex-col items-center max-w-5xl mx-auto bg-amber-200 mt-10 p-6">
        <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-6 mb-4">
          In-house data collection applications are unsustainable
        </h1>

        <p className="text-center px-4 mb-4 max-w-3xl">
          While development of in-house data collection applications may seem
          feasible and even exciting in the beginning, they become difficult to
          sustain for most NGOs. We have come across these situations many
          times, and that is partly the reason we developed Avni.
        </p>

        <p className="text-center px-4 mb-4 max-w-3xl">
          Organisations’ requirements both increase and evolve significantly
          over time. This demands constant improvements to the software, and
          hence regular funding. It is difficult to retain software developers
          after the initial development phase, so after early success, NGOs
          often struggle.
        </p>

        <p className="text-center px-4 mb-4 max-w-3xl">
          Avni has effectively utilised extremely scarce philanthropic resources
          to create a shared software platform. As a result, it offers a
          comprehensive tool to all non-profit organisations. As this platform
          evolves—with added or improved features—it becomes available for free
          to organisations already using it.
        </p>

        <h1 className="text-center font-bold text-xl sm:text-2xl mt-6">
          Avni makes your digital transformation sustainable
        </h1>
      </div>

      <ContactForm />
    </>
  );
};

export default Homepage;
