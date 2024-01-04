import { Arg, Mutation, Query, Resolver } from "type-graphql";
import prismaClient from "@/prisma/db";
import { DumbModelType } from "../../types/DumbModelType";

@Resolver()
export class DumbQuery {

  @Query(() => [DumbModelType])
  dumbQuery() {
    return prismaClient.dumbModel.findMany();
  }

  @Mutation(() => DumbModelType)
  createDumb(@Arg('name') name:string){
    return prismaClient.dumbModel.create({
      data: {
        dumbName: name,
      },
    });
  }



}
