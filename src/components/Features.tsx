import React, { useState } from 'react'

const ELEMENTS = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
const CONTENT = [
  {
    img: '/images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    content:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites',
  },
  {
    img: '/images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    content:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks',
  },
  {
    img: '/images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    content:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button',
  },
]

const Features = () => {
  const [activeEl, setActiveEl] = useState(0)

  const { title, content, img } = CONTENT[activeEl]

  return (
    <section className="mt-32 flex flex-col items-center px-12">
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
          {ELEMENTS.map((el, i) => (
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
      <article className="container mt-16 px-12  md:flex md:items-center md:justify-between">
        <img src={img} alt={title} className="w-full object-contain md:w-1/2" />
        <div className="mt-8 md:w-2/5">
          <header>
            <h3 className="text-2xl font-medium text-blue-700">{title}</h3>
          </header>
          <p className="my-4 text-blue-600 md:my-8">{content}</p>
          <button className="primary-button">More info</button>
        </div>
      </article>
    </section>
  )
}

export default Features
