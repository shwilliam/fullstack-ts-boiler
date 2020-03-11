import React, { useState, FormEvent, useContext } from 'react'
import { StoreContext } from '../context/store'

const NewPostForm = () => {
  const {publish} = useContext(StoreContext)
  const [titleInput, setTitleInput] = useState('')
  const [contentInput, setContentInput] = useState('')

  const onPostSubmit = (e: FormEvent<HTMLFormElement>) => {
    publish({title: titleInput, content: contentInput})
    setTitleInput('')
    setContentInput('')
    e.preventDefault()
  }

  return (
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
  )
}

export default NewPostForm
