import { Query, Resolver } from "type-graphql";
import { UserType } from "../../types/UserType";

@Resolver()
export class UsersQuery {
  private fakeMe: UserType = {
    userId: "1",
    email: "toto@toto.com",
    name: "cédric",
    isAdmin: true,
    createdAt: "now",
  };

  @Query(() => UserType)
  me() {
    return this.fakeMe;
  }

  @Query(() => String)
  test() {
    return "test";
  }
}
