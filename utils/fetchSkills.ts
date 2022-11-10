import { SkillType } from '@type'

const fetchSkills = async (): Promise<SkillType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

  const data = await res.json()

  const { skills }: { skills: SkillType[] } = data

  return skills
}

export default fetchSkills
