import React from 'react'
import Navbar from '../components/homepage/Navbar'
import Footer from '../components/homepage/Footer'
import ProjectHero from '../components/projects/ProjectHero'
import ProjectElectrical from '../components/projects/ProjectElectrical'
import ProjectCctv from '../components/projects/ProjectCctv'
import ProjectBms from '../components/projects/ProjectBms'
import ProjectLastSec from '../components/projects/ProjectLastSec'





const ProjectsPage = () => {
  return (
  <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <br/>
        <br/>
 <ProjectHero/>
<ProjectElectrical/>
<ProjectCctv/>
<ProjectBms/>
<ProjectLastSec/>

      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage