import React from "react";

const Demo = () => {
  return (
    <>
      <div className="border-2 border-blue-600 mx-auto max-w-4xl p-6 rounded-md">
        <h2 className="font-bold text-3xl mb-6 text-center">Demo</h2>

        {/* Left-aligned section starts here */}
        <div>
          <h3 className="font-bold text-2xl mb-4">
            Install the app from Android Play Store
          </h3>
          <p>
            On your Android device, go to Play Store, search for{" "}
            <strong>Avni</strong>, and install the field app. You can also use
            this link from your mobile.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4">System administration app</h3>
          <p>
            For administration app in your browser go to
            https://app.avniproject.org and use login details for maternal and
            child health demo given below.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4">
            Reporting and dashboard capability
          </h3>
          <p>
            Avni uses metabase for reporting, analytics and dashboards. You can
            learn more about metabase here or checkout Avni's own dashboard
            which has been created using metabase.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-4">
            About the demo and login details
          </h3>
          <p>
            See below the logins that you can use in the app. These demos are
            inspired from real implementations of Avni, created to demonstrate
            flexibility and most features of the platform.
          </p>
        </div>
      </div>
      <div className="font-bold text-3xl mb-6 text-center mt-5">Demo login</div>
      <div className="border-2 flex flex-wrap justify-around border-blue-600 mx-auto max-w-4xl p-6 rounded-md">
        <div className="border border-blue-400 rounded-md p-1 mt-2  w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Track the progress of silt excavation from water bodies</h1>
           <div className="text-center text-gray-950 ">
           <p >Field app</p>
          <p>User=demo@wbd</p>
          <p>Password=password</p>
           </div>
        </div>
        <div className="border border-blue-400 rounded-md p-1 mt-2 w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Social security facilitation</h1>
          <div className="text-center text-gray-950 ">
          <p>Field app</p>
          <p>User=demo@ssdemo</p>
          <p>Password=password</p>
          </div>
        </div>
        <div className="border border-blue-400 rounded-md p-1 mt-2 w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Teacher development program</h1>
          <div className="text-center text-gray-950 ">
          <p>Field app</p>
          <p>User=demo@teachdemo</p>
          <p>Password=password</p>
          </div>
        </div>
        <div className="border border-blue-400 rounded-md p-1 mt-2 w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Community program-Phulwari</h1>
          <div className="text-center text-gray-950 ">
          <p>Field app</p>
          <p>User=phulwari-user@cpdemo</p>
          <p>Password=password</p>
          </div>
        </div>
        <div className="border border-blue-400 rounded-md p-1 mt-2 w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Non Communicable Disease control program</h1>
          <div className="text-center text-gray-950 ">
          <p>Field app</p>
          <p>User=ncd-user@cpdemo</p>
          <p>Password=password</p>
          </div>
        </div>
        <div className="border border-blue-400 rounded-md p-1 mt-2 w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Pregnancy & child nutrition program</h1>
          <div className="text-center text-gray-950 ">
            <p>Field app</p>
          <p>User=preg-child@cpdemo</p>
          <p>Password=password</p>
          </div>
        </div>
        <div className="border border-blue-400 rounded-md p-1 mt-2 w-64 min-h-[100px]">
          <h1 className="font-semibold text-center text-blue-700">Waste management program</h1>
          <div className="text-center text-gray-950 "><p>Field app</p>
          <p>User=demo@wmdemo</p>
          <p>Password=password</p></div>
        </div>
      </div>
    </>
  );
};

export default Demo;
