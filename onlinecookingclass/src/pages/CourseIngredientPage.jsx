
import HomeMakers from "../components/about/HomeMakers";
import CourseCurriculam from "../components/course/CourseCurriculam";
import HomestyleDishes from "../components/course/HomestyleDishes";
import TestimonialsSection from "../components/courseingredients/TestimonialsSection";
import CloudKitchen from "../components/program/CloudKitchen";
import FeaturesGrid from "../components/program/FeaturesGrid";





const CourseIngredientPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
   <HomestyleDishes/>
   <CourseCurriculam/>
   <TestimonialsSection/>
   <FeaturesGrid/>
   <HomeMakers/>
      </main>
  
    </div>
  );
};

export default CourseIngredientPage;
