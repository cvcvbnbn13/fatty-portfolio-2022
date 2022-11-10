/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { CareerType } from '@type'
import { urlFor } from 'sanity'

interface IProps {
  career: CareerType
}

const ExperienceCard: NextPage<IProps> = ({ career }) => {
  return (
    <article className="flex flex-col rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-screen lg:w-[100%] snap-center bg-[#1c1c1c] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-300 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover objec-center"
        src={urlFor(career?.companyImage).url()}
      />

      <div className="px-4">
        <h4 className="text-4xl font-light">{career?.jobTitle}</h4>
        <p className="text-2xl mt-1 font-bold">{career?.company}</p>
        <div className="flex space-x-2 my-2">
          {career?.technologies.map(tech => (
            <img
              key={tech.asset._ref}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech).url()}
              alt=""
            />
          ))}
        </div>
        <p className="py-5 text-gray-300">
          {new Date(career.dateStarted).toDateString()} -{' '}
          {career.isCurrnetlyWorkingHere
            ? 'Now'
            : new Date(career.dateEnded).toDateString()}
        </p>

        <ul className="list-disc list-inside space-y-4 ml-5 text-lg h-0 sm:h-fit overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] pr-2 sm:pr-0">
          {career?.points.map(point => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
