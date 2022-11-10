import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { SkillType } from '@type'

const query = groq`*[_type == "skill"]`

type Data = {
  skills: SkillType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const skills: SkillType[] = await sanityClient.fetch(query)
    res.status(200).json({ skills })
  } catch (error) {
    console.error(error)
  }
}
