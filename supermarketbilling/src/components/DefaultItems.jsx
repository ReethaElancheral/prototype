import { useState, useEffect } from "react";
import { useBilling } from "../components/BillingContext";
import { useLocation } from "react-router-dom";
import addtocart from "../assets/images/addtocart.png";
import { useNavigate } from "react-router-dom";

export default function DefaultItems() {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialSearch = query.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([
    { name: "Dairy Milk", quantity: 2, rate: 100, tax: 20 },
    { name: "Millet Noodles", quantity: 1, rate: 30, tax: 10 },
    { name: "Wheat Flour", quantity: 2, rate: 100, tax: 20 },
    { name: "Maida", quantity: 1, rate: 30, tax: 10 },
    { name: "Chilli Powder", quantity: 2, rate: 100, tax: 20 },
    { name: "Briyani Masala", quantity: 1, rate: 30, tax: 10 },
  ]);

  const { addItem } = useBilling();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleQtyChange = (itemName, delta) => {
    const updated = items.map((item) => {
      if (item.name === itemName) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setItems(updated);
  };

  const handleNextClick = () => {
    navigate("/billingsummary");
  };

  const handleAddFilteredItems = () => {
    if (filteredItems.length === 0) {
      setMessage("No items match your search");
    } else {
      filteredItems.forEach((item) => addItem(item));
      setMessage(`${filteredItems.length} item(s) added`);
    }

    setTimeout(() => setMessage(""), 2500);
  };

  useEffect(() => {
    const newSearch = new URLSearchParams(location.search).get("search") || "";
    setSearchTerm(newSearch);
  }, [location]);

  return (
    <>
      <h1>Products</h1>

      {message && <div className="message">{message}</div>}

      <div className="item-table-header">
        <span>ITEM DETAILS</span>
        <span>QUANTITY</span>
        <span>RATE</span>
        <span>TAX</span>
        <span>AMOUNT</span>
      </div>

      {filteredItems.map((item) => {
        const currentQty =
          items.find((i) => i.name === item.name)?.quantity || 1;
        const total = (item.rate + item.tax) * currentQty;

        return (
          <>
            <div key={item.name} className="item-row">
              <span>{item.name}</span>
              <span>
                <button
                  onClick={() => handleQtyChange(item.name, -1)}
                  className="qty-btn"
                >
                  −
                </button>
                <span style={{ margin: "0 8px" }}>{currentQty}</span>
                <button
                  onClick={() => handleQtyChange(item.name, 1)}
                  className="qty-btn"
                >
                  +
                </button>
              </span>
              <span>{item.rate}</span>
              <span>{item.tax}</span>
              
              <span className="amount-with-cart">
                <span>{total}</span>

                <div
                  className="addcartdiv"
                  onClick={() => {
                    addItem(item);
                    setMessage(`${item.name} added to bill`);
                    setTimeout(() => setMessage(""), 2000);
                  }}
                >
                  <img src={addtocart} alt="Add to Cart" className="addcart" />
                </div>
              </span>
            </div>
          </>
        );
      })}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={handleNextClick}
          style={{
            backgroundColor: "#F88E55",
            color: "black",
            border: "none",
            padding: "10px 20px",
            borderRadius: 6,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </>
  );
}
