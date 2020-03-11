import React, { useContext } from 'react'
import { Post } from '../graphql'
import { StoreContext } from '../context/store'

const PostList = () => {
  const {posts} = useContext(StoreContext)

  return (
    <ul>
      {posts
        ? posts.map((post: Post) => <li key={post.id}>{post.title}</li>)
        : <p>loading...</p>
      }
    </ul>
  )
}

export default PostList
