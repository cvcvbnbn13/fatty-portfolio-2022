import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'

interface IProps {
  title: string
  skillsArray: string[]
}

const Skill: NextPage<IProps> = ({ title, skillsArray }) => {
  return (
    <article className="flex flex-col w-screen lg:w-fit rounded-lg items-center space-y-7 flex-shrink-0  snap-center bg-[#1c1c1c] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-300 overflow-hidden shadow-[5px 5px 2px 0 #f7ab0a] ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="px-0 md:px-10"
      >
        <h4 className="text-4xl font-light mb-8">{title}</h4>

        <ul className="space-y-4 list-disc list-inside text-lg max-h-80 overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
          {skillsArray.map(skill => (
            <li className="pr-2" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    </article>
  )
}

export default Skill
