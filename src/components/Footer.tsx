import React from 'react'

const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center bg-blue-700 py-12 text-blue-600">
      <a href="#">
        <img src="/images/logo-dark.svg" alt="" />
      </a>
      <ul>
        <li className="my-4 text-center text-lg uppercase transition duration-300 hover:text-white">
          <a href="#features">Features</a>
        </li>
        <li className="my-4 text-center text-lg uppercase transition duration-300 hover:text-white">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="my-4 text-center text-lg uppercase transition duration-300 hover:text-white">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="mt-4 flex items-center">
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
    </footer>
  )
}

export default Footer
