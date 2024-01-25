import { Query, Resolver } from "type-graphql";
import prismaClient from "@/prisma/db";
import { InformationsType } from "../../types/InformationsType";

@Resolver()
export class InformationsQuery {

  @Query(() => InformationsType)
  informations() {
    return prismaClient.informations.findFirst();
  }
}
