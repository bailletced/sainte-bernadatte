import "reflect-metadata";

import { GraphQLSchema } from "graphql";
import { buildTypeDefsAndResolversSync, registerEnumType } from "type-graphql";
import { UsersQuery } from "./resolvers/user/UsersQuery";
import { TagsQuery } from "./resolvers/tag/TagsQuery";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GroupsQuery } from "./resolvers/group/GroupsQuery";
import { MassesQuery } from "./resolvers/mass/MassesQuery";

export function getSchema(): GraphQLSchema {
  const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
    resolvers: [UsersQuery, TagsQuery, GroupsQuery, MassesQuery],
  });

  return makeExecutableSchema({ typeDefs, resolvers });
}
