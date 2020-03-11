import React from 'react'
import { NewPostForm, PostList } from './components'
import { StoreContextProvider } from './context/store'

const App = () => (
  <StoreContextProvider>
    <NewPostForm/>
    <PostList/>
  </StoreContextProvider>
)

export default App
