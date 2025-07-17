
import Navbar from '../components/homepage/Navbar'
import Footer from '../components/homepage/Footer'
import CareerHero from '../components/careers/CareerHero'
import UserForm from '../components/careers/UserForm'



const CareersPage = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br/>
        <br/>
        <CareerHero/>
        <br/>
        <br/>
    <UserForm/>
      </main>
      <Footer />
    </div>
  )
}

export default CareersPage