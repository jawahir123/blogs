import React, { useEffect, useState } from 'react'
import PostItem from '../components/PostItem'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://admin.just.edu.so/wp-json/wp/v2/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Latest from blog</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {
             posts.map(post => <PostItem key={post.id} post={post}/>)
          }
        </div>
    </div>
</section>

  )
}

export default Posts