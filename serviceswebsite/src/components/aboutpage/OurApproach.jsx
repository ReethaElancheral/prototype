import { MdGroups } from "react-icons/md";
import missionIcon from "../../assets/images/cctv.png";
import approachImage from "../../assets/images/homeabtsub.png";

const OurApproach = () => {
  return (
   <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
    {/* Left Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={approachImage}
        alt="Approach Image"
        className="rounded-t-[20px] w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md object-cover"
      />
    </div>

    {/* Right Text Content */}
    <div className="w-full md:w-1/2">
      {/* Heading */}
      <div className="flex items-center mb-2">
        <svg
          className="w-5 h-5 text-[#4B69A9] mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M13 7h7l-9 13v-9H4l9-13z" />
        </svg>
        <h3 className="text-sm sm:text-base font-bold text-black uppercase tracking-wide">
          Our Approach
        </h3>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4B69A9] mb-8">
        Powering Communities With Safe <br className="hidden md:block" />
        & Reliable Solutions
      </h2>

      {/* Mission Card */}
      <div className="bg-white rounded-[20px] border-2 border-gray-300 shadow-md p-5 sm:p-6 mb-6 w-full">
        <div className="flex items-center gap-4 mb-4">
          <img src={missionIcon} alt="Mission Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
          <h4 className="text-lg sm:text-xl font-semibold text-black">Our Mission</h4>
          <MdGroups className="ml-auto text-gray-500 text-lg" />
        </div>
        <p className="text-[#4B69A9] text-sm sm:text-base font-semibold leading-relaxed">
          "To deliver high-quality electrical services that ensure safety, efficiency, and customer satisfaction,
          while building long-term relationships and contributing to the well-being of our community."
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-white rounded-[20px] border-2 border-gray-300 shadow-md p-5 sm:p-6 w-full">
        <div className="flex items-center gap-4 mb-4">
          <img src={missionIcon} alt="Mission Icon" className="w-12 h-12 sm:w-16 sm:h-16" />
          <h4 className="text-lg sm:text-xl font-semibold text-black">Our Vision</h4>
        </div>
        <p className="text-[#4B69A9] text-sm sm:text-base font-semibold leading-relaxed">
          "To be the leading provider of innovative electrical solutions, exceeding customer expectations and
          setting new standards for excellence in the industry."
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default OurApproach;
