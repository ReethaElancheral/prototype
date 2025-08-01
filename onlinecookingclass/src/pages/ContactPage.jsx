import HomeMakers from "../components/about/HomeMakers";
import Contact from "../components/contact/Contact";





const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E6E6FA]">
    
      <main className="flex-grow">
  <Contact/>
  <HomeMakers/>
      </main>
  
    </div>
  );
};

export default ContactPage;
