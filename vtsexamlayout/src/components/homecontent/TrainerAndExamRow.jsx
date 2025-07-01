import { useState } from "react";
import { useNavigate } from "react-router-dom";

import trainer1 from "../../assets/images/img1.png";
import trainer2 from "../../assets/images/img2.png"; 
import trainer3 from "../../assets/images/img3.png";

const TrainerAndExamRow = () => {
  const navigate = useNavigate();

  const [trainers, setTrainers] = useState([
    {
      name: "Priya",
      course: "UI/UX Designer",
      image: trainer1,
      trainees: 15,
    },
    {
      name: "Rithika",
      course: "UI/UX Designer",
      image: trainer2,
      trainees: 12,
    },
    {
      name: "Reshma",
      course: "UI/UX Designer",
      image: trainer3,
      trainees: 18,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    trainer: "",
    trainee: "",
    course: "",
    duration: "",
    classMode: "Online",
  });

  const handleAddTrainer = (e) => {
    e.preventDefault();
    const newTrainer = {
      name: formData.trainer,
      course: formData.course,
      image: trainer3, 
      trainees: Math.floor(Math.random() * 20) + 5, 
    };
    setTrainers([...trainers, newTrainer]);
    setShowModal(false);
    setFormData({
      trainer: "",
      trainee: "",
      course: "",
      duration: "",
      classMode: "Online",
    });
  };

  const upcomingExams = [
    {
      title: "Figma Technical Questions",
      duration: "30 Minutes",
      date: "June 15, 2025",
      time: "2:30 PM",
    },
    {
      title: "Figma Practical Questions",
      duration: "1 Day",
      date: "June 20, 2025",
      time: "10:00 AM",
    },
  ];

  return (
    <>
      
      <div className="trainers-header">
        <h3>Active Trainers</h3>
        <button className="btn-viewall">View All</button>
      </div>

      <div className="trainer-exam-row">
      
        <div className="trainers-col">
          <div className="add-btn-wrapper">
            <button
              className="btn-secondary"
              onClick={() => setShowModal(true)}
            >
              + Add New
            </button>
          </div>

          {trainers.map((trainer, idx) => (
            <div className="trainer-card" key={idx}>
              <div className="trainer-card-content">
                <div className="trainer-info">
                  <img src={trainer.image} alt={trainer.name} />
                  <div>
                    <h4>{trainer.name}</h4>
                    <p>{trainer.course}</p>
                  </div>
                </div>
                <button className="trainee-count-btn">
                  {trainer.trainees} Trainees
                </button>
              </div>
            </div>
          ))}

         
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-box">
                <h2>Add New Trainer</h2>
                <form onSubmit={handleAddTrainer} className="modal-form">
                  <input
                    type="text"
                    placeholder="Trainer Name"
                    value={formData.trainer}
                    onChange={(e) =>
                      setFormData({ ...formData, trainer: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Trainee Name"
                    value={formData.trainee}
                    onChange={(e) =>
                      setFormData({ ...formData, trainee: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Course Name"
                    value={formData.course}
                    onChange={(e) =>
                      setFormData({ ...formData, course: e.target.value })
                    }
                    required
                  />
                  <input
                    type="text"
                    placeholder="Duration"
                    value={formData.duration}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.target.value })
                    }
                    required
                  />

                  <div className="radio-group">
                    <label>
                      <input
                        type="radio"
                        name="classMode"
                        value="Online"
                        checked={formData.classMode === "Online"}
                        onChange={(e) =>
                          setFormData({ ...formData, classMode: e.target.value })
                        }
                      />
                      Online
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="classMode"
                        value="Offline"
                        checked={formData.classMode === "Offline"}
                        onChange={(e) =>
                          setFormData({ ...formData, classMode: e.target.value })
                        }
                      />
                      Offline
                    </label>
                  </div>

                  <div className="modal-actions">
                    <button type="submit" className="btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="btn-cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="exams-col">
          <div className="exam-header">
            <h3>Upcoming Exams</h3>
            <button
              className="btn-primary uploadexam"
              onClick={() => navigate("/uploadquestion")}
            >
              Upload New Exam
            </button>
          </div>

          {upcomingExams.map((exam) => (
            <div className="exam-card" key={exam.title}>
              <div className="exam-left">
                <h4>{exam.title}</h4>
                <p>Duration: {exam.duration}</p>
              </div>
              <div className="exam-right">
                <p>{exam.date}</p>
                <p>{exam.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainerAndExamRow;
