import { ObjectType, Field, ID } from 'type-graphql'
import shortid from 'shortid'

@ObjectType()
export class Post {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  constructor(init: Partial<Post>) {
    Object.assign(this, init)
    this.id = shortid.generate()
  }
}
