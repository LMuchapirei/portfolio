"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin} from "react-icons/bs"
import { HiDownload} from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
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
        <motion.p 
        initial={{ opacity:0,y:100}}
        animate={{ opacity:1,y:0}}
        className='mb-10 mt-4  px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className="font-bold">Hello, I'm Linval.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js),Flutter and Swift UI</span>.
        </motion.p>

        <motion.div 
        initial={{ opacity:0,y:100}}
        animate={{ opacity:1,y:0}}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
            <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full">Contact me here <BsArrowRight/></Link>
            <a href="" className="bg-white px-7 py-3 flex items-center gap-2 rounded-full">Download Resume <HiDownload/></a>
            <a href="" className="bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full"><BsLinkedin/></a>
            <a href="" className="bg-white p-4 flex items-center text-gray-700 gap-2 text-[1.35rem] rounded-full"><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}
