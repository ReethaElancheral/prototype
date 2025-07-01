
import Sidebar from "../components/Sidebar";
import HeaderRow from "../components/homecontent/HeaderRow";
import StatsRow from "../components/homecontent/StatsRow";
import TrainerAndExamRow from "../components/homecontent/TrainerAndExamRow";
import UploadQuestionPaper from "../components/homecontent/UploadQuestionPaper";

const Home = () => {
     const handleLogout = () => {
    localStorage.removeItem("examUser");
    window.location.href = "/";
  };
  return (
    <div className="home-container">
         
      <Sidebar />
       <main className="main-content">
        <HeaderRow notificationsCount={3} />
      <StatsRow/>
        <TrainerAndExamRow/>
        <UploadQuestionPaper/>
      </main>
    </div>
  );
};

export default Home;
