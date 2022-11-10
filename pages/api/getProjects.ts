import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from '@type'

const query = groq`*[_type == "project"]{
  ...,
  technologies[]
}`

type Data = {
  projects: Project[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const projects: Project[] = await sanityClient.fetch(query)
    res.status(200).json({ projects })
  } catch (error) {
    console.error(error)
  }
}
