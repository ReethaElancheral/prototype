import React from "react";
import Navbar from "../components/homepage/Navbar";
import Footer from "../components/homepage/Footer";
import BmsHero from "../components/bmsservices/BmsHero";
import BmsOurServices from "../components/bmsservices/BmsOurService";
import BmsServicesIn from "../components/bmsservices/BmsServicesIn";
import Bmslastsec from "../components/bmsservices/BmsLastSec";

const BmsServices = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br />
        <br />
        <BmsHero />
        <BmsOurServices />
        <BmsServicesIn />
        <Bmslastsec />
      </main>
      <Footer />
    </div>
  );
};

export default BmsServices;
