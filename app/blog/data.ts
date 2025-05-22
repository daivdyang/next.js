import { cache } from 'react'

export const mdFileList = [
  { date: '2025-05-14-01.md' },
  { date: '2025-04-14-02.md' },
  { date: '2025-04-14-01.md' },
  { date: '2025-02-05-01.md' },
  { date: '2024-11-08-01.md' },
]

// markdown file path
const getUrl = (date: string) => `https://github.com/daivdyang/next.js/raw/refs/heads/main/posts/${date}`

type MarkDownInfo = {
  /** create date */
  date: string
  content: string
}

// markdown file list cache
export const mdCache = cache(async () => {
  const list: MarkDownInfo[] = []
  for(const { date } of mdFileList) {
    const url = getUrl(date)
    const mdContent = await await (await fetch(url, { next: { revalidate: 24 * 3600 } })).text()
    list.push({ date, content: mdContent })
  }

  return list
})