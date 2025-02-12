import React from 'react'
import SingleSkill from './SingleSkill' 
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa' 
import { IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaGit } from 'react-icons/fa'  
import { FaPython } from 'react-icons/fa' 

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt, 
  },
  {
    skill: "JavaScript", 
    icon: IoLogoJavascript,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Git",
    icon: FaGit,  
  },
  {
    skill: "Python",
    icon: FaPython,  
  }
]

const AllSkill = () => {
  return (
    <div>
      <div className='flex items-center justify-center  mt-10 relative gap-2 max-w-[1200px] mx-auto'>
        {skills.map((items, index) => {
          return <SingleSkill key={index} text={items.skill} imgsvg={<items.icon />} />
        })}
      </div>
    </div>
  )
}

export default AllSkill