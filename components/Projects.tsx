"use client"
import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useSectionInView } from '@/lib/hooks'
export default function Projects() {
  const { ref }= useSectionInView("Projects",0.5)
  return (
    <section id="projects" className='scroll-mt-28' ref={ref}>
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
