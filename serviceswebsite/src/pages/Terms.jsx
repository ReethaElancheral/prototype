import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Footer from '../components/homepage/Footer'
import TermsofUse from '../components/privacy/TermsofUse'




const TermsPage = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br/>
        <br/>
       <TermsofUse/>
  
      </main>
      <Footer />
    </div>
  )
}

export default TermsPage;