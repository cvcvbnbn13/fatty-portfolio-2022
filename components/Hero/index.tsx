/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from '@components'
import { NextPage } from 'next'
import Link from 'next/link'
import { PageInfo } from '@type'

interface IProps {
  pageInfo: PageInfo
}

const Hero: NextPage = () => {
  const [text, count] = useTypewriter({
    words: [`嗨，我是邵謙`, '一個轉職前端領域的自我學習者'],
    loop: true,
    delaySpeed: 3000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent-tpe1-1.xx.fbcdn.net/v/t31.18172-8/24883213_1984429734918203_258734237170618325_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V7qh9jr4qjYAX_dIVI5&_nc_ht=scontent-tpe1-1.xx&oh=00_AfB9Rl2e3I02WpvNYQNFY3QnN-j3417S9IujhyjqoxgNvA&oe=63D254C3"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-4 tracking-[15px]">
          Frontend Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">關於我</button>
          </Link>
          <Link href="#career">
            <button className="heroBtn">工作經歷</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">技能</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">作品集</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
