import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Footer from '../components/homepage/Footer'
import PrivacyPolicy from '../components/privacy/PrivacyPolicy'



const PrivacyPage = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br/>
        <br/>
        <PrivacyPolicy/>
  
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPage;