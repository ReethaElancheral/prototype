


import Cart from "../components/category/Cart";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const CartPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<Cart/>
   
      </main>
<Footer/>
    </div>
  );
};

export default CartPage;
