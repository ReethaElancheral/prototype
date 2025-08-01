
import HomeMakers from "../components/about/HomeMakers";
import BakeryProgram from "../components/program/BakeryProgram";
import FeaturesGrid from "../components/program/FeaturesGrid";





const BakeryProgramPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
   <BakeryProgram/>
   <FeaturesGrid/>
   <HomeMakers/>
      </main>
  
    </div>
  );
};

export default BakeryProgramPage;
