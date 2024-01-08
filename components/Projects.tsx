import React, { useRef } from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Image from "next/image"
import { useScroll } from "framer-motion"
export default function Projects() {
  return (
    <section>
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
