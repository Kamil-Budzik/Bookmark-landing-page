import React from 'react'

const Footer = () => {
  return (
    <footer className="flex  w-full justify-center bg-blue-700 py-12">
      <div className="flex flex-col items-center justify-center text-blue-600 md:flex-row">
        <a href="#">
          <img src="/images/logo-dark.svg" alt="" />
        </a>
        <ul className="md:flex md:flex-row ">
          <li className="my-4 text-center text-lg uppercase transition duration-300 hover:text-white md:px-8">
            <a href="#features">Features</a>
          </li>
          <li className="my-4 text-center text-lg uppercase transition duration-300 hover:text-white md:px-8">
            <a href="#pricing">Pricing</a>
          </li>
          <li className="my-4 text-center text-lg uppercase transition duration-300 hover:text-white md:px-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="mt-4 flex items-center md:mt-0">
          <img
            className="w-sm mx-4 cursor-pointer"
            src="images/icon-facebook.svg"
            alt="Facebook"
          />
          <img
            className="w-sm mx-4 cursor-pointer"
            src="images/icon-twitter.svg"
            alt="Twitter"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
