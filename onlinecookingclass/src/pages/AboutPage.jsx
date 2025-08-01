import AboutHeroSection from "../components/about/AboutHeroSection";
import AboutImageSection from "../components/about/AboutImageSection";
import AboutUsComponent from "../components/about/AboutUsComponent";
import HomeMakers from "../components/about/HomeMakers";
import OurStory from "../components/about/OurStory";
import WhatWeOffers from "../components/about/WhatWeOffers";
import HomeImageSection from "../components/home/HomeImageSection";




const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
   <AboutHeroSection/>
   <AboutUsComponent/>
   <OurStory/>
   <WhatWeOffers/>
   <HomeImageSection/>
   <AboutImageSection/>
   <HomeMakers/>
      </main>
  
    </div>
  );
};

export default AboutPage;
