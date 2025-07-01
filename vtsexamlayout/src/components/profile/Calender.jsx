import React, { useState } from "react";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", {
    month: "long",
  });

  const calendarDays = Array(firstDay)
    .fill(null)
    .concat([...Array(daysInMonth).keys()].map((d) => d + 1));

  const todayDate = today.getDate();
  const isCurrentMonth =
    currentMonth === today.getMonth() && currentYear === today.getFullYear();

  return (
    <div className="calendar-box">
      <div className="calendar-grid">
        <div className="calendar-header">
          <span>{monthName} {currentYear}</span>
          <div className="nav-buttons">
            <button onClick={handlePrevMonth}>&lt;</button>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>
        <div className="days">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="dates">
          {calendarDays.map((day, idx) => (
            <div
              key={idx}
              className={
                isCurrentMonth && day === todayDate ? "selected" : ""
              }
            >
              {day || ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
