import React from "react";

const Demo = () => {
  return (
    <div className="border-2 border-blue-600 mx-auto max-w-4xl p-6 rounded-md">
      <h2 className="font-bold text-3xl mb-6 text-center">Demo</h2>
      
      {/* Left-aligned section starts here */}
      <div>
        <h3 className="font-bold text-2xl mb-4">
          Install the app from Android Play Store
        </h3>
        <p>
          On your Android device, go to Play Store, search for <strong>Avni</strong>,
          and install the field app. You can also use this link from your mobile.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl mb-4">
        System administration app
        </h3>
        <p>
        For administration app in your browser go to https://app.avniproject.org and use login details for maternal and child health demo given below.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-2xl mb-4">
        Reporting and dashboard capability
        </h3>
        <p>
        Avni uses metabase for reporting, analytics and dashboards. You can learn more about metabase here or checkout Avni's own dashboard which has been created using metabase.
        </p>
      </div>
    </div>
  );
};

export default Demo;
