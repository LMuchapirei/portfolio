"use client"
import { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName } from '@/lib/types'
import React, { useState,createContext, useContext } from 'react'


export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({children}:ActiveSectionContextProviderProps) {
  const [activeSection,setActiveSection] = useState<SectionName>('Home')
  const [timeOfLastClick,setTimeOfLastClick] = useState(0) // Disable the observer api for a bit when user clicks
  return (
    <ActiveSectionContext.Provider value={{activeSection,setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
       {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext)
    if(context === null){
        throw new Error("useActiveSectionContext must be used within a ActiveSectionContextProvider")
    }
    return context;
}