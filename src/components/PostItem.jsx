import React from 'react'
import { Link } from 'react-router-dom'
import DOMPurify from 'dompurify'

function PostItem({post}) {
  return (
    <div>
    <a href="#" title="" class="block aspect-w-4 aspect-h-3">
        <img class="object-cover w-full h-full" src={post.x_featured_media_medium} alt="" />
    </a>
    <span class="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-sky-500 bg-sky-100 mt-9"> Marketing </span>
    <p class="mt-6 text-xl font-semibold">
        <Link to={post.slug} title="" class="text-black"> {post.title.rendered} </Link>
    </p>
    <p class="mt-4 text-gray-600">{post.excerpt.rendered?(
        // Sanitize the excerpt content using DOMPurify
        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.excerpt.rendered) }} />
      ) : (
        <p>No excerpt available.</p>
    )}</p>
    <div class="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
    <span class="block text-sm font-bold tracking-widest text-gray-500 uppercase"> Martin Jones . June 12, 2021 </span>
</div>
  )
}

export default PostItem