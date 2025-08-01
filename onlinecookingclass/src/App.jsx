import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import './index.css';

import ScrollToTop from './components/footercomponents/ScrollToTop';
import Navbar from './components/home/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/home/Footer';
import AboutPage from './pages/AboutPage';
import BakeryProgramPage from './pages/BakeryProgramPage';
import CourseIngredientPage from './pages/CourseIngredientPage';
import CloudKitchenPage from './pages/CloudKitchenPage';
import LoginSignupPage from './pages/LoginSignupPage';
import EnrollmentPage from './pages/EnrollmentPage';
import ForgotPage from './pages/ForgotPage';
import FeaturedCoursesPage from './pages/FeaturedCoursesPage';
import ContactPage from './pages/ContactPage';

function App() {


  return (
    <>
   
     <Router>
      <div className="min-h-screen bg-[#E6E6FA] font-poppins text-black">
      <Navbar/>
      
        <main>
         <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/featured-course" element={<FeaturedCoursesPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/bakery-business" element={<BakeryProgramPage/>} />
            <Route path="/cloud-kitchen" element={<CloudKitchenPage/>} />
            <Route path="/homestyle-dishes" element={<CourseIngredientPage/>} />
            <Route path="/loginsignup" element={<LoginSignupPage/>} />
            <Route path="/forgot-password" element={<ForgotPage/>} />
            <Route path="/enroll" element={<EnrollmentPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
          </Routes>
         
        </main>
        <Footer/>
      </div>
    </Router>
    
    </>
  )
}

export default App
