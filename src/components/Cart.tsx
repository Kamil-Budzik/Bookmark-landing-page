import React from 'react'

interface Props {
  browser: string
  version: string
  img: string
}

const Cart = ({ browser, version, img }: Props) => {
  return (
    <li className="mx-12 mt-8 shadow">
      <div className="flex flex-col items-center px-12 py-8  ">
        <img src={img} alt={browser} className="my-8" />
        <header className="text-xl font-medium text-blue-700">
          Add to {browser}
        </header>
        <p className="text-sm text-blue-600">Minimum version {version}</p>
      </div>

      <div className="flex w-full flex-col items-center border-t border-dashed border-t-blue-600 px-8">
        <button className="primary-button my-8">Add & Install Extension</button>
      </div>
    </li>
  )
}

export default Cart
