import "reflect-metadata";

import { GraphQLSchema } from "graphql";
import { buildTypeDefsAndResolversSync } from "type-graphql";
import { UsersQuery } from "./resolvers/user/UsersQuery";
import { TagsQuery } from "./resolvers/tag/TagsQuery";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { DumbQuery } from "./resolvers/dumbModel/DumbQuery";
import { MassQuery } from "./resolvers/mass/MassQuery";
import { GroupQuery } from "./resolvers/group/GroupQuery";

export function getSchema(): GraphQLSchema {
  const { typeDefs, resolvers } = buildTypeDefsAndResolversSync({
    resolvers: [UsersQuery, TagsQuery, DumbQuery, MassQuery, GroupQuery],
  });

  return makeExecutableSchema({ typeDefs, resolvers });
}
