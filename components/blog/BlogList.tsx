import Link from 'next/link';
import BlogItem from './BlogItem';
import type { BlogItemInfo } from './types';

interface BlogListProps {
  list: BlogItemInfo[];
}

const BlogList: React.FC<BlogListProps> = ({ list }) => {
  if (!list || list.length === 0) {
    return <p className="text-center text-gray-500 dark:text-gray-400">No post to display.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ol className="relative border-s-0"> {/* Removed border-s from here, handled in item */}
        {list.map((info) => (
          <Link key={info.id} href={`/blog/${info.id}`}>
            <BlogItem
              info={info}
            />
          </Link>
        ))}
      </ol>
    </div>
  );
};

export default BlogList;
