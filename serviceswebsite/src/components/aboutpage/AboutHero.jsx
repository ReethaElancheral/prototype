import React, { useEffect, useState } from "react";
import abtheroimg from '../../assets/images/abtheroimg.png';

const AboutHero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
  <img
    src={abtheroimg}
    alt="Hero background"
    className="absolute inset-0 w-full h-full object-cover float-from-top"
  />

  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Animated text container */}
  <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-20 text-white space-y-4">
    <h2
      className={`text-sm md:text-base lg:text-2xl px-6 font-bold transform opacity-0 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "-translate-y-4"
      }`}
    >
      Home &gt;| About Us
    </h2>
    <h1
      className={`text-2xl md:text-4xl lg:text-lg transform opacity-0 transition-all duration-700 delay-300 ${
        visible ? "opacity-100 translate-y-0" : "translate-y-4"
      }`}
    >
      Sparking Innovation,
      Illuminating Lives.
    </h1>
  </div>
</section>

    </>
  );
};

export default AboutHero;
