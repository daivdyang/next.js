import BlogList from '@/components/blog/BlogList';
import { BlogItemInfo } from '@/components/blog/types';
import { mdCache } from './data'

export default async function Page() {
  const list = await mdCache()

  const blogs = list.map<BlogItemInfo>(({ date, title, displayDate, description, stats }) => {
    return {
      id: date,
      title,
      description,
      date: displayDate,
      readingTime: stats.text
    }
  })

  return (
    <div className="flex flex-col">
      <BlogList list={blogs} />
    </div>
  )
}