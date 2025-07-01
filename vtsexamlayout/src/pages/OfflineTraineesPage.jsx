import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailIcon from "../assets/images/mailid.png";
import phoneIcon from "../assets/images/Phone.png";
import Sidebar from "../components/Sidebar";

const OfflineTraineesPage = () => {
  const navigate = useNavigate();
  const [trainees, setTrainees] = useState([]);


  useEffect(() => {
    const stored = localStorage.getItem("traineesOffline");
    if (stored) setTrainees(JSON.parse(stored));
  }, []);

 
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    course: "",
    mode: "Offline",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addTrainee = (e) => {
    e.preventDefault();
    const newTrainee = { ...formData, image: "/assets/img6.png" }; 
    const updatedList = [...trainees, newTrainee];
    setTrainees(updatedList);
    localStorage.setItem("traineesOffline", JSON.stringify(updatedList));
    setShowModal(false);
    setFormData({
      name: "",
      duration: "",
      course: "",
      mode: "Offline",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <h2>Trainer Name &gt; Offline Trainees</h2>

        <button className="btn-primary btnoffline" onClick={() => setShowModal(true)}>
          + Add Trainee
        </button>

        <div className="trainees-grid">
          {trainees.map((t, i) => (
            <div className="trainee-card" key={i}>
              <div
                className="card-header"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <h4 style={{ margin: 0 }}>{t.name}</h4>
                </div>
                <button className="btn-secondary">Edit</button>
              </div>
              <p>Duration: {t.duration}</p>
              <p>Course Name: {t.course}</p>
              <p>Class Mode: {t.mode}</p>
              <p>
                <img src={emailIcon} alt="email" className="icon-sm" />{" "}
                {t.email}
              </p>
              <p>
                <img src={phoneIcon} alt="phone" className="icon-sm" />{" "}
                {t.phone}
              </p>
              <div className="card-footer">
               <button
  className="btn-primary btn-view-more"
 onClick={() => {
  localStorage.setItem("selectedTrainee", JSON.stringify(t)); 
  navigate("/development", { state: { trainee: t } });
}}
>
  View More
</button>

              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>Add New Trainee</h2>
              <form onSubmit={addTrainee} className="modal-form">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Duration:
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Course:
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Phone:
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </label>

                <label>
                  Class Mode:
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleInputChange}
                    disabled
                  >
                    <option value="Offline">Offline</option>
                  </select>
                </label>

                <div className="modal-actions">
                  <button type="submit" className="btn-primary">
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfflineTraineesPage;
