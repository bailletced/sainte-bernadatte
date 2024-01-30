import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import {
  ConnectionType,
  EdgeType,
} from "../pagination/cursor/cursorPagination";
import { EWeekday } from "../enums/WeekdayEnum";

@ObjectType()
export class MassType {
  @Field((type) => ID)
  massId: string;

  @Field((type) => EWeekday)
  weekDay: EWeekday;

  @Field((type) => String)
  hour: string;

  @Field((type) => String)
  createdAt: string;

  @Field((type) => String)
  updatedAt: string;
}

@ObjectType()
class MassEdge extends EdgeType(MassType) {}

@ObjectType()
export class MassConnection extends ConnectionType({
  edge: MassEdge,
  node: MassType,
}) {}
