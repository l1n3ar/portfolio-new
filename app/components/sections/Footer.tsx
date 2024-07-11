import React from 'react'
import Image from 'next/image'
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation'

const Footer = () => {
  return (
    <footer className="w-2/3 z-50 rounded-full shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 MehulChattopadhyay™. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="me-4 md:me-6">
            <a href="mailto:mehulchattopadhyaypersonal@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src="/mail.png" alt="Gmail" width={24} height={24} className="hover:underline" />
            </a>
          </li>
          <li className="me-4 md:me-6">
            <a href="https://www.linkedin.com/in/mehulchattopadhyay/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} className="hover:underline" />
            </a>
          </li>
          <li className="me-4 md:me-6">
            <a href="https://open.spotify.com/user/31cgtkk2yct7ld4j5vl42pyywau4" target="_blank" rel="noopener noreferrer">
              <Image src="/spotify.png" alt="Spotify" width={24} height={24} className="hover:underline" />
            </a>
          </li>
         
        </ul>
      </div>
    </footer>
  )
}

export default Footer
