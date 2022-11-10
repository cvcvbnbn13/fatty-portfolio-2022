import React from 'react'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { PageInfo } from '@type'

// interface IProps {
//   pageInfo: PageInfo
// }

const About: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 tracking-widest text-gray-500 text-2xl">
        關於我
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="resume.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        {/* <h4 className="text-4xl font-semibold">-------</h4> */}
        <p className="text-base md:text-xl text-justify">
          嗨，我是邵謙，一個轉職前端領域的法律人， 現已有兩份前端實習經驗，
          希望能透過工作的機會，貢獻現有的能力，
          並持續精進，將網頁開發領域的知識更加強化完整 。
          工作上注重團隊溝通協作，熱愛學習新事物新技術，
          此次應徵職缺方向為Front-end Engineer (前端工程師)。
        </p>
      </div>
    </motion.div>
  )
}

export default About
