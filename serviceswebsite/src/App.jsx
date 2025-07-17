import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CctvServices from './pages/CctvServices'
import HomePage from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import ElectricalServices from './pages/ElectricalServices';
import BmsServices from './pages/BmsServices';
import ProjectsPage from './pages/ProjectsPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/Terms';

import '../src/styles/custom.css'


function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/quote" element={<ContactPage/>} />
        <Route path="/services/electrical" element={<ElectricalServices/>} />
        <Route path="/services/cctv" element={<CctvServices/>} />
        <Route path="/services/bms" element={<BmsServices/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/careers" element={<CareersPage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/terms" element={<TermsPage/>} />
       
        {/* other service routes */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
