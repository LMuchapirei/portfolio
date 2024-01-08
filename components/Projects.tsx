import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
export default function Projects() {
  return (
    <section id="projects" className='scroll-mt-28'>
        <SectionHeading title='My Projects' children/>
        <div>
          { projectsData.map((project,index)=>(
            <React.Fragment key={project.title+index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
    </section>
  )
}
