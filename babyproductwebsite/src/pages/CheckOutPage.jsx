

import CheckOut from "../components/category/CheckOut";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const CheckOutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<CheckOut/>
   
      </main>
<Footer/>
    </div>
  );
};

export default CheckOutPage;
