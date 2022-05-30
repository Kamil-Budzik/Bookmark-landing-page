import React from 'react'

import Introduction from './Introduction'
import Cart from './Cart'

const CARTS = [
  { browser: 'Chrome', version: '62', img: '/images/logo-chrome.svg' },
  { browser: 'Firefox', version: '55', img: '/images/logo-firefox.svg' },
  { browser: 'Opera', version: '46', img: '/images/logo-opera.svg' },
]

const Extension = () => {
  return (
    <section className="mt-32 flex flex-col items-center px-12" id="pricing">
      <Introduction
        title="Dowload the extension"
        content="We've got more browsers in the pipeline. Please do let us know if you've
        got a favourite you'd like us to prioritize."
      />
      <ul className="flex w-full grid-cols-3 flex-wrap items-center justify-center">
        {CARTS.map((cart) => (
          <Cart {...cart} key={cart.browser} />
        ))}
      </ul>
    </section>
  )
}

export default Extension
