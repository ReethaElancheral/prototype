
import HomeMakers from "../components/about/HomeMakers";
import CloudKitchen from "../components/program/CloudKitchen";
import FeaturesGrid from "../components/program/FeaturesGrid";





const CloudKitchenPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <main className="flex-grow">
   <CloudKitchen/>
   <FeaturesGrid/>
   <HomeMakers/>
      </main>
  
    </div>
  );
};

export default CloudKitchenPage;
