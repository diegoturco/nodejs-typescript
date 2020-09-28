import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";
import { User } from "src/entities/User";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  @Length(1, 255)
  name: String;

  @Field()
  @IsEmail()
  email: String;  
}
