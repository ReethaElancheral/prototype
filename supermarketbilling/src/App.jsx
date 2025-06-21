import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.css";
import DefaultProducts from "./pages/Products";
import BillingSummary from "./components/BillingSummary";
import OrderCompletedPage from "./components/OrderCompletedPage";
import TaxInvoice from "./components/TaxInvoice";
import { BillingProvider } from "./components/BillingContext";
import ThankYouPage from "./components/ThankYou";

export default function App() {
  return (
    <BillingProvider>

    
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<DefaultProducts />} />
            <Route path="/billingsummary" element={<BillingSummary />} />
            <Route path="/order-completed" element={<OrderCompletedPage />} />
            <Route path="/invoice" element={<TaxInvoice/>} />
            <Route path="/thankyou" element={<ThankYouPage/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </BillingProvider>
  );
}
