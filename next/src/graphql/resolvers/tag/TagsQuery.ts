import { Query, Resolver } from "type-graphql";
import { TagType } from "../../types/TagType";
import prismaClient from "@/prisma/db";

@Resolver()
export class TagsQuery {
  @Query(() => [TagType])
  tags() {
    return prismaClient.tag.findMany();
  }
}
