import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Team | Next App',
}
const Team = () => {
  return (
    <h1 className='m-8 grid place-items-center'>
        Team page
    </h1>
  )
}

export default Team
