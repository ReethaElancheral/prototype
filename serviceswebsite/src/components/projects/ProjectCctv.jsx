import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import leftImage from "../../assets/images/projectcctvimg.png";
import centerImage from "../../assets/images/projectcctvimg2.png";
import rightImage from "../../assets/images/projectcctvimg3.png";
import learnIcon from "../../assets/images/learnarrow.png";

const ProjectCctv = () => {
  return (
    <section className="py-16 bg-white text-center">
   
<div className="bg-gray-100 py-12">
       <h1 className="text-2xl md:text-5xl font-bold text-[#4B69A9] mb-12 ">
        02
      </h1>
 <h2 className="text-2xl md:text-2xl font-semibold text-black mb-2">
       CCTV Installation at Abc Retail Store
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

export default ProjectCctv;
