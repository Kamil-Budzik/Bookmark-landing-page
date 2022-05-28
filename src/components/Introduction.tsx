import React from 'react'

interface Props {
  title: string
  content: string
}

const Introduction = ({ title, content }: Props) => {
  return (
    <div className="max-w-lg text-center">
      <header>
        <h2 className="text-3xl font-medium text-blue-700">{title}</h2>
      </header>
      <p className="my-4  text-blue-600">{content}</p>
    </div>
  )
}

export default Introduction
