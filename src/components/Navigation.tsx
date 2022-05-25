import React, { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-12 pb-12 pt-6">
      <img
        src="/images/logo-bookmark.svg"
        alt="Bookmark logo"
        className="sm:w-44"
      />

      <img
        src="/images/icon-hamburger.svg"
        alt="open nav"
        className="w-8 sm:hidden"
      />
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
    </nav>
  )
}

export default Navigation
