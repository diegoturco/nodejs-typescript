import { UserService } from "../services/UserResolverService";
import { Arg, Mutation, Query, Resolver} from "type-graphql";
import { User } from "../entities/User";
import { UserInput } from "../types/UserInput";

@Resolver(_of => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: false})
  async user(@Arg("id") id: string){
    return await this.userService.findOne(id);
  };

  @Query(() => [User])
  async users(
    @Arg("limit") limit: number,
    @Arg("offset") offset: number) {
    return await this.userService.find(limit, offset);
  };

  @Mutation(() => User)
  async createUser(@Arg("data") data: UserInput) { 
    return await this.userService.create(data);
  };

  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: string,
    @Arg("data") data: UserInput
  ) { 
    return await this.userService.updateOne(id, data);
  };

  @Mutation(() => User)
  async deleteUser(@Arg("id") id: string) {   
    return await this.userService.deleteOne(id);
  }    
}



