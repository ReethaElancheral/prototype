import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBilling } from "../components/BillingContext";
import cashimg from "../assets/images/cash.png";
import cardimg from "../assets/images/card.png";
import tickimg from "../assets/images/tick.png";

export default function BillingSummary() {
  const navigate = useNavigate();
  const { billItems } = useBilling();
  const [paymentMethod, setPaymentMethod] = useState("");

  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    address: "",
    date: "",
  });

  useEffect(() => {
    const storedCustomer = localStorage.getItem("customerDetails");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);

  const subTotal = billItems.reduce(
    (acc, item) => acc + item.rate * item.quantity,
    0
  );
  const taxTotal = billItems.reduce(
    (acc, item) => acc + item.tax * item.quantity,
    0
  );
  const roundOff = 0;
  const total = subTotal + taxTotal + roundOff;

  const [collectedAmount, setCollectedAmount] = useState(total);
  const balance = collectedAmount - total;

  return (
    <div className="billing-summary">
      <div
        style={{
          padding: 30,
          maxWidth: 350,
          fontFamily: "sans-serif",
          background: "white",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          height: "500px",
        }}
      >
        <div style={{ fontSize: 12, marginBottom: 20, lineHeight: "1.5em" }}>
          DATE: {customer.date || "N/A"} <br />
          TIME:{" "}
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          <br />
          BILL NO: 78123
        </div>

        <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
          <div
            style={{
              background: "#f57c00",
              color: "white",
              padding: "6px 12px",
              borderRadius: 4,
              flex: 1,
              textAlign: "center",
              fontSize: 12,
            }}
          >
            Collected Amount <br />
            <strong>{collectedAmount.toFixed(2)}</strong>
          </div>
          <div
            style={{
              background: "#e2b9ff",
              color: "#333",
              padding: "6px 12px",
              borderRadius: 4,
              flex: 1,
              textAlign: "center",
              fontSize: 12,
            }}
          >
            Balance <br />
            <strong>{balance.toFixed(2)}</strong>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 15,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              onClick={() => setPaymentMethod("cash")}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: 6,
                backgroundColor: paymentMethod === "cash" ? "#fff2f2" : "#fff",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <img
                  src={cashimg}
                  alt="cash"
                  style={{ width: 18, height: 18 }}
                />
                <span style={{ fontSize: 13 }}>CASH</span>
              </div>
              {paymentMethod === "cash" && (
                <img
                  src={tickimg}
                  alt="tick"
                  style={{ width: 16, height: 16 }}
                />
              )}
            </div>

            <div
              onClick={() => setPaymentMethod("card")}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: 6,
                backgroundColor: paymentMethod === "card" ? "#fff2f2" : "#fff",
                cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <img
                  src={cardimg}
                  alt="card"
                  style={{ width: 18, height: 18 }}
                />
                <span style={{ fontSize: 13 }}>CARD</span>
              </div>
              {paymentMethod === "card" && (
                <img
                  src={tickimg}
                  alt="tick"
                  style={{ width: 16, height: 16 }}
                />
              )}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ fontSize: 12, display: "block", marginBottom: 4 }}>
              Received Amount
            </label>
            <input
              type="number"
              value={collectedAmount}
              onChange={(e) =>
                setCollectedAmount(parseFloat(e.target.value) || 0)
              }
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 14,
              }}
            />
          </div>
        </div>

        <div className="totals" style={{ marginBottom: 15, fontSize: 13 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <strong>Sub Total:</strong>
            <span>{subTotal.toFixed(2)}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <strong>Tax:</strong>
            <span>{taxTotal.toFixed(2)}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 4,
            }}
          >
            <strong>Round Off:</strong>
            <span>{roundOff.toFixed(2)}</span>
          </div>
        </div>

        <div
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 20,
            textAlign: "right",
          }}
        >
          Total: {total.toFixed(2)}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            style={{
              flex: 1,
              backgroundColor: "#f57c00",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#3f7fff",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
            onClick={() => navigate("/order-completed")}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}
