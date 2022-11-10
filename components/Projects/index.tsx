/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { Project } from '@type'
import { urlFor } from 'sanity'
import { SocialIcon } from 'react-social-icons'

interface IProps {
  projects: Project[]
}

const Projects: NextPage<IProps> = ({ projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        個人專案
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              className="sm:w-[300px] sm:h-[300px] w-0 h-0"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                個人專案{index + 1}: {project.title}
              </h4>
              <div className="flex flex-row space-x-10 justify-center">
                <a
                  href={project.linkToBuild}
                  className="hover:border-b border-[#f7ab0a]"
                >
                  <h4 className="text-2xl font-semibold text-[#f7ab0a]  text-center">
                    Demo
                  </h4>
                </a>
                <a
                  href={project.linkToGithub}
                  className="hover:border-b border-[#f7ab0a]"
                >
                  <h4 className="text-2xl font-semibold text-[#f7ab0a]  text-center">
                    Github
                  </h4>
                </a>
              </div>

              <p className="text-lg text-center md:text-left max-w-4xl">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ac0a]/20 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
