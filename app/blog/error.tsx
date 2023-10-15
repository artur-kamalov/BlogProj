'use client'

export default function ErrorWrapper({error}: {error:Error}) {
    return( 
        <h1 
            className='m-8 grid place-items-center font-extrabold'>
            Oops!.. {error.message}
        </h1>)
}