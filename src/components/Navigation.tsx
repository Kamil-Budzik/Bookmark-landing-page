import React, { useState } from 'react'

import MobileNav from './MobileNav'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeNav = () => setIsOpen(false)

  return (
    <nav className="flex items-center justify-between px-8 py-12">
      <img
        src="/images/logo-bookmark.svg"
        alt="Bookmark logo"
        className={`sm:w-44  ${isOpen ? 'hidden' : 'visible'}`}
      />

      <img
        src="/images/icon-hamburger.svg"
        alt={isOpen ? 'close navigation' : 'open navigation'}
        className={`w-8 cursor-pointer  sm:hidden ${
          isOpen ? 'hidden' : 'visible'
        }`}
        onClick={() => setIsOpen(true)}
      />
      {isOpen ? (
        <MobileNav closeNav={closeNav} />
      ) : (
        <ul className="hidden items-center sm:flex">
          <li className="mx-2  cursor-pointer transition hover:text-red md:mx-4">
            Features
          </li>
          <li className="mx-2  cursor-pointer transition hover:text-red md:mx-4">
            Pricing
          </li>
          <li className="mx-2  cursor-pointer transition hover:text-red md:mx-4">
            Contact
          </li>
          <li className="mx-2 md:mx-4">
            <button className="red-button">Login</button>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navigation
