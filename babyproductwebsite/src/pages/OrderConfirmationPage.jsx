

import OrderConfirmation from "../components/category/OrderConfirmation";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const OrderConfirmationPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<OrderConfirmation/>
   
      </main>
<Footer/>
    </div>
  );
};

export default OrderConfirmationPage;
