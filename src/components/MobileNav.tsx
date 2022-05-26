import React from 'react'

interface Props {
  closeNav: () => void
}

const MobileNav = ({ closeNav }: Props) => {
  return (
    <nav className="absolute top-0 bottom-0 left-0 right-0 bg-blue-700 opacity-95">
      <div className="flex items-center justify-between px-8 py-12">
        <header>
          <img
            className="w-44 fill-white "
            src="/images/logo-dark.svg"
            alt="Bookmark logo"
          />
        </header>
        <img
          src="/images/icon-close.svg"
          alt="Close nav"
          className="w-8 cursor-pointer fill-white"
          onClick={closeNav}
        />
      </div>
      <div className="flex h-4/5 flex-col justify-between">
        <ul className="mx-8 flex h-2/5 flex-col items-center divide-y divide-slate-700 ">
          <li className="w-full cursor-pointer py-4 text-center text-xl uppercase text-white transition duration-300 hover:text-blue-600">
            Features
          </li>
          <li className="w-full cursor-pointer py-4 text-center text-xl uppercase text-white transition duration-300 hover:text-blue-600">
            Pricing
          </li>
          <li className="w-full  cursor-pointer py-4 text-center text-xl uppercase text-white transition duration-300 hover:text-blue-600">
            Contact
          </li>
          <li className="w-full py-4 text-center text-xl uppercase text-white">
            <button className="w-full border-2 py-2 font-medium  uppercase tracking-wider transition duration-300 hover:bg-white hover:text-blue-700">
              Login
            </button>
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <img
            src="/images/icon-facebook.svg"
            alt="Facebook icon"
            className="mx-4 w-8 cursor-pointer"
          />
          <img
            src="/images/icon-twitter.svg"
            alt="Twitter icon"
            className="mx-4 w-8 cursor-pointer"
          />
        </div>
      </div>
    </nav>
  )
}

export default MobileNav
