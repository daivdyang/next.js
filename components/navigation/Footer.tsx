'use client'

import Link from '../mdxcomponents/Link'
// import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mt-16 flex flex-col items-center">
          {/* <div className="mb-3 flex space-x-4">
            <div className="flex items-center">
              {siteMetadata.formspree === false ? (
                <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              ) : (
                <button className="flex items-center focus:outline-none" onClick={ContactClick}>
                  <SocialIcon kind="mail" size={6} />
                </button>
              )}
            </div>
            <div className="flex items-center">
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            </div>
            <div className="flex items-center">
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            </div>
            <div className="flex items-center">
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            </div>
            <div className="flex items-center">
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            </div>
            <div className="flex items-center">
              <SocialIcon kind="x" href={siteMetadata.x} size={6} />
            </div>
            <div className="flex items-center">
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
            </div>
            <div className="flex items-center">
              <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
            </div>
          </div> */}
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{'Knock'}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` • `}</div>
            <Link href="https://github.com/daivdyang/next.js">{'Github'}</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
