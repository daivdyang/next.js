import { cache } from 'react'
import readingTime, { type ReadTimeResults } from 'reading-time'

export const mdFileList = [
  { date: '2025-07-27-01.md' },
  { date: '2025-05-14-01.md' },
  { date: '2025-04-14-02.md' },
  { date: '2025-04-14-01.md' },
  { date: '2025-03-09-01.md' },
  { date: '2025-02-05-01.md' },
  { date: '2024-11-08-01.md' },
]

// markdown file path
const getUrl = (date: string) => `https://github.com/daivdyang/next.js/raw/refs/heads/main/posts/${date}`

type MarkDownInfo = {
  /** create date */
  date: string
  content: string
  stats: ReadTimeResults
  displayDate: string
  title: string
  description: string
}

const Unknown = 'Unknown'

// markdown file list cache
export const mdCache = cache(async () => {
  const list: MarkDownInfo[] = []
  for(const { date } of mdFileList) {
    const url = getUrl(date)
    const mdContent = await await (await fetch(url, { next: { revalidate: 24 * 3600 } })).text()
    const stats = readingTime(mdContent)
    const [displayDate] = /\d{4}-\d{2}-\d{2}/.exec(date) ?? []
    const [,title] = /^# (.+)\n/.exec(mdContent) ?? []
    const [,description] = /#.+\n\n(.+)/.exec(mdContent) ?? []

    list.push({
      date,
      content: mdContent,
      stats,
      displayDate: displayDate ?? Unknown,
      title: title ?? Unknown, 
      description: !description ? Unknown : description.slice(0, 20) + '...' 
    })
  }

  return list
})