import traineeIcon from "../../assets/images/totaltrainees.png";
import coursesIcon from "../../assets/images/courses.png";
import examsIcon from "../../assets/images/Exams.png";

const StatsRow = () => {
  const stats = [
    {
      title: "Total Trainees",
      count: 500,
      icon: traineeIcon,
      bgColor: "#FFDAB9", 
    },
    {
      title: "Active Courses",
      count: 15,
      icon: coursesIcon,
      bgColor: "#D4E157", 
    },
    {
      title: "Upcoming Exams",
      count: 12,
      icon: examsIcon,
      bgColor: "#F48FB1", 
    },
  ];

  return (
    <div className="stats-row">
      {stats.map(({ title, count, icon, bgColor }) => (
        <div className="stat-card" key={title} style={{ backgroundColor: bgColor }}>
          <div className="stat-left">
            <h3>{title}</h3>
            <p>{count}</p>
          </div>
          <div className="stat-icon">
            <div className="icon-circle">
              <img src={icon} alt={`${title} icon`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsRow;
