import { Query, Mutation, Arg } from 'type-graphql'
import {
  getAllPosts,
  addPost,
} from '../repository'
import { Post } from './Post'
import { NewPostInput } from './NewPostInput'

export class FeedResolver {
  @Query(returns => [Post])
  public async allPosts(): Promise<Post[]> {
    return await getAllPosts()
  }

  @Mutation(returns => Post)
  public async addPost(@Arg('input') input: NewPostInput): Promise<Post> {
    return await addPost(input)
  }
}
