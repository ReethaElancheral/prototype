import React from "react";
import Logo from "../../assets/images/aboutlogo.PNG"; 

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-8">
      {/* Breadcrumb */}
      <p className="text-md text-black font-semibold mb-6">
        Home &gt; <span className="text-black">About</span>
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-start gap-10 mt-10">
        {/* Left: Logo */}
        <div className="flex flex-col items-center md:items-center mt-10">
          <img
            src={Logo}
            alt="EarthBubs Logo"
            className="w-32 md:w-60 h-auto object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-semibold mt-2 text-black">
            EarthBubs
          </h1>
        </div>

        {/* Right: About Us Content */}
        <div className="flex-1 text-black">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-xl leading-relaxed font-medium mb-8">
            At EarthBubs, we believe that every baby deserves the safest, softest start in life.
            That’s why we’re dedicated to offering high quality, trusted baby products that
            combine comfort, care, and innovation all wrapped in love. Born from a parent’s desire
            for gentle, safe, and natural baby essentials, our journey began with one goal: to
            make parenting a little easier, and a lot more joyful. From soft diapers and
            skin-loving care to smart strollers and feeding must haves, every product we offer is
            thoughtfully chosen and thoroughly tested for your baby’s well being. We’re more than
            just a store we’re part of your parenting journey.
          </p>

          <p className="font-semibold mb-4">What Makes Us Different:</p>
          <ul className="space-y-2 text-lg leading-loose">
            <li>🌿 Natural, safe, and toxin-free ingredients</li>
            <li>🛡️ Pediatrician & dermatologist approved</li>
            <li>👶 Designed with real parents in mind</li>
            <li>🌍 Eco-conscious and cruelty-free practices</li>
            <li>❤️ 10,000+ happy families and growing!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
