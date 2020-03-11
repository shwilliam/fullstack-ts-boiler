import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
   __typename?: 'Mutation';
  addPost: Post;
};


export type MutationAddPostArgs = {
  input: NewPostInput;
};

export type NewPostInput = {
  title: Scalars['String'];
  content: Scalars['String'];
};

export type Post = {
   __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  allPosts: Array<Post>;
};

export type AddPostMutationVariables = {
  input: NewPostInput;
};


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { addPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
  ) }
);

export type AllPostsQueryVariables = {};


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { allPosts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content'>
  )> }
);


export const AddPostDocument = gql`
    mutation addPost($input: NewPostInput!) {
  addPost(input: $input) {
    id
    title
    content
  }
}
    `;
export type AddPostMutationFn = ApolloReactCommon.MutationFunction<AddPostMutation, AddPostMutationVariables>;
export type AddPostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddPostMutation, AddPostMutationVariables>, 'mutation'>;

    export const AddPostComponent = (props: AddPostComponentProps) => (
      <ApolloReactComponents.Mutation<AddPostMutation, AddPostMutationVariables> mutation={AddPostDocument} {...props} />
    );
    
export type AddPostProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddPostMutation, AddPostMutationVariables> & TChildProps;
export function withAddPost<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddPostMutation,
  AddPostMutationVariables,
  AddPostProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddPostMutation, AddPostMutationVariables, AddPostProps<TChildProps>>(AddPostDocument, {
      alias: 'addPost',
      ...operationOptions
    });
};
export type AddPostMutationResult = ApolloReactCommon.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = ApolloReactCommon.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const AllPostsDocument = gql`
    query allPosts {
  allPosts {
    id
    title
    content
  }
}
    `;
export type AllPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllPostsQuery, AllPostsQueryVariables>, 'query'>;

    export const AllPostsComponent = (props: AllPostsComponentProps) => (
      <ApolloReactComponents.Query<AllPostsQuery, AllPostsQueryVariables> query={AllPostsDocument} {...props} />
    );
    
export type AllPostsProps<TChildProps = {}> = ApolloReactHoc.DataProps<AllPostsQuery, AllPostsQueryVariables> & TChildProps;
export function withAllPosts<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllPostsQuery,
  AllPostsQueryVariables,
  AllPostsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, AllPostsQuery, AllPostsQueryVariables, AllPostsProps<TChildProps>>(AllPostsDocument, {
      alias: 'allPosts',
      ...operationOptions
    });
};
export type AllPostsQueryResult = ApolloReactCommon.QueryResult<AllPostsQuery, AllPostsQueryVariables>;