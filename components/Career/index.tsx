import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { NextPage } from 'next'
import { CareerType } from '@type'

interface IProps {
  career: CareerType[]
}

const Career: NextPage<IProps> = ({ career }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 text-center tracking-widest text-gray-500 text-2xl">
        前端工作經歷
      </h3>

      <div className="lg:grid lg:grid-cols-2 lg:gap-5 w-full lg:overflow-x-hidden flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        {career.map(item => (
          <ExperienceCard key={item._id} career={item} />
        ))}
      </div>
    </motion.div>
  )
}

export default Career
