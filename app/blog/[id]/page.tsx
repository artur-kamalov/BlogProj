import { Metadata } from "next"

type Props = {
  params: {
      id: string
  }
}
async function getData(id: string | number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: {
        revalidate: 60,
      }
    })
    if (!response.ok) throw new Error("Unable to fetch posts.")
    return response.json()  
}
export async function generateMetadata({ params:{id}} : Props):Promise<Metadata> {
    const post = await getData(id)
    return {
        title: post.title,
    }
}
export default async function Post({ params:{id}} : Props) {
    const post = await getData(id)
  return (
    <>
      <h1 className='m-8 grid place-items-center'>
          {id}.{post.title}
      </h1>
      <p>
          {post.body}
      </p>
    </>
  )
}

