import { Query, Resolver } from "type-graphql";
import { MassType } from "../../types/MassType";
import prismaClient from "@/prisma/db";

@Resolver()
export class MassQuery{

  @Query(() => [MassType])
  fetchAllMasses(){
    return prismaClient.mass.findMany()
  }

}
