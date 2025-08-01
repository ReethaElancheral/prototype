import HomeMakers from "../components/about/HomeMakers";
import FaqSection from "../components/home/FaqSection";
import HomeAllCourses from "../components/home/HomeAllCourses";
import HomeFeaturedCourses from "../components/home/HomeFeaturedCourses";
import HomeImageSection from "../components/home/HomeImageSection";




const FeaturedCoursesPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
    
      <main className="flex-grow">
   
   <HomeFeaturedCourses/>
   <HomeAllCourses/>
   <HomeImageSection/>
   <HomeMakers/>
      </main>
  
    </div>
  );
};

export default FeaturedCoursesPage;
