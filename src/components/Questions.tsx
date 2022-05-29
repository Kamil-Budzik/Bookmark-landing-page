import React from 'react'

import Accordion from './Accordion'
import Introduction from './Introduction'

const Questions = () => {
  return (
    <section className="mt-24 flex flex-col items-center px-8">
      <Introduction
        title="Frequently Asked Questions"
        content="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <Accordion />
      <button className="primary-button mt-12">More info</button>
    </section>
  )
}

export default Questions
