import homelastimg from "../../assets/images/homelastimg.png";
import { Link } from "react-router-dom";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import bgimg from '../../assets/images/light-bulb-electricity.png'
import learnIcon from "../../assets/images/learnarrow.png";

const HomeLastSec = () => {
  return (
<section
  className="relative py-20 px-4 sm:px-8 lg:px-28 bg-center bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${bgimg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Content (above overlay) */}
  <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-4xl font-semibold text-white">
            <span className="underline decoration-blue-700 underline-offset-2">
              Let&apos;s
            </span>{" "}
            Connect ⚡
          </h2>
       <p className="text-white text-5xl font-semibold">
  We're here to answer{' '}
  <br />
  <span className="text-blue-700 text-5xl font-semibold">
   your questions and help
  </span>
</p>
           <p className="text-white text-lg font-semibold">
         Whether you're planning a new project or need emergency support, we're available to provide fast and reliable assistance.
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
        <div className="w-full lg:w-1/2 flex justify-center bg-black/10">
          <img
            src={homelastimg}
            alt="Security Solutions"
            className="w-full max-w-md h-auto object-cover shadow-sm float-from-bottom"
          />
        </div>
      </div>
    </section>
  )
}

export default HomeLastSec;