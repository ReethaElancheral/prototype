import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Login from "./components/Login";
import Home from "./pages/Home"; 
import DesigningPage from "./pages/DesigningPage";
import DevelopmentPage from './pages/DevelopmentPage';
import ExamPage from './pages/ExamPage';
import OnlineTraineesPage from "./pages/OnlineTraineesPage"; 
import OfflineTraineesPage from './pages/OfflineTraineesPage'; 
import traineeImg1 from './assets/images/img1.png'
import traineeImg2 from './assets/images/img2.png'
import traineeImg3 from './assets/images/img3.png'
import traineeImg5 from './assets/images/img5.png'
import TechnicalQuestions from './components/question/TechnicalQuestions';
import UploadQuestions from './components/question/UploadQuestions';
import ResultPage from './pages/ResultPage';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("examUser");
  return user ? children : <Navigate to="/" replace />;
};

const App = () => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("traineesOnline")) {
        localStorage.setItem(
          "traineesOnline",
          JSON.stringify([
         {
              name: "Kavya R",
              duration: "90 Days",
              course: "UI/UX Design",
              mode: "Online",
              email: "kavyauiux@vts.in",
              phone: "9156800278",
              image: traineeImg1,
            },
            {
              name: "Diya S",
              duration: "120 Days",
              course: "React JS",
              mode: "Online",
              email: "arunreact@vts.in",
              phone: "9123456780",
              image: traineeImg2,
            },
            {
              name: "Ram K",
              duration: "60 Days",
              course: "UX Writing",
              mode: "Online",
              email: "deepak@vts.in",
              phone: "9876543210",
              image: traineeImg3,
            },
            {
              name: "Ramu T",
              duration: "45 Days",
              course: "Node.js",
              mode: "Online",
              email: "ravit@vts.in",
              phone: "9988776655",
              image: traineeImg5,
            },
            {
              name: "Sujitha P",
              duration: "90 Days",
              course: "Figma",
              mode: "Online",
              email: "snehafigma@vts.in",
              phone: "9001234567",
              image: traineeImg1,
            },
            {
              name: "Keerthi N",
              duration: "180 Days",
              course: " Python Full Stack",
              mode: "Online",
              email: "manojn@vts.in",
              phone: "9012345678",
              image: traineeImg2,
            },
          ])
        );
      }
      if (!localStorage.getItem("traineesOffline")) {
        localStorage.setItem(
          "traineesOffline",
          JSON.stringify([
            {
              name: "Rishi M",
              duration: "120 Days",
              course: "React JS",
              mode: "Offline",
              email: "rishioff@vts.in",
              phone: "9123456780",
              image: traineeImg5, 
            },
            {
                 name: "Nisha M",
                 duration: "90 Days",
                 course: "UI/UX Design",
                 mode: "Offline",
                 email: "kavyauiux@vts.in",
                 phone: "9156800278",
                 image: traineeImg3,
               },
               {
                 name: "Geetha M",
                 duration: "120 Days",
                 course: "React JS",
                  mode: "Offline",
                 email: "arunreact@vts.in",
                 phone: "9123456780",
                 image: traineeImg2,
               },
               {
                 name: "Karthi A",
                 duration: "60 Days",
                 course: "UX Writing",
               mode: "Offline",
                 email: "deepak@vts.in",
                 phone: "9876543210",
                 image: traineeImg1,
               },
               {
                 name: "Mannavan T",
                 duration: "45 Days",
                 course: "Node.js",
                  mode: "Offline",
                 email: "ravit@vts.in",
                 phone: "9988776655",
                 image: traineeImg5,
               },
               {
                 name: "Yazhs M",
                 duration: "90 Days",
                 course: "Figma",
              mode: "Offline",
                 email: "snehafigma@vts.in",
                 phone: "9001234567",
                 image: traineeImg3,
               },
               
          ])
        );
      }
    }
  }, []);



return(
  
  
  <BrowserRouter>
    <Routes>
     
      <Route path="/" element={<Login />} />

     
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/designing"
        element={
          <ProtectedRoute>
            <DesigningPage />
          </ProtectedRoute>
        }
      />
    
    <Route
  path="/exam"
  element={
    <ProtectedRoute>
      <ExamPage />
    </ProtectedRoute>
  }
/>
   
      <Route
        path="/online-trainees"
        element={
          <ProtectedRoute>
            <OnlineTraineesPage />
          </ProtectedRoute>
        }
      />
       <Route
          path="/offline-trainees"
          element={
            <ProtectedRoute>
              <OfflineTraineesPage />
            </ProtectedRoute>
          }
        />

      <Route
  path="/development"
  element={
    <ProtectedRoute>
      <DevelopmentPage />
    </ProtectedRoute>
  }
/>

    <Route
  path="/exam/technical"
  element={
    <ProtectedRoute>
      <TechnicalQuestions />
    </ProtectedRoute>
  }
/>
  <Route
  path="/uploadquestion"
  element={
    <ProtectedRoute>
      <UploadQuestions/>
    </ProtectedRoute>
  }
/>

   <Route
        path="/result"
        element={
          <ProtectedRoute>
            <ResultPage />
          </ProtectedRoute>
        }
      />

     
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
};

export default App;
