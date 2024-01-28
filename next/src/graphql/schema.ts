import "reflect-metadata";

import { GraphQLSchema } from "graphql";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { UsersQuery } from "./resolvers/user/UsersQuery";
import { TagsQuery } from "./resolvers/tag/TagsQuery";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GroupsQuery } from "./resolvers/group/GroupsQuery";

export function getSchema(): GraphQLSchema {
  const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
    resolvers: [UsersQuery, TagsQuery, GroupsQuery],
  });

  return makeExecutableSchema({ typeDefs, resolvers });
}
