import React, { useEffect, useState, FormEvent } from 'react'
import { getAllPosts, Post, addPost } from './graphql'

const useStore = () => {
  const [posts, setPosts] = useState()

  const fetchPosts = async () => {
    const allPosts = await getAllPosts()
    setPosts(allPosts?.data?.allPosts)
  }

  const publish = async (input: {title: string, content: string}) => {
    await addPost({input})
    fetchPosts()
  }

  useEffect(()=> {
    fetchPosts()
  }, [])

  return {posts, publish}
}

const App = () => {
  const {posts, publish} = useStore()

  const [titleInput, setTitleInput] = useState('')
  const [contentInput, setContentInput] = useState('')

  const onPostSubmit = (e: FormEvent<HTMLFormElement>) => {
    publish({title: titleInput, content: contentInput})
    setTitleInput('')
    setContentInput('')
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={onPostSubmit}>
        <label>
          Title:
          <input
            name='title'
            type='text'
            value={titleInput}
            onChange={e => setTitleInput(e.target.value)}
          />
        </label>

        <label>
          Content:
          <input
            name='content'
            type='text'
            value={contentInput}
            onChange={e => setContentInput(e.target.value)}
          />
        </label>

        <button type='submit'>Publish</button>
      </form>

      <ul>
        {posts
          ? posts.map((post: Post) => <li key={post.id}>{post.title}</li>)
          : <p>loading...</p>
        }
      </ul>
    </>
  )
}

export default App
