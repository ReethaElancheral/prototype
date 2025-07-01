import React from 'react';
import Sidebar from '../components/Sidebar';
import UpcomingExams from '../components/profile/UpcomingExams';
import ProfileCard from '../components/profile/ProfileCard';
import Calendar from '../components/profile/Calender';
import { useLocation } from 'react-router-dom';
import UpcomingExamsForExamPage from '../components/profile/UpcomingExamsForExamPage';

const ExamPage = () => {
  const location = useLocation();

 
  const trainee =
    location.state?.trainee ||
    JSON.parse(localStorage.getItem('selectedTrainee')) || {
      name: 'Default Name',
      course: 'Default Course',
      image: '/default-profile.png',
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
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}`}</p>
          </div>
        </header>

       <main className="exam-page-main upcomingexamforexampagediv"> 
  <div className="exam-page-left">
      <h1>Upcoming Exams</h1>
    <UpcomingExamsForExamPage />
  </div>
</main>

      </div>
    </div>
  );
};

export default ExamPage;
