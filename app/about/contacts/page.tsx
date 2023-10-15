import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contacts | Next App',
}

const Contacts = () => {
  return (
    <h1 className='m-8 grid place-items-center'>
        Contact page
    </h1>
  )
}

export default Contacts
