import React, { useState, useRef } from "react";
import cloudIcon from "../../assets/images/cloud.png";

const UploadPractical = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (isValidFile(droppedFile)) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (isValidFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const isValidFile = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    return file && allowedTypes.includes(file.type) && file.size <= 10 * 1024 * 1024;
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-section">
      <h2>Upload Practical Question Paper</h2>

      <div
        className="upload-box"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <img src={cloudIcon} alt="Upload" className="upload-icon" />
        <p>Drag and Drop your files here</p>

        <button type="button" className="browse-btn" onClick={handleBrowseClick}>
          Browse Files
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />

        <small>Supported formats: PDF, DOC, DOCX (Max: 10MB)</small>
      </div>

      {file && (
        <div className="file-info">
          ✅ Uploaded: <strong>{file.name}</strong>
        </div>
      )}
    </div>
  );
};

export default UploadPractical;