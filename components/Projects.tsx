"use client"
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Project from './Project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/activeSectionContext'
export default function Projects() {
  const {ref,inView} = useInView({threshold:0.5})
  const {setActiveSection} = useActiveSectionContext()
  useEffect(()=>{
    if(inView){
      setActiveSection("Projects")
    }
  },[inView,setActiveSection])
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
