import { Link } from "react-router-dom";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  LinkedinIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from "./Icons.jsx";

import logoimg from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#4B69A9] text-white py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Left Section - 50% width */}
        <div className="md:w-1/2 space-y-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 mb-2">
            <img
              src={logoimg}
              alt="ZAHRIX Logo"
              className="w-12 h-12 rounded-full"
            />
            <h2 className="font-bold text-2xl">ZAHRIX</h2>
          </div>

          <p className="text-base max-w-xs">
            “At ZAHRIX Delivering Electrical Solutions With Precision and Care”
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mt-6 text-lg">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-7 h-7 bg-white text-[#4B69A9] rounded-full p-1" />
              <span>Zahrix@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-7 h-7 bg-white text-[#4B69A9] rounded-full p-1" />
              <span>23/9, Main Road Chennai.</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-7 h-7 bg-white text-[#4B69A9] rounded-full p-1" />
              <span>+91 86456780987</span>
            </div>
          </div>
        </div>

        {/* Right Section - 50% width */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {/* Subscribe Form */}
          <div>
            <h3 className="font-bold text-xl mb-4">Subscribe</h3>
            <form className="flex flex-col gap-3 sm:flex-row sm:gap-0 w-full max-w-full md:max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-t-md sm:rounded-l-md sm:rounded-tr-none px-4 py-3 text-black text-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none font-bold hover:opacity-90 transition sm:ml-0"
              >
                SIGN UP
              </button>
            </form>
          </div>

          {/* Links and Social Icons */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10 font-semibold">
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Testimonials
                  </a>
                </li>
                <li>
                  <Link to="/quote" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-bold text-xl mb-4">Useful Links</h3>
              <ul className="space-y-3 text-base">
                <li>
                  <Link to="/terms" className="hover:underline">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:flex-col md:items-center">
              {[
                { Icon: LinkedinIcon, label: "LinkedIn" },
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: FacebookIcon, label: "Facebook" },
                { Icon: TwitterIcon, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <div
                  key={label}
                  className="bg-white rounded-full p-2
                             w-9 h-9
                             flex items-center justify-center
                             hover:opacity-80 transition
                             "
                  aria-label={label}
                >
                  <Icon
                    className="text-[#4B69A9] w-5 h-5
                                  sm:w-6 sm:h-6
                                  md:w-7 md:h-7
                  "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-lg font-bold text-white/90">
        © 2025 Developed & Maintained by ZAHRIX — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
