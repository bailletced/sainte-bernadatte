import { Query, Resolver } from "type-graphql";
import { MassType } from "../../types/MassType";

@Resolver()
export class MassQuery{

  @Query(() => [MassType])
  fetchAllMasses(){
    return prismaClient?.mass.findMany()
  }

}
