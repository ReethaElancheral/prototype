import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import leftImage from "../../assets/images/ourproject1.png";
import centerImage from "../../assets/images/homeourproject2.png";
import rightImage from "../../assets/images/homeserviceimg.png";
import learnIcon from "../../assets/images/learnarrow.png";

const ProjectElectrical = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-2xl font-semibold text-black mb-6">
        OUR PROJECTS ⚡
      </h2>
      <h2 className="text-2xl md:text-3xl font-semibold text-[#4B69A9] mb-12">
        Electric Solutions for a Brighter Tomorrow
      </h2>


<div className="bg-gray-100 py-12">
       <h1 className="text-2xl md:text-5xl font-bold text-[#4B69A9] mb-12 ">
        01
      </h1>
 <h2 className="text-2xl md:text-2xl font-semibold text-black mb-2">
        Electrical Upgrade at ZAHRIX Office Complex
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
       
        {/* Left Image Card */}
        <div className="w-full max-w-sm">
          <img
            src={leftImage}
            alt="Inspection Work"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Center Image with Overlay Content */}
        <div className="relative w-full max-w-sm mt-32">
          <img
            src={centerImage}
            alt="LED Retrofit"
            className="rounded-xl shadow-lg w-full h-80 md:h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl flex flex-col justify-end p-6 text-white">
            <h3 className="text-xl font-bold mb-2">LED Lighting Retrofit</h3>
            <p className="text-sm">
              Illuminating spaces with energy-efficient LED lighting solutions,
              reducing energy consumption and maintenance costs.
            </p>
            <div className="mt-4 self-center">
              <button className="bg-[#4B69A9] p-3 rounded-full hover:bg-blue-700 transition">
                <ArrowUpRight className="w-8 h-8 text-white " />
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div className="w-full max-w-sm">
          <img
            src={rightImage}
            alt="Wiring Maintenance"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
  
</div>
    </section>
  );
};

export default ProjectElectrical;
