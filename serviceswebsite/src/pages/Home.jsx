import React from "react";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import HeroSection from "../components/homepage/HeroSection";
import AboutSection from "../components/homepage/AboutSection";
import OurProjects from "../components/homepage/OurProjects";
import Testimonials from "../components/homepage/Testimonials";
import HomeLastSec from "../components/homepage/HomeLastSec";
import HomeOurServices from "../components/homepage/HomeOurServices";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br />
        <br />
        <HeroSection />
        <AboutSection />
        <HomeOurServices />
        <OurProjects />
        <Testimonials />
        <HomeLastSec />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
