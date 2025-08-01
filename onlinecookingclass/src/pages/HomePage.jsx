import HomeMakers from "../components/about/HomeMakers";
import FaqSection from "../components/home/FaqSection";
import HeroSection from "../components/home/HeroSection";
import HomeAllCourses from "../components/home/HomeAllCourses";
import HomeFeaturedCourses from "../components/home/HomeFeaturedCourses";
import HomeImageSection from "../components/home/HomeImageSection";




const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
    
      <main className="flex-grow">
   <HeroSection/>
   <HomeFeaturedCourses/>
   <HomeAllCourses/>
   <HomeImageSection/>
   <FaqSection/>
   <HomeMakers/>
      </main>
  
    </div>
  );
};

export default HomePage;
