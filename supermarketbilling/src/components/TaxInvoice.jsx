import { useEffect, useState, useRef } from "react";
import { useBilling } from "../components/BillingContext";
import html2pdf from "html2pdf.js";

export default function TaxInvoice() {
  const { billItems } = useBilling();
  const invoiceRef = useRef();
  const [customer, setCustomer] = useState({});
  const [orderId, setOrderId] = useState("");
  const [orderDate, setOrderDate] = useState("");

  useEffect(() => {
    const cust = JSON.parse(localStorage.getItem("customerDetails"));
    setCustomer(cust || {});
    setOrderId(localStorage.getItem("orderId") || "N/A");
    setOrderDate(localStorage.getItem("orderDate") || new Date().toISOString().slice(0, 10));
  }, []);

  const total = billItems.reduce((sum, item) => sum + (item.rate + item.tax) * item.quantity, 0);

  const handleDownload = () => {
    const element = invoiceRef.current;
    html2pdf().from(element).save("TaxInvoice.pdf");
  };

  const thStyle = {
  borderBottom: "2px solid limegreen", 
  padding: 12,
  textAlign: "center"
};

const tdStyle = {
  border: "none", 
  borderBottom: "1px dashed #ccc", 
  padding: 12,
  textAlign: "center"
};
  return (
    <div ref={invoiceRef} style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Tax Invoice</h2>

     
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p><strong>Sold By:</strong> <span style={{ color: "orangered" }}>Vetri Market</span></p>
          <p><strong>Ship-From Address:</strong> Vetri Market<br />
            65, Old Market, Sivagurunathapuram, Surandai,<br />
            Tamil Nadu 627-859
          </p>
        </div>
        <div style={{ alignSelf: "start" }}>
          <p style={{
            border: "1px solid #333", padding: "6px 12px", borderRadius: 4,
            fontSize: 13
          }}>
            Invoice Number # <strong>HY678953789</strong>
          </p>
        </div>
      </div>

      <hr style={{ margin: "20px 0", border: "1px solid lightgreen" }} />

     
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Order Date:</strong> {orderDate}</p>
        </div>
        <div>
          <p><strong>Billing Address</strong></p>
          <p>
            {customer.name}<br />
            {customer.address}<br />
            Phone - {customer.contact}
          </p>
        </div>
      </div>

     
      <table style={{
        width: "100%", border: "1px solid limegreen", borderCollapse: "collapse",
        marginTop: 20
      }}>
        <thead style={thStyle}>
          <tr style={{ backgroundColor: "#f8fff8" }}>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Quantity</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Total Amount</th>
          </tr>
        </thead>
        <tbody style={tdStyle}>
          {billItems.map((item, i) => (
            <tr key={i}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.quantity}</td>
              <td style={tdStyle}>{item.rate + item.tax}</td>
              <td style={tdStyle}>{(item.rate + item.tax) * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

    
      <div style={{ textAlign: "right", marginTop: 20, fontSize: 18 }}>
        <strong>Total ₹ {total.toFixed(2)}</strong>
      </div>

     
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <button
          onClick={handleDownload}
          style={{
            backgroundColor: "coral",
            color: "#fff",
            border: "none",
            padding: "10px 16px",
            borderRadius: 6,
            fontSize: 14,
            cursor: "pointer"
          }}
        >
          Download Invoice
        </button>
      </div>
    </div>
  );
}

const thStyle = {
  border: "1px solid limegreen",
  padding: 12,
  textAlign: "center"
};

const tdStyle = {
  border: "1px solid limegreen",
  padding: 12,
  textAlign: "center"
};
