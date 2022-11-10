import { Social } from '@type'

const fetchSocials = async (): Promise<Social[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)

  const data = await res.json()

  const { socials }: { socials: Social[] } = data

  return socials
}

export default fetchSocials
