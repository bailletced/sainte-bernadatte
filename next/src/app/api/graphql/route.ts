import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { ApolloServer } from "@apollo/server";

import { NextRequest } from "next/server";
import { getSchema } from "@/graphql/schema";

interface MyContext {
  token?: String;
}

let graphqlSchema = await getSchema();

const server = new ApolloServer<MyContext>({
  schema: graphqlSchema,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req: any) => ({ req }),
});

export { handler as GET, handler as POST };
