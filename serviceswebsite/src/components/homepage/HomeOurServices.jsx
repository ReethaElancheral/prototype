import { Link } from 'react-router-dom';
import cctvimg from '../../assets/images/cctvservicesimg.png';
import lightningIcon from "../../assets/images/boltsymbol.png";
import cctvicon from "../../assets/images/cctv.png";
import bmsicon from "../../assets/images/bms.png";
import electricalicon from "../../assets/images/electrical.png";


export default function HomeOurServices() {
  return (
   <section className="py-20 px-4 sm:px-6 lg:px-36 max-w-7xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black mb-4">
    Our Services ⚡
  </h2>
  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4B69A9] mb-12 text-center">
    Expert Services for a Safer, Smarter World.
  </h2>

  <div className="space-y-16">

    {/* Row 1 */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
      
      {/* Image */}
      <div className="relative w-full lg:w-1/2">
        <img
          src={cctvimg}
          alt="CCTV installation"
          className="rounded-2xl w-full h-[280px] sm:h-[360px] object-cover border border-gray-200 shadow-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl px-4 py-4 sm:py-6">
          <p className="text-center text-white text-base sm:text-lg md:text-xl px-2">
            Experience the best in electrical, CCTV, BMS Solutions.
          </p>
        </div>
      </div>

      {/* CCTV Card */}
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between shadow-sm w-full lg:w-1/2">
        <div>
          <div className="flex items-center mb-4 gap-4">
            <img src={cctvicon} alt="Mission Icon" className="w-14 h-14 sm:w-16 sm:h-16" />
            <h4 className="text-lg sm:text-xl font-semibold text-black">CCTV</h4>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-semibold">
            Advanced CCTV systems for enhanced security and surveillance. Providing peace of mind and protection.
            <span className="inline-flex items-center ml-1">
              <img src={lightningIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 inline-block align-middle" />
            </span>
          </p>
          <Link
            to="/services/cctv"
            className="mt-4 text-right text-[#4f525a] font-semibold hover:underline flex justify-end items-center gap-1"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12">

      {/* BMS Card */}
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between shadow-sm w-full lg:w-2/3">
        <div>
          <div className="flex items-center mb-4 gap-4">
            <img src={bmsicon} alt="Mission Icon" className="w-14 h-14 sm:w-16 sm:h-16" />
            <h4 className="text-lg sm:text-xl font-semibold text-black">BMS</h4>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-semibold">
            Intelligent Building Management Systems for optimized energy efficiency, security and comfort.
            <span className="inline-flex items-center ml-1">
              <img src={lightningIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 inline-block align-middle" />
            </span>
          </p>
          <Link
            to="/services/bms"
            className="mt-4 text-right text-[#4B69A9] font-semibold hover:underline flex justify-end items-center gap-1"
          >
            Read More →
          </Link>
        </div>
      </div>

      {/* Electrical Card */}
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between shadow-sm w-full lg:w-1/3">
        <div>
          <div className="flex items-center mb-4 gap-4">
            <img src={electricalicon} alt="Mission Icon" className="w-14 h-14 sm:w-16 sm:h-16" />
            <h4 className="text-lg sm:text-xl font-semibold text-black">Electrical</h4>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-semibold">
            Expert Electrical Solutions for homes and businesses, ensuring safety, efficiency and reliability.
            <span className="inline-flex items-center ml-1">
              <img src={lightningIcon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 inline-block align-middle" />
            </span>
          </p>
          <Link
            to="/services/electrical"
            className="mt-4 text-right text-[#4B69A9] font-semibold hover:underline flex justify-end items-center gap-1"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>

  </div>
</section>

  );
}


