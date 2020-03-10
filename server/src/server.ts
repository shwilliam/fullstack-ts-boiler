import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { FeedResolver } from './models/FeedResolver'
import { buildSchema } from 'type-graphql'

(async (): Promise<void> => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [FeedResolver],
      validate: false
    })
  })

  const { url } = await server.listen(process.env.PORT || 80)

  console.log(`Server running on ${url}`)
})()
