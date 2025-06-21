import { useState, useEffect } from "react";
import editimage from '../assets/images/edit.png';

export default function CustomerDetails() {
  const [customer, setCustomer] = useState({
    name: "",
    contact: "",
    address: "",
    date: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedCustomer = localStorage.getItem("customerDetails");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    } else {
      setCustomer({
        name: "Priya",
        contact: "8908666773",
        address: "12, Cross Cut Road, Chennai.",
        date: "2024-12-07",
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("customerDetails", JSON.stringify(customer));
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="customer-details">
      <h3>Customer Details</h3>

      <div className="field-row">
        <div className="field-group">
          <label>Customer Name</label>
          <div className="input-with-icon">
            <input
              type="text"
              name="name"
              value={customer.name}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="field-group">
          <label>Contact No</label>
          <div className="input-with-icon">
            <input
              type="text"
              name="contact"
              value={customer.contact}
              onChange={handleChange}
              disabled={!isEditing}
            />
            {!isEditing && (
              <img
                src={editimage}
                alt="Edit"
                className="edit-icon"
                onClick={handleEditClick}
              />
            )}
            {isEditing && (
              <button onClick={handleSaveClick} className="save-btn">Save</button>
            )}
          </div>
        </div>
      </div>

      <div className="field-row">
        <div className="field-group">
          <label>Address</label>
          <div className="input-with-icon">
            <input
              type="text"
              name="address"
              value={customer.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="field-group">
          <label>Date</label>
          <div className="input-with-icon">
            <input
              type="date"
              name="date"
              value={customer.date}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
