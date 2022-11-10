import React from 'react'
import { NextPage } from 'next'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import { Social } from '@type'

interface IProps {
  socials: Social[]
}

const Header: NextPage<IProps> = ({ socials }) => {
  return (
    <header className="sticky top-0 p-5 flex item-start justify-between max-w-7xl mx-auto z-20 xl:item-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Icons */}
        {socials.map(item => (
          <SocialIcon
            key={item._id}
            url={item.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />
        <a href="#contact">
          <p className="hidden md:inline-flex text-sm text-gray-400">
            與我聯絡
          </p>
        </a>
      </motion.div>
    </header>
  )
}

export default Header
