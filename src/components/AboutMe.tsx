import React from 'react'

const AboutMe = () => {
  return (
    <section className="flex flex-col-reverse">
      <div>
        <header>
          <h1 className="text-blue-500">A Simple Bookmark Manager</h1>
        </header>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sited load instantly. Try it for free.
        </p>
        <button>Get it on Firefox</button>
      </div>
      <div>
        <div className="" />
        <img src="/images/illustration-hero.svg" alt="App preview" />
      </div>
    </section>
  )
}

export default AboutMe
