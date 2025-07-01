import React from 'react'
import Sidebar from '../Sidebar'
import UploadTechnical from './DualQuestions1'
import UploadPractical from './Dualquestionstwo'



const UploadQuestions = () => {
    
  return (
 <>
    <div className="home-container">
      <Sidebar />
        <main className="main-content">
     <UploadTechnical/>
     <UploadPractical/>

      
      </main>

      </div>
 
 </>
  )
}

export default UploadQuestions