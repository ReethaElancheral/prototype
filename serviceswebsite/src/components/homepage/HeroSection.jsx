
import homehero from "../../assets/images/homehero.png";
import bg2 from "../../assets/images/heroimg1.png";
import iconLeft from "../../assets/images/boltsymbol.png";
import iconRight from "../../assets/images/checkmark.png";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
   <section className="bg-white w-full py-12 px-4 sm:px-6 md:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
    
    {/* Left Content */}
    <div className="flex-1">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Transforming Safety and Security With <br />
        Cutting-Edge Technology
      </h1>

      <h2 className="text-lg sm:text-xl md:text-2xl text-[#4B69A9] font-semibold mb-4">
        Empowering Your Space with Innovative Solutions
      </h2>

      <p className="text-gray-700 mb-6">
        <span className="text-[#4B69A9] font-semibold">Zahrix</span> provides cutting-edge electrical, CCTV, and BMS services to enhance your building's efficiency, safety, and security. Trust us to illuminate your world. Our expertise ensures a safer, more secure, and efficient environment. We design, install, and maintain systems that protect people, property, and assets.
      </p>

      <Link to="/services/electrical">
        <button className="bg-[#4B69A9] text-white px-6 py-3 rounded shadow hover:bg-blue-800 transition duration-300">
          Discover Our Services
        </button>
      </Link>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap gap-6">
        {[
          { count: "500+", label: "Locations In the Country" },
          { count: "25+", label: "Years Of Experience" },
          { count: "200+", label: "Specialized Workers" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg text-center w-full sm:w-40 border border-gray-300"
          >
            <h3 className="text-3xl font-bold text-[#4B69A9]">{stat.count}</h3>
            <p className="text-md font-semibold text-[#4B69A9]">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 relative w-full flex justify-center overflow-hidden">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">

        {/* Background Decoration */}
        <img
          src={bg2}
          alt="Background Decoration 2"
          className="absolute -top-1 -right-10 w-28 sm:w-32 md:w-40 h-auto"
        />

        {/* Main Hero Image with animation and margin tweak */}
        <img
          src={homehero}
          alt="Worker Hero"
          className="relative z-10 w-full hero-image-float -ml-4 sm:-ml-6"
        />

        {/* Tooltip Card - repositioned for all screen sizes */}
        <div className="absolute top-10 right-0 sm:right-[-10px] bg-white border border-gray-200 shadow-md rounded p-3 flex items-center gap-2 max-w-[240px] z-20 tooltip-card">
          <img src={iconLeft} alt="Icon Left" className="w-5 h-5" />
          <p className="text-sm font-medium">Unlock a safer tomorrow with Zahrix !</p>
          <img src={iconRight} alt="Icon Right" className="w-5 h-5 ml-auto" />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
