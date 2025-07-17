
import React from "react";

const TermsofUse = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12 xl:px-24 py-16">
      <h1 className="text-4xl font-semibold text-black mb-4">
        Terms of Use – Zahrix Electromechanical Services
      </h1>
      <p className="text-md text-black mb-8 font-semibold">
        Effective Date: 12/07/25 
      </p>
      <p className="text-xl font-semibold mb-4 text-black">
        Welcome to ZAHRIX Electromechanical service's website. By accessing or
        using our website, you agree to bound by the following Terms of Use.
        Please Read them carefully.
      </p>

      <section className="space-y-6 text-gray-800 leading-relaxed">
        <div>
          <h2 className="text-4xl font-semibold mb-4 text-black">
            Acceptance of Terms of Use
          </h2>
          <p className="text-2xl text-black">
            By accessing and using the ZAHRIX Electromechanical Services
            Website, You agree to follow our Terms of Use. Zahrix provides
            information related to services including CCTV installation,
            Building Management Systems(BMS) and electrical works. All content
            on this website - such as service details, logos, and images- is the
            property of Zahrix and maynot be copied or used without permission.
            Users must not misuse the website by uploading harmful content,
            attempting unauthorized access, or disrupting website funcionality.
            Zahrix is not responsible for third party websites linked here. The
            information provided is for general purposes and maybe updated
            without prior notice. Zahrix is not liable for any direct or
            indirect losses from using the website. By continuing to use our
            site, you accept these terms under the governing laws of [Your
            Country/State]. For questions, please contact Zahrix
            Electromechanical Services. Zahrix Electromechanical Services does
            its best to ensure the accuracy and reliablity of the information on
            this website. However we do not gurantee that all content is always
            complete, correct or up-to date. Zahrix shall not held responsible
            for any direct, indirect, accidental or consequentials damages
            caused by using or being unable to use this website. This includes
            any lossess related to service details, pricing, or third-party
            websites links included for reference.Visitors use the Zahrix
            website at their own risk . Zahrix reserves the rights to change,
            remvoe or update any content without prior notice. By accessing,
            browsing , or using the Zahrix Electromechanical Services Website,
            you acknowledge that you have read, understood, and agreed to be
            bound by these Terms of Use. These Terms apply to all visitors,
            users, and others who access the website, whether the information,
            service inquiries, or any other purposes. if you do not agree with
            any part of the terms, you must not use this website. Zahrix
            reserves the rights to update or change any of these terms at any time and it's the users responsibility to review them periodically. Continued use of the
            website after changes are posted will mean that you accept and agree
            to the changes.
          </p>
        </div>
        <button
          className="inline-flex items-center px-6 py-3 mx-4 bg-[#4B69A9] text-white font-medium hover:bg-blue-700 transition shadow"
        >
          Accept
        </button>
          <button
          className="inline-flex items-center px-6 py-3 mx-4 border-gray-100 bg-white text-[#4B69A9] font-medium transition shadow"
        >
          Decline
        </button>
      </section>
    </div>
  );
};

export default TermsofUse;
