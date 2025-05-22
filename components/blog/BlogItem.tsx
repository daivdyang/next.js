import { BlogItemInfo } from './types';
// import { FaCalendarAlt, FaStar } from 'react-icons/fa'; // Example icons

interface BlogItemProps {
  info: BlogItemInfo;
}

const BlogItem: React.FC<BlogItemProps> = ({ info }) => {
  const { title, description, date, isMilestone, readingTime } = info;

  // const defaultIconBgColor = isMilestone ? 'bg-amber-500' : 'bg-sky-500';
  // const defaultIconColor = 'text-white';
  // const iconSizeClass = isMilestone ? 'w-12 h-12 text-2xl' : 'w-10 h-10 text-xl';
  // const ringClass = isMilestone ? 'ring-4 ring-amber-200 dark:ring-amber-700' : 'ring-4 ring-sky-200 dark:ring-sky-700';

  // const currentIconBgColor = iconBgColor || defaultIconBgColor;
  // const currentIconColor = iconColor || defaultIconColor;

  // const renderIcon = () => {
  //   if (icon) return icon;
  //   return isMilestone ? <div>M</div> : <div>N</div>;
  // };

  return (
    <li className="mb-10 ms-6 relative">
      {/* Icon */}
      {/* <span
        className={`absolute flex items-center justify-center ${iconSizeClass} ${currentIconBgColor} ${currentIconColor} rounded-full -start-5 sm:-start-6 ${ringClass} z-10`}
      >
        {renderIcon()}
      </span> */}

      {/* Content */}
      <div className={`p-4 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 ${isMilestone ? 'bg-amber-50 dark:bg-amber-900' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <div className="items-center justify-between mb-3 sm:flex">
          <time className="mb-1 text-xs font-normal text-gray-500 sm:mb-0 dark:text-gray-400">
            {date}
          </time>
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-amber-900 dark:text-amber-300 ms-3">
            {readingTime}
          </span>
        </div>
        <h3 className={`text-lg font-semibold ${isMilestone ? 'text-amber-700 dark:text-amber-300' : 'text-gray-900 dark:text-white'}`}>
          {title}
        </h3>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </li>
  );
};

export default BlogItem;
