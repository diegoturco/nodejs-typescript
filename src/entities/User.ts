import { ObjectType, Field } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";

@ObjectType()
export class User {  
    @Field(() => String)  
    id: string;  

    @Field()
    @Property({ required: true })
    name: String;

    @Field()
    @Property({ required: true })
    email: String;
}

export const UserModel = getModelForClass(User);