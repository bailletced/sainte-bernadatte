import "reflect-metadata"; //Needed to import it once in the global namespace

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { UsersQuery } from "@/graphql/resolvers/user/UsersQuery";

interface MyContext {
  token?: String;
}


let graphqlSchema =  await buildSchema({
  resolvers: [UsersQuery],
  emitSchemaFile: false,
});
const server = new ApolloServer<MyContext>({
  schema: graphqlSchema,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };