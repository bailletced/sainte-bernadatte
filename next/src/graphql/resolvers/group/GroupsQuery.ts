import { Args, Query, Resolver } from "type-graphql";
import { GroupConnection } from "../../types/GroupType";
import { ForwardPaginationArgs } from "../../pagination/cursor/cursorPagination";
import { findManyCursorConnection } from "@devoxa/prisma-relay-cursor-connection";
import prismaClient from "@/prisma/db";

@Resolver()
export class GroupsQuery {
  @Query(() => GroupConnection, { nullable: true })
  async groups(@Args() { after, first }: ForwardPaginationArgs) {
    return await findManyCursorConnection(
      (args) =>
        prismaClient.group.findMany({
          ...args,
          cursor: args.cursor ? { groupId: args.cursor?.id } : undefined,
        }),
      () => prismaClient.group.count(),
      { after: after, first },
      {
        getCursor: (group) => ({ id: group.groupId }),
      },
    );
  }
}
