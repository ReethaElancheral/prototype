import React from "react";
import defaultImg from "../../assets/images/img5.png";

const ProfileCard = ({ trainee = {} }) => {
  const {
    image = defaultImg,
    name = "N/A",
    course = "Not Assigned"
  } = trainee;

  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-img" />
      <h2>{name}</h2>
      <p className="designation">{course}</p>

      <div className="progress-section">
        <p>Course Progress</p>
        <div className="progress">
          <label>Figma</label>
          <progress value="95" max="100" />
          <span>95%</span>
        </div>
        <div className="progress">
          <label>Adobe Photoshop</label>
          <progress value="20" max="100" />
          <span>20%</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
