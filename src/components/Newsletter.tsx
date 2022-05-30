import React from 'react'

const Newsletter = () => {
  return (
    <section className="mt-32 flex w-full justify-center  bg-blue-500 px-12 py-12 text-white">
      <div className="max-w-md text-center">
        <header>
          <p className="text-lg uppercase">35.000+ Already joined</p>
          <h3 className="my-2 text-center text-3xl font-medium">
            Stay up-to-date with what we're doing
          </h3>
        </header>
        <form className="flex flex-col">
          <input
            className="rounded px-4 py-3 placeholder:text-blue-600"
            placeholder="Enter your email adress"
            type="text"
          />
          <button type="submit" className="red-button mt-4 rounded">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter