
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<Contact/>
   
      </main>
<Footer/>
    </div>
  );
};

export default ContactPage;
