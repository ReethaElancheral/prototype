import React, { useState, useEffect } from "react";
import searchIcon from "../../assets/images/search.png";
import bellIcon from "../../assets/images/Notification.png";
import userImg from "../../assets/images/img3.png";

const HeaderRow = ({ notificationsCount = 3 }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="header-row">
      <div className="greeting-date">
        <h2>Good Morning!</h2>
        <p>It's {currentDate}</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <div className="searchicondiv">
          <img src={searchIcon} alt="Search" />
        </div>
      </div>

      <div className="search-notify-profile">
        <div className="notification">
          <img src={bellIcon} alt="Notifications" />
          {notificationsCount > 0 && (
            <span className="notify-count">{notificationsCount}</span>
          )}
        </div>

        <div className="user-profile">
          <img src={userImg} alt="User Profile" />
        </div>
      </div>
    </div>
  );
};

export default HeaderRow;
