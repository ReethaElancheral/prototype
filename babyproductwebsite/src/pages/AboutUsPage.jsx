
import AboutUs from "../components/aboutus/AboutUs";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<AboutUs/>
   
      </main>
<Footer/>
    </div>
  );
};

export default AboutUsPage;
