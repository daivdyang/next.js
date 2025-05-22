import BlogList from '@/components/blog/BlogList';
import { BlogItemInfo } from '@/components/blog/types';
import { mdCache } from './data'

const Unknown = 'Unknown'

export default async function Page() {
  const list = await mdCache()

  const blogs = list.map<BlogItemInfo>(({ date, content }) => {
    const [d] = /\d{4}-\d{2}-\d{2}/.exec(date) ?? []
    const [,title] = /^# (.+)\n/.exec(content) ?? []
    const [,description] = /#.+\n\n(.+)/.exec(content) ?? []

    return {
      id: date,
      title: title ?? Unknown,
      description: !description ? Unknown : description.slice(0, 20) + '...',
      date: d ?? Unknown,
    }
  })

  return (
    <div className="flex flex-col">
      <BlogList list={blogs} />
    </div>
  )
}