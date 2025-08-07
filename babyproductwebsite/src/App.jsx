import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css';

import HomePage from './pages/HomePage';
import ScrollToTop from './components/scroll/ScrollToTop';
import CategoryProductListPage from './pages/CategoryProductListPage';
import ProductDescriptionPage from './pages/ProductDescriptionPage';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import ContactPage from './pages/ContactPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OffersPage from './pages/OffersPage';
import AboutUsPage from './pages/AboutUsPage';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {


  return (
    <>
  
 
     <Router>
      <div className="min-h-screen bg-[#E6E6FA] font-poppins text-black">
      
        <main>
         <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products/:category" element={<CategoryProductListPage/>} />
            <Route path="/product/:id" element={<ProductDescriptionPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/checkout" element={<CheckOutPage/>} />
            <Route path="/contacts" element={<ContactPage/>} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            <Route path="/offers" element={<OffersPage/>} />
            <Route path="/about" element={<AboutUsPage/>} />
            <Route path="/search" element={<SearchResultsPage />} />

        
          </Routes>
         
        </main>
      </div>
    </Router>
   
    </>
  )
}

export default App
