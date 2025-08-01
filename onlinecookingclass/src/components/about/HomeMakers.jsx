


import React from "react";
import { Link } from "react-router-dom";
import messageIcon from "../../assets/images/messageicon.PNG"; // your local icon path


const HomeMakers = () => {
  return (
    <section className="bg-[#fff5e1] py-16 px-4">
  <div className="max-w-[1200px] mx-auto">
        <p className="text-xl md:text-4xl font-bold mb-4 px-14 mx-auto text-black text-center">
          Homemakers to busy executives, budding chefs to food entrepreneurs,
          grandparents to moms, health conscious people or foodies - there's a
          course for all.
        </p>
      </div>

      <div className="relative mt-10 px-6">
        {/* Centered button */}
        <div className="flex justify-center">
          <Link
            to="/featured-course"
            className="bg-[#D57A66] text-white px-6 py-3 rounded-full text-2xl font-medium hover:bg-[#c1654e] transition"
          >
            View Courses
          </Link>
        </div>

       <Link to="/contact" className="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer">
  <img
    src={messageIcon}
    alt="message icon"
    className="w-12 h-12"
  />
</Link>
      </div>
    </section>
  );
};

export default HomeMakers;


