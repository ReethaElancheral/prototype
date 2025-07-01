import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import submitimage from "../../assets/images/submitimg.png";


const TechnicalQuestions = () => {
    const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const questions = Array(10).fill("Where label text can be aligned ?");
  const options = ["Top", "Right", "Center", "Left"];
  const currentQuestions = questions.slice((page - 1) * 5, page * 5);

  const [answers, setAnswers] = useState({});

const handleAnswerChange = (questionIndex, selectedOption) => {
  setAnswers((prev) => ({
    ...prev,
    [questionIndex]: selectedOption,
  }));
};
  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < 2) setPage(page + 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="technical-container">
        <h2 className="technical-title">Figma Technical Questions</h2>

        {!submitted ? (
          <div className="technical-question-box">
            <form className="technical-form">
              {currentQuestions.map((q, idx) => (
                <div className="technical-question-row" key={idx}>
                  <p className="technical-question-text">
                    {(page - 1) * 5 + idx + 1}. {q}
                  </p>
                  <div className="technical-options">
                    {options.map((opt, i) => (
                      <label key={i} className="technical-option-label">
                       <input
  type="radio"
  name={`q${(page - 1) * 5 + idx}`} 
  value={opt}
  checked={answers[(page - 1) * 5 + idx] === opt}
  onChange={() => handleAnswerChange((page - 1) * 5 + idx, opt)}
/>

                        {opt}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </form>

            <div className="technical-navigation">
              {page === 2 && (
                <button
                  className="technical-btn technical-prev"
                  onClick={handlePrev}
                >
                  Previous
                </button>
              )}
              {page === 1 && (
                <button
                  className="technical-btn technical-next"
                  onClick={handleNext}
                >
                  Next
                </button>
              )}
              {page === 2 && (
                <button
                  className="technical-btn technical-submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : (
         <div className="technical-success">
  <img
    src = {submitimage}
    alt="Success"
    className="success-image"
  />
  <p className="thanku"> Thank You. Your response <br/>has been submitted.</p>
  <button className="technical-btn technical-done" onClick={() => navigate("/home")}>
    Done
  </button>
</div>

        )}
      </div>
    </div>
  );
};

export default TechnicalQuestions;
