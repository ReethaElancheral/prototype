import { Link } from 'react-router-dom';
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import cctvimg from '../../assets/images/cctvservicesimg.png';
import cctvinstall from '../../assets/images/cctvinstall.png';
import cctvmonitor from '../../assets/images/cctvmonitor.png';
import installation from '../../assets/images/installation.png';
import learnIcon from "../../assets/images/learnarrow.png";
import electricalimg from '../../assets/images/electrical.png';
import electricalplug from '../../assets/images/electricplug.png';

export default function ElectricalServicesIn() {
  return (
   <section className="py-20 px-4 sm:px-6 lg:px-36 max-w-7xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-semibold text-center text-black mb-16">
    Services We Offer ⚡
  </h2>

  <div className="space-y-16">
    {/* Row 1 */}
    <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
      {/* First Column */}
      <div className="relative w-full lg:w-1/2">
        <img
          src={cctvimg}
          alt="CCTV installation"
          className="rounded-2xl w-full h-[360px] object-cover border border-gray-200 shadow-sm"
        />
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl px-2 py-6">
          <p className="text-center text-white text-base sm:text-lg md:text-xl px-4">
            Experience the best in electrical, CCTV, BMS Solutions.
          </p>
        </div>
      </div>

      {/* Second Column */}
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col justify-between min-h-[360px] shadow-sm w-full lg:w-1/2">
        <div>
          <div className="flex items-center mb-6 gap-4">
            <img src={electricalimg} alt="Mission Icon" className="w-14 h-14 sm:w-16 sm:h-16" />
            <h4 className="text-lg sm:text-xl text-[#4B69A9] font-bold">
              Electrical Installation
            </h4>
          </div>
          <p className="text-gray-600 font-semibold text-sm sm:text-base">
            Expert Electrical installation services for new builds, renovations and upgrade.
            Our licensed electricians ensure safe, efficient and reliable electrical systems.
            From lighting to power distribution, we handle it all. Trust us to get the job done right.
          </p>
        </div>
      </div>
    </div>

    {/* Row 2 */}
<div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
  {/* First Column */}
  <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col gap-y-4 min-h-[360px] shadow-sm w-full lg:w-2/3">
    <div className="flex items-center gap-4 mb-4">
      <img src={electricalplug} alt="Plug Icon" className="w-14 h-14 sm:w-16 sm:h-16" />
      <h4 className="text-lg sm:text-xl text-[#4B69A9] font-bold">
        Energy Efficiency Solutions
      </h4>
    </div>
    <p className="text-gray-600 font-semibold text-sm sm:text-base">
      Expert Energy efficiency solutions to reduce energy consumptions and lower costs.
      Our team implements energy-saving technologies like LED lighting and solar panels.
      Go green and save money with our sustainable solutions.
    </p>
  </div>

  {/* Second Column */}
  <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200 flex flex-col gap-y-4 min-h-[360px] shadow-sm w-full lg:w-1/3">
    <div className="flex items-center gap-4 mb-4">
      <img src={installation} alt="Installation Icon" className="w-14 h-14 sm:w-16 sm:h-16" />
      <h4 className="text-lg sm:text-xl text-[#4B69A9] font-bold">
        Electrical Repairs
      </h4>
    </div>
    <p className="text-gray-600 font-semibold text-sm sm:text-base">
      Expert Electrical Repair services to fix faults and prevent downtimes and ensure safety.
      Our licensed electricians diagnose and rectify issues quickly.
    </p>
  </div>
</div>


    {/* Book Now button */}
    <div className="text-center mt-8">
      <Link
        to="/quote"
        className="inline-flex items-center px-6 py-3 bg-[#4B69A9] text-white font-medium hover:bg-blue-700 transition shadow rounded-md"
      >
        <img src={learnIcon} alt="Learn Icon" className="w-5 h-5 mr-2" />
        Book Now
      </Link>
    </div>
  </div>
</section>

  );
}


