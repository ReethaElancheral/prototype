
import bestProducts from "../components/data/bestproducts";
import Footer from "../components/footer/Footer";
import BestSellerCard from "../components/home/BestSeller";
import FAQSection from "../components/home/FAQSection";

import FeaturedCategories from "../components/home/FeaturedCategory";
import Header from "../components/home/Header";
import Rainbow from "../components/home/Rainbow";
import TestimonialSection from "../components/home/TestimonialSection";
import TrendingProductSection from "../components/home/TrendingProductSection";
import TrendingProductSectionThree from "../components/home/TrendingProductSectionThree";
import TrendingProductSectionTwo from "../components/home/TrendingProductSectionTwo";
import WhyTrustSection from "../components/home/WhyTrustSection";




const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
        <Rainbow/>
   <FeaturedCategories/>
   <WhyTrustSection/>
   <BestSellerCard product={bestProducts}/>
   <TrendingProductSection/>
   <TrendingProductSectionTwo/>
   <TrendingProductSectionThree/>
      <TestimonialSection/>
   <FAQSection/>
      </main>
<Footer/>
    </div>
  );
};

export default HomePage;
