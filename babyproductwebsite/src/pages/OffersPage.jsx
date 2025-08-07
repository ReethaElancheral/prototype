


import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";
import Offers from "../components/offers/Offers";





const OffersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<Offers/>
   
      </main>
<Footer/>
    </div>
  );
};

export default OffersPage;
