import { CareerType } from '@type'

const fetchCareer = async (): Promise<CareerType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCareer`)

  const data = await res.json()

  const { career }: { career: CareerType[] } = data

  return career
}

export default fetchCareer
