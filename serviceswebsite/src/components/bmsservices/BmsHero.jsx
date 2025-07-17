import { useEffect, useState } from "react";
import bmsheroimg from '../../assets/images/bmshero.png'

export default function BmsHero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative w-full">
      <img
        src={bmsheroimg}
        alt="Hero background"
        className="w-full object-cover float-from-top"
      />

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Animated text container */}
      <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-20 text-white space-y-4">
        {/* Breadcrumb / first line */}
        <h2
          className={`text-sm md:text-base lg:text-2xl px-6 font-bold transform opacity-0 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "-translate-y-4"
          }`}
        >
          Home &gt;| Services
        </h2>
        {/* Main heading */}
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
  );
}
