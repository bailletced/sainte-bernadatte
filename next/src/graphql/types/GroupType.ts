import { Field, ID, ObjectType } from "type-graphql";
import {
  ConnectionType,
  EdgeType,
} from "../pagination/cursor/cursorPagination";

@ObjectType()
export class GroupType {
  @Field((type) => ID)
  groupId: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  description: string;

  @Field((type) => String)
  createdAt: string;

  @Field((type) => String)
  updatedAt: string;
}

@ObjectType()
class ItemEdge extends EdgeType(GroupType) {}

@ObjectType()
export class GroupConnection extends ConnectionType({
  edge: ItemEdge,
  node: GroupType,
}) {}
