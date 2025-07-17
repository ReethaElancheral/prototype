import React from "react";
import mainImage from "../../assets/images/homeabtimg.png";
import subImage from "../../assets/images/homeabtsub.png";
import lightningIcon from "../../assets/images/boltsymbol.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import team4 from "../../assets/images/team4.png";
import team5 from "../../assets/images/team5.png";
import learnIcon from "../../assets/images/learnarrow.png";
import { Link } from 'react-router-dom';


const AboutSection = () => {
  return (
       <section className="bg-gray-50 w-full py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image Section */}
        <div className="relative flex-1 w-full flex justify-center items-center">
          {/* Wrapper to offset vertical label and sub image positioning */}
          <div className="relative flex items-start">
            {/* Vertical Label Section */}
            <div className="text-3xl font-bold text-blue-900 mb-4 px-4">25</div>
            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
              <div className="transform -rotate-90 origin-top-left text-lg font-medium text-blue-900 tracking-wide whitespace-nowrap">
                <p>Years Experiences</p>
                <p>Electro Mechanical</p>
              </div>
            </div>


            {/* Image Container */}
            <div className="relative">
              {/* Sub Image - behind and offset to bottom left */}
              <img
                src={subImage}
                alt="Worker Closeup"
                className="absolute -left-24 bottom-[-28px] w-40 md:w-48 h-60 rounded-md border-4 border-white shadow-md z-0 float-from-top"
              />

              {/* Main Image */}
              <img
                src={mainImage}
                alt="Engineer Working"
                className="relative z-10 rounded-md shadow-md w-full max-w-sm float-from-bottom"
              />

             
            </div>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex-1 w-full">
          {/* Section Heading */}
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-xl font-bold uppercase">About Us</h2>
            <img src={lightningIcon} alt="Lightning Icon" className="w-5 h-5" />
          </div>

          <h3 className="text-lg font-semibold mb-2">Welcome To ZAHIRX !</h3>

          <h1 className="text-2xl md:text-3xl font-bold text-[#4B69A9] leading-snug mb-4">
            Empowering Your Space, Enhancing <br className="hidden md:block" />
            Your Life
          </h1>

          <p className="text-gray-700 font-semibold mb-6 text-md">
            At ZAHRIX, we're dedicated to delivering innovative electrical,
            CCTV, and Building Management System (BMS) solutions. Our expertise
            ensures a safer, more secure, and efficient environment for homes,
            businesses, and communities. With cutting-edge technology and
            exceptional service, we empower your space to reach its full
            potential. Our team of experts is committed to providing tailored
            solutions that meet your unique needs. Trust us to illuminate your
            world with innovative solutions.
          </p>

          {/* Button and Expert Team Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Learn More Button */}
            <Link to="/aboutus">
  <button className="bg-[#4B69A9] text-white px-6 py-3 rounded flex items-center gap-2 shadow hover:bg-blue-800 transition duration-300">
              <img src={learnIcon} alt="Learn Icon" className="w-5 h-5" /> Learn
              More
            </button>
            </Link>
          

            {/* Expert Team Thumbnails */}
            <div className="flex flex-col">
              <p className="font-semibold text-lg mb-1">
                Meet Our Expert Team !
              </p>
              <div className="flex items-center">
                <img
                  src={team1}
                  alt="Team Member 1"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-0"
                />
                <img
                  src={team2}
                  alt="Team Member 2"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-4"
                />
                <img
                  src={team3}
                  alt="Team Member 3"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-4"
                />
                <img
                  src={team4}
                  alt="Team Member 4"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-4"
                />
                <img
                  src={team5}
                  alt="Team Member 5"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
