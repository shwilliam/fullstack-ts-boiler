import { InputType, Field } from 'type-graphql'
import { Post } from './Post'

@InputType({ description: 'Input type for new post' })
export class NewPostInput implements Partial<Post> {
  @Field()
  title: string;

  @Field()
  content: string;
}
