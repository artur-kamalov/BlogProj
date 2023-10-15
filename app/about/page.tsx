import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About | Next App',
}

export default function About() {
    return (
      <h1 className='m-6 grid place-items-center font-bold'>Select subitem</h1>
    )
}
  