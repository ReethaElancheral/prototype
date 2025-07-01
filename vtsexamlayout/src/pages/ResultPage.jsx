import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Sidebar from "../components/Sidebar";

const ResultPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [trainees, setTrainees] = useState([
    { name: "Kavya", trainer: "Priya", tech: 20, practical: 40 },
    { name: "Diya", trainer: "Priya", tech: 10, practical: 50 },
    { name: "Geetha", trainer: "Priya", tech: 15, practical: 45 },
    { name: "Keerthi", trainer: "Priya", tech: 10, practical: 60 },
    { name: "Sujitha", trainer: "Priya", tech: 20, practical: 30 },
    { name: "Ramu", trainer: "Priya", tech: 25, practical: 60 },
    { name: "Ram", trainer: "Priya", tech: 15, practical: 30 },
  ]);

  const totalMarks = 100;

  const handleDownload = () => {
    const input = document.getElementById("result-download-section");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("result.pdf");
    });
  };

  const handleChange = (index, field, value) => {
    const updated = [...trainees];
    updated[index][field] = parseInt(value) || 0;
    setTrainees(updated);
  };

  return (
    <div className="home-container">
      <Sidebar />
    <div className="result-container">
      <div className="result-cards">
        <div className="result-card">Total Trainees <span>15</span></div>
        <div className="result-card">Total Marks <span>100</span></div>
        <div className="result-card">No of Student Present <span>10</span></div>
        <div className="result-card">No of Student Absent <span>5</span></div>
      </div>

      <div id="result-download-section" className="result-table-section">
        <table className="result-table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Trainee's Name</th>
              <th>Trainer Name</th>
              <th>Technical Marks<br />(Out of 30)</th>
              <th>Practical Marks<br />(Out of 70)</th>
              <th>Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {trainees.map((t, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{t.name}</td>
                <td>{t.trainer}</td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      value={t.tech}
                      onChange={(e) => handleChange(index, "tech", e.target.value)}
                    />
                  ) : (
                    t.tech
                  )}
                </td>
                <td>
                  {isEditing ? (
                    <input
                      type="number"
                      value={t.practical}
                      onChange={(e) => handleChange(index, "practical", e.target.value)}
                    />
                  ) : (
                    t.practical
                  )}
                </td>
                <td>{t.tech + t.practical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="result-buttons">
        <button className="result-download-btn" onClick={handleDownload}>
          Download
        </button>
        <button className="result-edit-btn" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default ResultPage;
