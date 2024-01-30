import { Args, Query, Resolver } from "type-graphql";
import { ForwardPaginationArgs } from "../../pagination/cursor/cursorPagination";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import prismaClient from "@/prisma/db";
import { MassConnection } from "../../types/MassType";

@Resolver()
export class MassesQuery {
  @Query(() => MassConnection, { nullable: true })
  async masses(@Args() { after, first }: ForwardPaginationArgs) {
    return await findManyCursorConnection(
      (args) =>
        prismaClient.mass.findMany({
          ...args,
          cursor: args.cursor ? { massId: args.cursor?.id } : undefined,
        }),
      () => prismaClient.mass.count(),
      { after: after, first },
      {
        getCursor: (mass) => ({ id: mass.id }),
      },
    );
  }
}
