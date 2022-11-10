import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { NextPage } from 'next'
import { SkillType } from '@type'

interface IProps {
  skills: SkillType[]
}

const Skills: NextPage<IProps> = ({ skills }) => {
  return (
    <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        技能
      </h3>

      <div className="lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-x-hidden lg:w-full w-[90%] flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        {skills.map(skill => (
          <Skill
            skillsArray={skill.points}
            title={skill.title}
            key={skill._id}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
