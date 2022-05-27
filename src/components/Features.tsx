import React, { useState } from 'react'

const Features = () => {
  const [activeEl, setActiveEl] = useState(0)
  const NAVEL = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
  return (
    <section className="mt-32 flex flex-col items-center px-8">
      <div className="max-w-lg text-center">
        <header>
          <h2 className="text-3xl font-medium text-blue-700">Features</h2>
        </header>
        <p className="my-4  text-blue-600">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className="text-blue-600 md:mt-12 md:flex md:justify-between">
          {NAVEL.map((el, i) => (
            <li
              className={`cursor-pointer border-t border-b py-3 md:border-t-0 ${
                activeEl === i && 'active-feature'
              }`}
              onClick={() => setActiveEl(i)}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Features
