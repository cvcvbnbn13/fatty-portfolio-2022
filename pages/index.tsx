/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import {
  Header,
  Hero,
  About,
  Career,
  Skills,
  Projects,
  ContactMe,
} from '@components'
import { CareerType, Project, PageInfo, SkillType, Social } from '@type'
import {
  fetchPageInfo,
  fetchCareer,
  fetchSocials,
  fetchProjects,
  fetchSkills,
} from '@utils'

interface IProps {
  // pageInfo: PageInfo
  career: CareerType[]
  skills: SkillType[]
  projects: Project[]
  socials: Social[]
}

const Home: NextPage<IProps> = ({
  // pageInfo,
  career,
  skills,
  projects,
  socials,
}) => {
  console.log(1)

  return (
    <div className="bg-[#1c2f2f] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">
      <Head>
        <title>Fatty&apos;s Portfolio</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Career */}
      <section id="career" className="snap-center">
        <Career career={career} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills.sort((a, b) => a.order - b.order)} />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contract Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full fliter grayscale hover:grayscale-0 cursor-pointer"
              src="logo.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<IProps> = async () => {
  // const pageInfo: PageInfo = await fetchPageInfo()
  const socials: Social[] = await fetchSocials()
  const career: CareerType[] = await fetchCareer()
  const skills: SkillType[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()

  return {
    props: {
      // pageInfo,
      socials,
      career,
      skills,
      projects,
    },

    revalidate: 10,
  }
}
