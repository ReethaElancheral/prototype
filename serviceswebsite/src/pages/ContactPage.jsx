

import ContactForm from '../components/contact/ContactForm'
import ContactHero from '../components/contact/ContactHero'
import Footer from '../components/homepage/Footer'
import Navbar from '../components/homepage/Navbar'



const ContactPage = () => {
  return (
  <div className="flex flex-col min-h-screen">
     <Navbar/>
      <main className="flex-grow">
        <ContactHero/>
        <br/>
        <ContactForm/>
 
      </main>
    <Footer/>
    </div>
  )
}

export default ContactPage