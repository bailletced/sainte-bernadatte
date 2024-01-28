import { ObjectType, Field, ArgsType, ClassType } from "type-graphql";
import { Min } from "class-validator";
type HasConstructor<T> = T & { constructor: { name: string } };

/** Allows forward pagination of a Relay connection type
 * @public
 */
@ArgsType()
export class ForwardPaginationArgs {
  /** Grabs records starting from after the given cursor.
   * @public
   */
  @Field(() => String, {
    nullable: true,
    description: "Grabs records starting from after the given cursor.",
  })
  after?: string;

  /** Grabs the first n records.
   * @public
   */
  @Field(() => Number, {
    nullable: true,
    description: "Grabs the first n records.",
  })
  first?: number;
}

/** Allows backward pagination of a relay connection type
 * @public
 */
@ArgsType()
export class BackwardPaginationArgs {
  /** Grabs records ending before the given cursor.
   * @public
   */
  @Field(() => String, {
    nullable: true,
    description: "Grabs records ending before the given cursor.",
  })
  before?: string;

  /** Grabs the last n records.
   * @public
   */
  @Field(() => Number, {
    nullable: true,
    description: "Grabs the last n records.",
  })
  last?: number;
}

@ArgsType()
export class FullPaginationArgs
  implements ForwardPaginationArgs, BackwardPaginationArgs
{
  /** Grabs records ending before the given cursor.
   * @public
   */
  @Field(() => String, {
    nullable: true,
    description: "Grabs records ending before the given cursor.",
  })
  before?: string;

  /** Grabs the last n records.
   * @public
   */
  @Field(() => Number, {
    nullable: true,
    description: "Grabs the last n records.",
  })
  last?: number;

  /** Grabs records starting from after the given cursor.
   * @public
   */
  @Field(() => String, {
    nullable: true,
    description: "Grabs records starting from after the given cursor.",
  })
  after?: string;

  /** Grabs the first n records.
   * @public
   */
  @Field(() => Number, {
    nullable: true,
    description: "Grabs the first n records.",
  })
  first?: number;
}

/** PageInfo is information about the paging/cursoring happening on the server.
 * You can use this information to request either the next or previous pages.
 * Use it in conjunction with the `ForwardPaginationArgs` and `BackwardPaginationArgs`.
 * @public
 */
@ObjectType({
  description: `
  PageInfo is information about the paging/cursoring happening on the server. 
  You can use this information to request either the next or previous pages.
  Use it in conjunction with the \`ForwardPaginationArgs\` and \`BackwardPaginationArgs\`.
`,
})
export class PageInfo {
  /** Whether the query has more records after the end cursor.
   * @public
   */
  @Field(() => Boolean, {
    description: "Whether the query has more records after the end cursor.",
  })
  hasNextPage!: boolean;

  /** Whether the query has more records before the start cursor.
   * @public
   */
  @Field(() => Boolean, {
    description: "Whether the query has more records before the start cursor.",
  })
  hasPreviousPage!: boolean;

  /** The cursor representing the first record from the returned query.
   * Can be used to query before or after this record.
   * @public
   */
  @Field(() => String, {
    nullable: true,
    description: `
    The cursor representing the first record from the returned query. 
    Can be used to query before or after this record.`,
  })
  startCursor?: string;

  /** The cursor representing the last record from the returned query.
   * Can be used to query before or after this record. */
  @Field(() => String, {
    nullable: true,
    description: `
    The cursor representing the last record from the returned query. 
    Can be used to query before or after this record.`,
  })
  endCursor?: string;
}

type NodesType = object;
type ClassReturnType<T extends ClassType<object>> = T extends ClassType<infer J>
  ? J
  : never;
class RelayEdgeType<NodeType extends NodesType = object> {
  cursor!: string;
  node!: NodeType;
}

/** Setup a extensible EdgeType
 *
 * @param nodeType
 * @returns A graphql object type that represents fields that can be queried.
 * @example
 * Usage:
 *
 * ```ts
 * // create an object type
 * @ObjectType()
 * class Item {
 *   @Field()
 *   id!: number;
 * }
 *
 * // Create your extensible Edge type
 * @ObjectType()
 * export class ItemEdge extends EdgeType(Item) {
 *   // add additional properties here
 *   @Field(() => Date)
 *   createdAt: Date
 * }
 * ```
 *
 * @public
 */
