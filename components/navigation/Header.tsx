'use client'

import { usePathname } from 'next/navigation'
import headerNavLinks from '@/data/headerNavLinks'
// import Logo from '@/data/logo.svg'
import Link from '../mdxcomponents/Link'
import MobileNav from './MobileNav'
import ThemeSwitch from '../theme/ThemeSwitch'
// import SearchButton from '../search/SearchButton'
import { motion } from 'framer-motion'

const Header = () => {
  const pathname = usePathname()

  return (
    <header>
      <div className="flex items-center justify-between py-10">
        <div>
          <Link href={`/`}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                {/* <Logo /> */}
              </div>
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {'Knock Space'}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => {
              return link.href !== '/'
            })
            .map((link) => {
              const isSelected = pathname!.includes(link.href as string)
              return (
                <Link
                  key={link.title}
                  href={`${link.href}`}
                  className="flex transform-gpu items-center space-x-1 transition-transform duration-300"
                >
                  <div
                    className={`hidden font-medium ${
                      isSelected
                        ? 'text-heading-500'
                        : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
                    } relative rounded-md px-2 py-1 font-medium transition-colors sm:block`}
                  >
                    <span className="relative z-10">{`${link.title.toLowerCase()}`}</span>
                    {isSelected && (
                      <motion.span
                        layoutId="tab"
                        transition={{ type: 'spring', duration: 0.4 }}
                        className="absolute inset-0 z-0 rounded-md bg-gray-100 dark:bg-gray-600"
                      ></motion.span>
                    )}
                  </div>
                </Link>
              )
            })}
          {/* <SearchButton /> */}
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
