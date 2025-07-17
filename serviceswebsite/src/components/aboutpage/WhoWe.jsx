import React from "react";
import abtmainImage from "../../assets/images/aboutmainimg.png";
import abtsubImage from "../../assets/images/aboutsubimg.png";
import lightningIcon from "../../assets/images/boltsymbol.png";

const WhoWe = () => {
  return (
    <section className="bg-gray-50 w-full py-16 px-4 md:px-10 lg:px-20 mb-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Right Text Section */}
        <div className="flex-1 w-full">
          {/* Section Heading */}
          <div className="flex items-center gap-2 mb-2">
            <img src={lightningIcon} alt="Lightning Icon" className="w-5 h-5" />
            <h2 className="text-xl font-bold uppercase">Who We Are </h2>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-[#4B69A9] leading-snug mb-4">
            Trusted Experts in Electrical Services
          </h1>

          <p className="text-gray-700 font-semibold mb-6 text-md">
            At ZAHRIX, we're the trusted experts in electrical services. With
            Years of experience and a team of skilled professionals, we deliver
            top notch elecrical solutions for homes and businesses. Our
            expertise spans electrical installations, repairs and maintenance,
            ensuring your safety and satisfication. We're commited to providing
            exceptional service, transparancy and reliablitiy. Our goal is to
            build long term relationship with our clients, providing them with
            peace of mind and efficient electrical systems. with ZAHRIX, you can
            trust your electrical needs are in good hands.
          </p>
        </div>

        {/* Left Image Section */}
        <div className="relative flex-1 w-full flex justify-center items-center">
          <div className="relative">
            {/* Main Image */}
            <img
              src={abtmainImage}
              alt="Engineer Working"
              className="relative z-0 rounded-md shadow-md w-full max-w-sm "
            />

            {/* Sub Image: half overlapping */}
            <img
              src={abtsubImage}
              alt="Worker Closeup"
              className="absolute left-[-30%] top-[85%] transform -translate-y-1/2 w-40 md:w-60 h-60 rounded-md border-4 border-white shadow-md z-10 float-in-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
