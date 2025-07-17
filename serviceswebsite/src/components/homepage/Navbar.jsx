
import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#4B69A9] fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
          <span className="text-white font-bold text-xl">ZAHRIX</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-lg">
          <Link to="/" className="text-white no-underline hover:underline">
            Home
          </Link>
          <Link to="/aboutus" className="text-white no-underline hover:underline">
            About Us
          </Link>

          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-white hover:underline focus:outline-none"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>

            {servicesOpen && (
              <div className="absolute top-full mt-2 text-[#4B69A9] rounded shadow-lg py-2 w-40 z-20 bg-white">
                <Link
                  to="/services/electrical"
                  className="block px-4 py-2 hover:bg-[#4B69A9] hover:text-white rounded"
                >
                  Electrical
                </Link>
                <Link
                  to="/services/cctv"
                  className="block px-4 py-2 hover:bg-[#4B69A9] hover:text-white rounded"
                >
                  CCTV
                </Link>
                <Link
                  to="/services/bms"
                  className="block px-4 py-2 hover:bg-[#4B69A9] hover:text-white rounded"
                >
                  BMS
                </Link>
              </div>
            )}
          </div>

          <Link to="/projects" className="text-white no-underline hover:underline">
            Projects
          </Link>
        </nav>

        {/* Get a Quote button desktop */}
        <Link
          to="/quote"
          className="hidden md:block bg-white text-[#4B69A9] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Get a Quote
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#4B69A9] px-6 py-4 space-y-3 font-semibold">
          <Link to="/" className="block text-white no-underline hover:underline">
            Home
          </Link>
          <Link to="/about" className="block text-white no-underline hover:underline">
            About Us
          </Link>

          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-white hover:underline focus:outline-none"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="mt-2 ml-4 space-y-1">
                <Link
                  to="/services/electrical"
                  className="block px-4 py-2 text-white hover:bg-[#3a5381] rounded"
                >
                  Electrical
                </Link>
                <Link
                  to="/services/cctv"
                  className="block px-4 py-2 text-white hover:bg-[#3a5381] rounded"
                >
                  CCTV
                </Link>
                <Link
                  to="/services/bms"
                  className="block px-4 py-2 text-white hover:bg-[#3a5381] rounded"
                >
                  BMS
                </Link>
              </div>
            )}
          </div>

          <Link to="/projects" className="block text-white no-underline hover:underline">
            Projects
          </Link>

          <Link
            to="/quote"
            className="block w-full bg-white text-[#4B69A9] font-semibold px-5 py-2 rounded-md hover:bg-gray-100 transition text-center"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
