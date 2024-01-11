import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class GroupType{

  @Field((type) => ID)
  groupId: string

  @Field((type) => String)
  name: string

  @Field((type) => String)
  description: string

  @Field((type) => String)
  imgPath: string
}
