import React from "react";
import { useLocation } from "react-router-dom";
import ProfileCard from "../components/profile/ProfileCard";
import Calendar from "../components/profile/Calender";
import UpcomingExams from "../components/profile/UpcomingExams";
import Sidebar from "../components/Sidebar";

const DevelopmentPage = () => {
  const location = useLocation();

  const trainee =
    location.state?.trainee ||
    JSON.parse(localStorage.getItem("selectedTrainee")) || {
      name: "Default Name",
      course: "Default Course",
      image: "/default-profile.png",
    };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="exam-container">
        <header className="exam-headerbar">
          <img src={trainee.image} alt={trainee.name} className="user-img" />
          <div>
            <h3>Welcome {trainee.name}</h3>
            <p>{`It's ${new Date().toLocaleDateString(undefined, {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}`}</p>
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
    </div>
  );
};

export default DevelopmentPage;
