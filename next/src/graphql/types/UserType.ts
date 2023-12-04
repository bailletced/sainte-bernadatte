import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class UserType {
  @Field((type) => ID)
  userId: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  email: string;

  @Field((type) => Boolean)
  isAdmin: boolean;

  @Field((type) => String)
  createdAt: string;
}
