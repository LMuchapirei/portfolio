"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin} from "react-icons/bs"
import { HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { useActiveSectionContext } from '@/context/activeSectionContext'
import { useInView } from 'react-intersection-observer'
import { useSectionInView } from '@/lib/hooks'
export default function Intro() {
  const { ref }= useSectionInView("Home",0.5)
  return (
    <section id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    ref={ref}
    >
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{ opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{type:"tween",duration:0.2}}
                >
                <Image 
                   alt='linval/image'
                   width="192"
                   height="192"
                   quality="95"
                   priority={true}
                   src={"/profile_p.jpg"}
                   className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
                   />
                </motion.div>
                <motion.span
                 initial={{ opacity:0,scale:0}}
                 animate={{ opacity:1,scale:1}}
                 transition={{
                    type:"spring",
                    stiffness:125,
                    delay:0.1,
                    duration:0.7
                 }}
                 className='text-4xl absolute bottom-0 right-0'>👋</motion.span>
            </div>
        </div>
        <motion.h1 
        initial={{ opacity:0,y:100}}
        animate={{ opacity:1,y:0}}
        className='mb-10 mt-4  px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, I'm Linval.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js),Flutter and Swift UI</span>.
        </motion.h1>

        <motion.div 
        initial={{ opacity:0,y:100}}
        animate={{ opacity:1,y:0}}
        transition={{delay:0.1}}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 
            flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110  active:scale-105 transition">Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            
            <a href="" className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10
            ">Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /></a>

            <a href="https://www.linkedin.com/in/linval-muchapirei-07a67617a/" target='_blank' className="group bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10
            "><BsLinkedin className='opacity-60 group-hover:translate-y-1 transition'/></a>

            <a href="https://github.com/LMuchapirei" target='_blank' className="group bg-white p-4 flex items-center text-gray-700 gap-2 text-[1.35rem] rounded-full
            outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10
            "><FaGithubSquare className='opacity-60 group-hover:translate-y-1 transition'/></a>
        </motion.div>
    </section>
  )
}
