import React from "react";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import AboutHero from "../components/aboutpage/AboutHero";
import AboutSection from "../components/homepage/AboutSection";
import WhoWe from "../components/aboutpage/WhoWe";
import OurApproach from "../components/aboutpage/OurApproach";
import AboutLastSection from "../components/aboutpage/AboutLastSection";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br />
        <br />
        <AboutHero />
        <AboutSection />
        <WhoWe />
        <OurApproach />
        <AboutLastSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
