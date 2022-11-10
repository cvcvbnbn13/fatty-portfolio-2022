import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { CareerType } from '@type'

const query = groq`*[_type == "career"]{
  ...,
  technologies[]
}`

type Data = {
  career: CareerType[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const career: CareerType[] = await sanityClient.fetch(query)

  res.status(200).json({ career })
}
