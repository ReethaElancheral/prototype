import bmslastimg from "../../assets/images/bmslastimg.png";
import { Link } from "react-router-dom";
import learnIcon from "../../assets/images/learnarrow.png";

export default function Bmslastsec() {
  return (
    <section className="py-20 bg-gray-100 px-4 sm:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-semibold text-[#4B69A9]">
            <span className="underline decoration-[#4B69A9] underline-offset-2">
              Let&apos;s
            </span>{" "}
            Connect
          </h2>
          <p className="text-[#4B69A9] text-4xl font-semibold">
            We're here to answer your questions and help
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center px-6 py-3 bg-[#4B69A9] text-white font-medium hover:bg-blue-700 transition shadow"
          >
            <img src={learnIcon} alt="Learn Icon" className="w-5 h-5" /> 
            Contact Us
          </Link>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={bmslastimg}
            alt="Security Solutions"
            className="w-full max-w-md h-auto object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
