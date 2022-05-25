import React from 'react'

const AboutMe = () => {
  return (
    <section className="flex flex-col-reverse items-center px-12 lg:flex-row lg:justify-between lg:py-24">
      <div className="max-w-lg">
        <header>
          <h1 className="my-4 max-w-md text-center text-4xl font-medium text-blue-700 lg:text-left">
            A Simple Bookmark Manager
          </h1>
        </header>
        <p className="mt-4 max-w-md text-center text-blue-600 lg:my-6 lg:text-left">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sited load instantly. Try it for free.
        </p>
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-evenly lg:justify-start lg:text-left">
          <button className="primary-button my-4 lg:mr-8">
            Get it on Chrome
          </button>
          <button className="secondary-button">Get it on Firefox</button>
        </div>
      </div>
      <div className="max-w-xl">
        <img
          src="/images/illustration-hero.svg"
          alt="App preview"
          className=""
        />
      </div>
    </section>
  )
}

export default AboutMe
