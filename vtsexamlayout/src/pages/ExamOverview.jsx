import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UpcomingExams from "../components/profile/UpcomingExams";
import ProfileCard from "../components/profile/ProfileCard";
import Calendar from "../components/profile/Calender";
import Sidebar from "../components/Sidebar";

const ExamOverview = () => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const trainee = location.state?.trainee || {
    image: "/default-profile.png", 
    name: "Default Name",
    course: "Default Course"
  };

  return (
   
    <div className="exam-container">
      <header className="exam-headerbar">
        <img src={trainee.image} alt={trainee.name} className="user-img" />
        <div>
          <h3>Welcome {trainee.name}</h3>
          <p>{`It's ${new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`}</p>
        </div>
      </header>

      <main className="exam-main">
        <UpcomingExams trainee={trainee} />
        <div className="right-column">
          <ProfileCard trainee={trainee} />
          <Calendar />
        </div>
      </main>
    </div>
  
  );
};

export default ExamOverview;
