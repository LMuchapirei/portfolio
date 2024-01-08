import React from 'react'
type SectionHeadingProps =  {
  title: string,
  children: React.ReactNode
}
export default function SectionHeading(props:SectionHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{props.title}</h2>
  )
}
