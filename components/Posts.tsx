import Link from 'next/link'
import React from 'react'
import type { PostParams } from '@/types/types'

type Props = {
    posts: PostParams[]
}

const Posts = ({posts}: Props) => {
  return (
    <div className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      {posts.map((post: PostParams) => {
        return (
          <div className='mb-32'>
            <div className="flex justify-between items-center">
              </div>
              <div className="mb-2">
                <h1 className="text-2xl text-gray-700 font-bold hover:text-gray-600">{post.id}.{post.title}</h1>
                <p className="mb-2 text-gray-600">{post.description}</p>
                <span className="font-light text-gray-600">{post.date}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <Link className="text-blue-600 hover:underline" href={`/blog/${post.id}`}>Read more</Link>
              </div>
          </div>
      )})}
    </div>
  )
}

export default Posts