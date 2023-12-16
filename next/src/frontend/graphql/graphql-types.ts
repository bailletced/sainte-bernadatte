export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  me: UserType;
  tags: Array<TagType>;
  test: Scalars['String']['output'];
};

export type TagType = {
  __typename?: 'TagType';
  createdAt: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tagId: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type TagsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQueryQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'TagType', name: string, tagId: string }> };
