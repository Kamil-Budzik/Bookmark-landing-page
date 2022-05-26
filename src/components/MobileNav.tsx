import React from 'react'

interface Props {
  closeNav: () => void
}

const MobileNav = ({ closeNav }: Props) => {
  return (
    <nav className="absolute top-0 bottom-0 left-0 right-0 bg-blue-700 opacity-95">
      <div>
        <header className="flex items-center justify-between px-8 py-12">
          <img
            className="w-44 fill-white "
            src="/images/logo-dark.svg"
            alt="Bookmark logo"
          />
          <img
            src="/images/icon-close.svg"
            alt="Close nav"
            className="w-8 cursor-pointer fill-white"
            onClick={closeNav}
          />
        </header>
      </div>
    </nav>
  )
}

export default MobileNav
