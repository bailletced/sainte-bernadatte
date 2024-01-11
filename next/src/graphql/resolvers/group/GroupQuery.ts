import { Query, Resolver } from "type-graphql";
import { GroupType } from "../../types/GroupType";
import prismaClient from "@/prisma/db";

@Resolver()
export class GroupQuery{

  @Query(() => [GroupType])
  groups(){
    return prismaClient.group.findMany();
  }
}
