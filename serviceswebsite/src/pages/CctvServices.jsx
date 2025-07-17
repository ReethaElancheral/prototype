import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Hero from '../components/cctvservices/Hero'
import Footer from '../components/homepage/Footer'
import ServicesHero from '../components/cctvservices/ServicesHero'
import OurServices from '../components/cctvservices/OurServices'
import Cctvlastsec from '../components/cctvservices/Cctvlastsec'

const CctvServices = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br/>
        <br/>
     <Hero/>
     <ServicesHero/>
     <OurServices/>
     <Cctvlastsec/>
      </main>
      <Footer />
    </div>
  )
}

export default CctvServices