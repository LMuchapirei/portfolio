"use client"
import React,{useEffect} from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/activeSectionContext'

export default function About() {
  const {ref,inView} = useInView({threshold:0.75})
  const {setActiveSection,timeOfLastClick} = useActiveSectionContext()
  useEffect(()=>{
    if(inView && Date.now()-timeOfLastClick > 1000){
      setActiveSection("About")
    }
  },[inView,setActiveSection,timeOfLastClick])
  return (
    <motion.section 
    id='about'
    initial={{ opacity:0,y:100}}
    animate={{ opacity:1,y:0}}
    transition={{ delay:0.175}}
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'>
        <SectionHeading title={"About Me"} children/>
        <p className='mb-3'> After graduating with a degree in{" "}
        <span className="font-medium">Software Engineering</span>, I decided to pursue my
        passion for app development. I focused mainly on {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        to create stuff that solve problems. I am <span className="underline">satisfied</span> with the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB for web then Flutter and  SwiftUI for mobile development
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to keep up
        with new technologies. I am currently exploring  how l can improve {" "}
        <span className="font-medium">UX/UI Design skills</span> as a software
        developer to create solution that are user centered and address users pain points.</p>
        <p> <span className="italic">When I'm not coding</span>, I enjoy playing
        video games(F1 23), watching documentaries, and of course a bit of youtube shorts for the fun jokes. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">sprituality and philosophy</span>. I'm also
        learning how to play the archery.</p>
    </motion.section>
  )
}
