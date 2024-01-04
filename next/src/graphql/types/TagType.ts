import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class TagType {
  @Field((type) => ID)
  tagId: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  createdAt: string;

  @Field((type) => String)
  updatedAt: string;
}
