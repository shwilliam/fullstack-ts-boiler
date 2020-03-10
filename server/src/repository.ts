import fs from 'fs'
import { Post } from './models/Post'
import { NewPostInput } from './models/NewPostInput'

const STATE_FILE = './data/blog.json'
let _state: Post[] = null

async function readFile(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) reject(err)
      resolve(data.toString())
    })
  })
}

async function saveChanges(): Promise<void> {
  if (_state) {
    const json = JSON.stringify(_state, null, 2)
    return new Promise((resolve, reject) => {
      fs.writeFile(STATE_FILE, json, err => {
        if (err) reject(err)
        else {
          resolve()
        }
      })
    })
  }
}

export async function getAllPosts(): Promise<Post[]> {
  if (!_state) _state = JSON.parse(await readFile(STATE_FILE))
  return _state
}

export async function addPost(postInput: NewPostInput): Promise<Post> {
  const allPosts = await getAllPosts()
  const newItem = new Post(postInput)

  allPosts.push(newItem)
  await saveChanges()

  return newItem
}
