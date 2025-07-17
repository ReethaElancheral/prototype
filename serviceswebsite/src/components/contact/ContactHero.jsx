import React from "react";
import { useEffect, useState } from "react";
import contactheroimg from "../../assets/images/contactheroimg.png";

const ContactHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <section className="relative w-full">
        <img
          src={contactheroimg}
          alt="Hero background"
          className="w-full object-cover float-in-left"
        />

        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated text container */}
       <div className="absolute inset-0 flex flex-col justify-center items-end pr-6 md:pr-20 text-white space-y-4 text-right">
  {/* Breadcrumb / first line */}
  <h2
    className={`text-sm md:text-base lg:text-2xl font-bold transform opacity-0 transition-all duration-700 ${
      visible ? "opacity-100 translate-y-0" : "-translate-y-4"
    }`}
  >
    Home &gt;| Contact Us
  </h2>

  {/* Main heading */}
  <h1
    className={`text-2xl md:text-4xl lg:text-lg transform opacity-0 transition-all duration-700 delay-300 ${
      visible ? "opacity-100 translate-y-0" : "translate-y-4"
    }`}
  >
    Sparking Innovation, Illuminating Lives.
  </h1>
</div>

      </section>
    </>
  );
};

export default ContactHero;
