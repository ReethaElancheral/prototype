import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainerAndExamRow from "../components/homecontent/TrainerAndExamRow";
import UploadQuestionPaper from "../components/homecontent/UploadQuestionPaper";
import searchIcon from "../assets/images/search.png";
import filterIcon from "../assets/images/filter.png";
import Sidebar from "../components/Sidebar";

const DesigningPage = () => {
  const navigate = useNavigate();

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterData, setFilterData] = useState({
    traineeName: "",
    courseName: "",
    duration: "",
    classMode: "",
  });

  const [showAddModal, setShowAddModal] = useState(false);

 
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [course, setCourse] = useState("");
  const [mode, setMode] = useState("Online");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

 const handleFilterChange = (e) => {
  const { name, value } = e.target;
  setFilterData({ ...filterData, [name]: value });


};

 const handleApplyFilter = () => {
  const { traineeName, courseName, duration, classMode } = filterData;

  const validTrainees = ["Kavya R", "Arun S", "Deepa K", "Ravi T", "Sneha P", "Manoj N"];
  const validCourses = ["UI/UX Design", "React JS", "UX Writing", "Node.js", "Figma", "Full Stack"];
  const validDurations = ["45 Days", "60 Days", "90 Days", "120 Days", "180 Days"];

  const isValidTrainee = validTrainees.some(
    (name) => name.toLowerCase() === traineeName.trim().toLowerCase()
  );

  const isValidCourse = validCourses.some(
    (course) => course.toLowerCase() === courseName.trim().toLowerCase()
  );

  const isValidDuration = validDurations.some(
    (d) => d.toLowerCase() === duration.trim().toLowerCase()
  );

 
  if (isValidTrainee || isValidCourse || isValidDuration || classMode === "Online" || classMode === "Offline") {
    if (classMode === "Online") {
      navigate("/online-trainees");
    } else if (classMode === "Offline") {
      navigate("/offline-trainees");
    }
    setShowFilterModal(false);
  } else {
    alert("Please enter at least one valid field or select class mode to proceed.");
  }
};

  const handleAddTraineeSubmit = (e) => {
    e.preventDefault();

    const updated = {
      name,
      duration,
      course,
      mode,
      email,
      phone,
      image: "https://via.placeholder.com/100", 
    };

    const existing = JSON.parse(localStorage.getItem("trainees")) || [];
    localStorage.setItem("trainees", JSON.stringify([...existing, updated]));

    setShowAddModal(false);

  
    setName("");
    setDuration("");
    setCourse("");
    setMode("Online");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        {/* Header Row */}
        <div className="header-row">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <div className="searchicondiv">
              <img src={searchIcon} alt="search" />
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn-secondary" onClick={() => setShowFilterModal(true)}>
              <img src={filterIcon} alt="filter" style={{ width: 16, marginRight: 6 }} />
              Filter
            </button>
            <button className="btn-primary btn-addtrainee" onClick={() => setShowAddModal(true)}>
              + Add Trainees
            </button>
          </div>
        </div>

      
        <TrainerAndExamRow />

      
        <UploadQuestionPaper />

      
        {showFilterModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <button className="modal-close-btn" onClick={() => setShowFilterModal(false)} aria-label="Close filter modal">
                &times;
              </button>

              <h2>Filter By</h2>
              <hr />
              <form className="modal-form" onSubmit={(e) => { e.preventDefault(); handleApplyFilter(); }}>
                <label htmlFor="traineeName">Trainee Name</label>
                <input
                  type="text"
                  id="traineeName"
                  name="traineeName"
                  placeholder="e.g. Kavya R"
                  value={filterData.traineeName}
                  onChange={handleFilterChange}
                />

                <label htmlFor="courseName">Course Name</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  placeholder="e.g. UI/UX Design"
                  value={filterData.courseName}
                  onChange={handleFilterChange}
                />

                <label htmlFor="duration">Duration</label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  placeholder="e.g. 90 Days"
                  value={filterData.duration}
                  onChange={handleFilterChange}
                />

                <label>Class Mode</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="classMode"
                      value="Online"
                      checked={filterData.classMode === "Online"}
                      onChange={handleFilterChange}
                    />
                    Online
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="classMode"
                      value="Offline"
                      checked={filterData.classMode === "Offline"}
                      onChange={handleFilterChange}
                    />
                    Offline
                  </label>
                </div>

                <div className="modal-actions">
                  <button type="submit" className="btn-primary">
                    Apply Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h2>Add New Trainee</h2>
              <button onClick={() => setShowAddModal(false)} className="close-btn">
                X
              </button>
              <form onSubmit={handleAddTraineeSubmit} className="modal-form">
                <label>Trainee Name</label>
                <input
                  placeholder="Kavya R"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label>Duration</label>
                <input
                  placeholder="90 Days"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
                <label>Course Name</label>
                <input
                  placeholder="UI/UX Design"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
                <label>Class Mode</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      value="Online"
                      checked={mode === "Online"}
                      onChange={() => setMode("Online")}
                    />{" "}
                    Online
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Offline"
                      checked={mode === "Offline"}
                      onChange={() => setMode("Offline")}
                    />{" "}
                    Offline
                  </label>
                </div>
                <label>Email</label>
                <input
                  placeholder="kavyauiux@vts.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                />
                <label>Phone</label>
                <input
                  placeholder="9156800278"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type="tel"
                />
                <button type="submit" className="btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesigningPage;
