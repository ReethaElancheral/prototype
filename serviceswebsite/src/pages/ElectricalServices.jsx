import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Footer from '../components/homepage/Footer'
import ElectricalHero from '../components/electricalservices/ElectricalHero'
import ElectricalOurServices from '../components/electricalservices/ElectricalOurService'
import Electricallastsec from '../components/electricalservices/ElectricalLastSec'
import ElectricalServicesIn from '../components/electricalservices/ElectricalServicesIn'



const ElectricalServices = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br/>
        <br/>
        <ElectricalHero/>
       <ElectricalOurServices/>
        <ElectricalServicesIn/>
        <Electricallastsec/>
      </main>
      <Footer />
    </div>
  )
}

export default ElectricalServices;