import { createContext, useContext, useState,useEffect } from "react";

const BillingContext = createContext();

export const BillingProvider = ({ children }) => {
  const [billItems, setBillItems] = useState([]);

  const addItem = (newItem) => {
    const exists = billItems.find(item => item.name === newItem.name);
    if (exists) {
      setBillItems(prev =>
        prev.map(item =>
          item.name === newItem.name
            ? { ...item, quantity: parseInt(item.quantity) + parseInt(newItem.quantity) }
            : item
        )
      );
    } else {
      setBillItems(prev => [...prev, newItem]);
    }
  };

  useEffect(() => {
  const stored = localStorage.getItem('billItems');
  if (stored) setBillItems(JSON.parse(stored));
}, []);

useEffect(() => {
  localStorage.setItem('billItems', JSON.stringify(billItems));
}, [billItems]);

  return (
    <BillingContext.Provider value={{ billItems, addItem }}>
      {children}
    </BillingContext.Provider>
  );
};

export const useBilling = () => useContext(BillingContext);
