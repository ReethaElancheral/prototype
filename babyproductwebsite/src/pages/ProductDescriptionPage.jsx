


import ProductDescription from "../components/category/ProductDescription";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const ProductDescriptionPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
 <ProductDescription/>
   
      </main>
<Footer/>
    </div>
  );
};

export default ProductDescriptionPage;
