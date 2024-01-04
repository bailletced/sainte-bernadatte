import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class MassType {
  @Field((type) => ID)
  MassId: string;

  @Field((type) => Boolean)
  isWeekly: boolean;

  @Field((type) => String)
  title: string;

  @Field((type) => String)
  date: string;

  @Field((type) => String , {nullable :true})
  content?: string;
}
