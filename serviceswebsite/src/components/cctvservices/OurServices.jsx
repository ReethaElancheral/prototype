import { Link } from 'react-router-dom';
import cctvimg from '../../assets/images/cctvservicesimg.png';
import cctvinstall from '../../assets/images/cctvinstall.png';
import cctvmonitor from '../../assets/images/cctvmonitor.png';
import installation from '../../assets/images/installation.png';
import learnIcon from "../../assets/images/learnarrow.png";

export default function OurServices() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-36 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center text-black mb-16">
        Services We Offer ⚡
      </h2>

      <div className="space-y-16">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {/* Image card */}
          <div className="relative w-full lg:w-1/3">
            <img
              src={cctvimg}
              alt="CCTV installation"
              className="rounded-2xl w-full h-[360px] object-cover border border-gray-200 shadow-sm"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl px-2 py-6">
              <p className="text-center text-white text-lg md:text-xl px-4">
                Experience the best in electrical, CCTV, BMS Solutions.
              </p>
            </div>
          </div>

          {/* Text card */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col gap-4 shadow-sm w-full lg:w-2/3">
            <div className="flex items-center gap-4">
              <img src={cctvinstall} alt="CCTV Install Icon" className="w-16 h-16" />
              <h4 className="text-xl text-[#4B69A9] font-bold">CCTV Installation</h4>
            </div>
            <p className="text-gray-600 font-semibold">
              Expert CCTV installation services to enhance security and surveillance. Our team designs and installs customized CCTV systems for homes and businesses. Secure your property with our reliable solutions.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col gap-4 shadow-sm w-full lg:w-2/3">
            <div className="flex items-center gap-4">
              <img src={cctvmonitor} alt="Monitoring Icon" className="w-16 h-16" />
              <h4 className="text-xl text-[#4B69A9] font-bold">CCTV Monitoring</h4>
            </div>
            <p className="text-gray-600 font-semibold">
              Remote CCTV monitoring services to detect and respond to security threats. Our team monitors your CCTV system 24/7, alerting authorities in case of suspicious activity. Get peace of mind with our expert monitoring services.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col gap-4 shadow-sm w-full lg:w-1/3">
            <div className="flex items-center gap-4">
              <img src={installation} alt="Maintenance Icon" className="w-16 h-16" />
              <h4 className="text-xl text-[#4B69A9] font-bold">CCTV Maintenance</h4>
            </div>
            <p className="text-gray-600 font-semibold">
              Regular CCTV maintenance to ensure system uptime and optimal performance. Our technicians perform routine checks, repairs, and upgrades to keep your CCTV system running smoothly.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
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
