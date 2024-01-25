import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class InformationsType {
  @Field((type) => ID)
  informationsId: String;

  @Field((type) => String)
  phoneNumber: String;

  @Field((type) => String)
  mail: String;
}
