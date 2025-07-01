import { useNavigate } from "react-router-dom";

const UpcomingExams = ({ trainee }) => {
  const navigate = useNavigate();

  const exams = [
    {
      title: "Figma Technical Questions",
      duration: "30 Minutes",
      date: "May 15, 2025",
      time: "2:30 PM",
    },
    {
      title: "Figma Practical Questions",
      duration: "1 Day",
      date: "May 16, 2025",
      time: "4:00 PM",
    },
  ];

  const handleStartExam = () => {
   
    navigate("/exam", { state: { trainee } });
  };

  return (
    <div className="exam-box">
      <div className="exam-header">
        <h3>Upcoming Exams</h3>
        <button className="start-btn" onClick={handleStartExam}>
          Start a Exam
        </button>
      </div>

      {exams.map((exam, index) => (
        <div className="exam-card" key={index}>
          <div>
            <h4>{exam.title}</h4>
            <p>Duration: {exam.duration}</p>
          </div>
          <div className="exam-date">
            <strong>{exam.date}</strong>
            <p>{exam.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingExams;
