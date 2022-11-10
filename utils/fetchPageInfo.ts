import { PageInfo } from '@type'

const fetchPageInfo = async (): Promise<PageInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

  const data = await res.json()

  const { pageInfo }: { pageInfo: PageInfo } = data

  return pageInfo
}

export default fetchPageInfo
