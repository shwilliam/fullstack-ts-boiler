import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { getAllPosts, addPost, Post, NewPostInput } from '../graphql'

const StoreContext = createContext<IStore>({ posts: [], publish: () => {} })

const StoreContextProvider = (props: {children: ReactNode}) => {
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

  return (
    <StoreContext.Provider value={{ posts, publish }}>
      {props.children}
    </StoreContext.Provider>
  )
}

type NoOp = () => void

interface IStore {
  posts: Post[];
  publish: ((input: NewPostInput) => Promise<void>) | NoOp;
}

export { StoreContext, StoreContextProvider }
