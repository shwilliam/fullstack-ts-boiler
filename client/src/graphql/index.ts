import { apolloClient } from './client'
import { GraphQLError } from 'graphql'
import { FetchResult } from 'apollo-boost'
import {
  AllPostsQuery,
  AllPostsDocument,
  AddPostMutation,
  AddPostMutationVariables,
  AddPostDocument,
  Post as IPost,
} from './generated';

export interface ExecutionResult<T> {
  errors?: ReadonlyArray<GraphQLError>;
  data?: Readonly<T>;
}

export async function getAllPosts(): Promise<
  ExecutionResult<AllPostsQuery>
> {
  return await apolloClient.query<AllPostsQuery>({
    query: AllPostsDocument,
    fetchPolicy: 'no-cache'
  })
}

export async function addPost(
  variables: AddPostMutationVariables
): Promise<FetchResult<AddPostMutation>> {
  return await apolloClient.mutate<
    AddPostMutation,
    AddPostMutationVariables
  >({
    mutation: AddPostDocument,
    variables,
  })
}

export type Post = IPost
