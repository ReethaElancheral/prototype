import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import completedImg from "../assets/images/completed.png";

export default function OrderCompletedPage() {
  const [customer, setCustomer] = useState(null);
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

 
  useEffect(() => {
    const stored = localStorage.getItem("customerDetails");
    if (stored) {
      setCustomer(JSON.parse(stored));
    }
  }, []);

  
  useEffect(() => {
    let id = localStorage.getItem("orderId");
    if (!id) {
      id = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("orderId", id);
      localStorage.setItem("orderDate", new Date().toISOString().slice(0, 10));
    }
    setOrderId(id);
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/thankyou");
    }, 4000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const handleDownload = () => {
    navigate("/invoice");
  };

  if (!customer) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div className="order-complete-wrapper">
      <img src={completedImg} alt="Order Completed" className="order-img" />
      <h2>Your Order Completed</h2>
      <p>Thank you. Your order has been received</p>

      <div className="order-summary">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{orderId}</td>
              <td>{customer.name}</td>
              <td>{customer.contact}</td>
              <td>{customer.email || "N/A"}</td>
              <td>
                <button className="invoice-btn" onClick={handleDownload}>
                  Download Invoice
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
