import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class DumbModelType{
  @Field((type) => ID)
  dumbModelId:string;

  @Field((type) => String)
  dumbName:string;
}