export function EdgeType<NodeType extends NodesType = object>(
  nodeType: ClassType<NodeType> | HasConstructor<NodeType>,
): ClassType<RelayEdgeType<NodeType>> {
  /** An Edge Type is an intermediate result that is generally returned
   * from the server as part of a ConnectionType which allows rerunning of a query at
   * any given point through its use of cursors.
   * @public
   */
  @ObjectType(`${nodeType.constructor.name}Edge`, {
    description: `
    An Edge Type is an intermediate result that is generally returned
    from the server as part of a ConnectionType which allows rerunning of a query at
    any given point through its use of cursors.`,
  })
  class Edge extends RelayEdgeType<NodeType> {
    /** The data of the record that goes along with this edge.
     * @public
     */
    @Field(() => nodeType, {
      description: "The data of the record that goes along with this edge.",
    })
    node!: ClassReturnType<ClassType<NodeType>>;

    /** Represents this location in the query use it in `before` and `after` args
     * to query before and after this location.
     * @public
     */
    @Field(() => String, {
      description: `
      Represents this location in the query use it in \`before\` and \`after\` args
      to query before and after this location.`,
    })
    cursor!: string;
  }

  return Edge;
}

class RelayConnectionType<
  EdgeType extends RelayEdgeType = RelayEdgeType,
  NodeType extends NodesType = object,
> {
  pageInfo!: PageInfo;
  edges!: EdgeType[];
  nodes!: NodeType[];
}

/** Setup an extensible ConnectionType
 *
 * @returns A graphql object type that represents fields that can be queried.
 * @example
 * Usage:
 *
 * ```ts
 * @ObjectType()
 * class Item {
 *   @Field()
 *   id!: number;
 * }
 *
 * @ObjectType()
 * export class ItemEdge extends EdgeType(Item) {}
 *
 *
 * // You must create an edge type first
 * @ObjectType()
 * export class ItemConnection extends ConnectionType({
 *   edge: ItemEdge,
 *   node: Item,
 * }) {}
 * ```
 *
 * @public
 */
export function ConnectionType<
  EdgeType extends RelayEdgeType = RelayEdgeType,
  NodeType extends NodesType = object,
>({
  edge,
  node,
}: {
  edge: ClassType<EdgeType> | HasConstructor<EdgeType>;
  node: ClassType<NodeType> | HasConstructor<NodeType>;
}): ClassType<RelayConnectionType<EdgeType, NodeType>> {
  /** A Connection Type is returned as a result from the server
   * that allows you to rerun a query at a different location using cursors
   * which are available in both the PageInfo and the EdgeType.
   * @public
   */
  @ObjectType(`${edge.constructor.name.replace("Edge", "")}Connection`, {
    description: `
    A Connection Type is returned as a result from the server
    that allows you to rerun a query at a different location using cursors 
    which are available in both the PageInfo and the EdgeType.`,
  })
  class Connection extends RelayConnectionType<EdgeType, NodeType> {
    /** PageInfo is information about the paging/cursoring happening on the server.
     * You can use this information to request either the next or previous pages.
     * Use it in conjunction with the `ForwardPaginationArgs` and `BackwardPaginationArgs`.
     * @public
     */
    @Field(() => PageInfo, {
      description: `
      PageInfo is information about the paging/cursoring happening on the server.
      You can use this information to request either the next or previous pages.
      Use it in conjunction with the \`ForwardPaginationArgs\` and \`BackwardPaginationArgs\`.
      `,
    })
    pageInfo!: PageInfo;

    /** A list of objects with a record data object (node) and its corresponding cursor from the query.
     * @public
     */
    @Field(() => [edge], {
      description:
        "A list of objects with a record data (node) and its corresponding cursor from the query.",
    })
    edges!: ClassReturnType<ClassType<EdgeType>>[];

    /** A list of record data objects from the query.
     * @public
     */
    @Field(() => [node])
    nodes!: ClassReturnType<ClassType<NodeType>>[];

    /** The estimated total count of records that may be returned across multiple queries.
     * @public
     */
    @Field(() => Number, {
      description:
        "The estimated total count of records that may be returned across multiple queries.",
    })
    @Min(0)
    totalCount!: number;
  }

  return Connection;
}
