import React, { useState } from 'react'

const AccordionData = [
  {
    title: 'What is bookmark',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quam nulla porttitor massa. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Lorem mollis aliquam ut porttitor leo. Augue ut lectus arcu bibendum. Tellus orci ac auctor augue mauris augue neque. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.',
  },
  {
    title: 'How can I request a new browser?',
    content:
      'Suspendisse sed nisi lacus sed viverra tellus. Nibh cras pulvinar mattis nunc sed blandit libero. Facilisi morbi tempus iaculis urna. Felis imperdiet proin fermentum leo vel orci porta non. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Pulvinar mattis nunc sed blandit libero.',
  },
  {
    title: 'Is there a mobile app?',
    content:
      ' Sed velit dignissim sodales ut. Massa tincidunt dui ut ornare lectus. Sed viverra tellus in hac habitasse platea dictumst. Consectetur adipiscing elit ut aliquam purus sit. Orci ac auctor augue mauris augue neque. Fermentum odio eu feugiat pretium nibh ipsum.',
  },
  {
    title: 'What about other Chromium browsers?',
    content:
      'Magna fermentum iaculis eu non diam. Consequat mauris nunc congue nisi. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Sed tempus urna et pharetra pharetra. Turpis tincidunt id aliquet risus. Leo vel fringilla est ullamcorper.',
  },
]

const Accordion = () => {
  const [active, setActive] = useState(5)

  const handleAccordionChange = (i: number) => {
    if (active === i) {
      setActive(1000)
    } else {
      setActive(i)
    }
  }

  return (
    <div className="container mt-8 max-w-xl overflow-x-hidden text-sm md:text-base">
      {AccordionData.map(({ title, content }, i) => (
        <div className="w-full border-t border-b py-3">
          <h3
            className={`flex cursor-pointer items-center justify-between text-blue-700  transition duration-300 ${
              active === i ? 'text-red' : 'hover:text-red'
            }`}
            onClick={() => handleAccordionChange(i)}
          >
            {title}
            <img
              src="/images/icon-arrow.svg"
              alt="Check answer"
              className={
                active === i ? 'rotate-180 transition duration-300' : ''
              }
            />
          </h3>
          <p
            className={`my-8 max-w-lg text-blue-600 ${
              active === i ? 'visible' : 'hidden'
            }`}
          >
            {content}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Accordion
