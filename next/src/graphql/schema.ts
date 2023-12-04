import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { UsersQuery } from "./resolvers/user/UsersQuery";

export async function getSchema(): Promise<GraphQLSchema> {
  return await buildSchema({
    resolvers: [UsersQuery],
    emitSchemaFile: false,
  });
}
