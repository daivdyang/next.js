import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { mdCache } from '../data'
import { redirect } from 'next/navigation'
// import addClasses from 'rehype-add-classes'

export async function generateStaticParams() {
  // github markdown file list
  const list = await mdCache()
  return Promise.resolve(list)
}

function replaceImageUrl(input: string) {
  // ../public/img/posts/2025-02-05/01.png -> https://raw.githubusercontent.com/daivdyang/next.js/main/public/img/posts/2025-02-05/01.png
  return input.replace(/\.{2}\/public\/img\/posts/gim, 'https://raw.githubusercontent.com/daivdyang/next.js/main/public/img/posts')
}

export default async function Page({ params } :{ params : Promise<{ date: string }> }) {
  const { date } = await params
  const list = await mdCache()
  const post = list.find(post => post.date === date)

  if (!post) {
    return redirect('/not-found')
  }
  const fileContent = replaceImageUrl(post.content)
  const processContent = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    // .use(addClasses, {
    //   h1: 'text-[4rem]',
    //   code: 'lang-js', // add custom classname
    //   p: 'px-4'
    // })
    .use(rehypeStringify)
    .process(fileContent)
  const htmlContent = processContent.toString()

  return (
    <div>
      <div className='flex justify-between py-2'>
        <div>{post.displayDate}</div>
        <div className='text-[gray]'>{post.stats.text}</div>
      </div>
      <article className='prose lg:prose-xl' dangerouslySetInnerHTML={{ __html: htmlContent }}></article>
    </div>
  )
}