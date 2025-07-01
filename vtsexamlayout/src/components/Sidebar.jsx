// import { useNavigate } from "react-router-dom";
// import brandLogo from "../assets/images/homelogo.png";
// import overviewIcon from "../assets/images/Overview.png";
// import designingIcon from "../assets/images/Design.png";
// import developmentIcon from "../assets/images/development.jpg";
// import examIcon from "../assets/images/Exam.png";
// import resultIcon from "../assets/images/result.png";

// const Sidebar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("examUser");
//     navigate("/");
//   };

//   return (
//     <div className="sidebar">
//       <div className="brand">
//         <img src={brandLogo} alt="Brand Logo" />
//         <h2>VTS Exam Portal</h2>
//       </div>
//       <ul className="nav-links">
//         <li onClick={() => navigate("/home")}>
//           <img src={overviewIcon} alt="Overview" /> Overview
//         </li>
//         <li onClick={() => navigate("/designing")}>
//           <img src={designingIcon} alt="Designing" /> Designing
//         </li>
//         <li onClick={() => navigate("/development")}>
//           <img src={developmentIcon} alt="Development" /> Development
//         </li>
//         <li onClick={() => navigate("/exam")}>
//           <img src={examIcon} alt="Exam" /> Exam
//         </li>
//         <li onClick={() => navigate("/result")}>
//           <img src={resultIcon} alt="Result" /> Result
//         </li>
//       </ul>
//       <button className="logout-btn" onClick={handleLogout}>
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import brandLogo from "../assets/images/homelogo.png";
import overviewIcon from "../assets/images/Overview.png";
import designingIcon from "../assets/images/Design.png";
import developmentIcon from "../assets/images/development.jpg";
import examIcon from "../assets/images/Exam.png";
import resultIcon from "../assets/images/result.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("examUser");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

 
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
    
      <button
        className="hamburger-btn"
        onClick={toggleSidebar}
        aria-label="Toggle navigation menu"
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          fontSize: "2rem",
          background: "none",
          border: "none",
          color: "#1f323a",
          cursor: "pointer",
          zIndex: 1100,
          display: "none", 
        }}
      >
        &#9776;
      </button>

 
      <div
        className="sidebar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "250px",
          backgroundColor: "#1f323a",
          color: "#fff",
          padding: "20px",
          display: isOpen ? "flex" : undefined, 
          flexDirection: "column",
          zIndex: 1000,
          transform: isOpen ? "translateX(0)" : "translateX(-260px)",
          transition: "transform 0.3s ease",
        }}
      >
        <div className="brand">
          <img src={brandLogo} alt="Brand Logo" />
          <h2>VTS Exam Portal</h2>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
              onClick={handleLinkClick}
            >
              <img src={overviewIcon} alt="Overview" /> Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/designing"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
              onClick={handleLinkClick}
            >
              <img src={designingIcon} alt="Designing" /> Designing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/development"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
              onClick={handleLinkClick}
            >
              <img src={developmentIcon} alt="Development" /> Development
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/exam"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
              onClick={handleLinkClick}
            >
              <img src={examIcon} alt="Exam" /> Exam
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/result"
              className={({ isActive }) =>
                isActive ? "active" : undefined
              }
              onClick={handleLinkClick}
            >
              <img src={resultIcon} alt="Result" /> Result
            </NavLink>
          </li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      
      <style>{`
        /* Hamburger visible only on mobile */
        @media (max-width: 767px) {
          .hamburger-btn {
            display: block !important;
          }
          .sidebar {
            position: fixed !important;
            transform: translateX(-260px);
          }
          .sidebar.open {
            transform: translateX(0);
          }
        }

        /* Sidebar always visible on tablet & desktop */
        @media (min-width: 768px) {
          .hamburger-btn {
            display: none !important;
          }
          .sidebar {
            transform: translateX(0) !important;
            position: static !important;
          }
        }

        /* Active NavLink styling */
        .nav-links li .active {
          font-weight: bold;
          padding-left: 10px;
          border-radius: 3px;
          display: flex;
          align-items: center;
        }

        .nav-links li a {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          padding: 10px 5px;
          border-radius: 3px;
        }


      `}</style>
    </>
  );
};

export default Sidebar;




