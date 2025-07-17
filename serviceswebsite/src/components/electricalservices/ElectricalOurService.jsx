import { useEffect, useState } from "react";
import electricalserviceImg from '../../assets/images/electricalservice.png';
import electricalimg from '../../assets/images/electrical.png';
import lightningIcon from "../../assets/images/boltsymbol.png";

export default function ElectricalOurServices() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative py-16 px-6 md:px-20">
      <h2 className="text-center text-xl uppercase font-bold tracking-widest mb-2">
        Our Services <span className="text-[#4B69A9]">⚡</span>
      </h2>
      <h3 className="text-center text-3xl md:text-4xl font-semibold mb-4">
        <span className="text-[#4B69A9]">Expert Services for a Safer, Smarter World</span>
      </h3>
      <p className=" text-center text-black max-w-4xl mx-auto mb-12">
        At ZAHRIX, we offer a comprehensive range of electrical services designed to meet the needs of homes and businesses... Our Team of experts dedicated to providing safe , efficient and reliable electrical solutions.
      </p>

      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl">
        <img src={electricalserviceImg} alt="CCTV Service" className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Left-aligned overlay text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 text-white space-y-4">
          {/* Round badge */}
          <div
            className={`opacity-0 transform translate-x-[-20px] transition-all duration-700 ${
              show ? 'opacity-100 translate-x-0 delay-300' : ''
            }`}
          >
             <div className="flex items-center mb-4 gap-4">
                                         <img src={electricalimg} alt="Mission Icon" className="w-16 h-16" />
                                     
                                       </div>
          </div>

          {/* "CCTV" text */}
          <h2
            className={`opacity-0 transform translate-x-[-20px] transition-all duration-700 ${
              show ? 'opacity-100 translate-x-0 delay-500' : ''
            } text-2xl font-bold text-left`}
          >
         Electrical
          </h2>

          {/* Description */}
          <p
            className={`max-w-lg opacity-0 transform translate-x-[-20px] transition-all duration-700 ${
              show ? 'opacity-100 translate-x-0 delay-700' : ''
            }`}
          >
          Expert Electrical Solutions for home and businesses, ensuring safety, efficiency and reliablility.
          </p>
        </div>
      </div>
    </section>
  );
}
